import { useState, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { envVars } from '@/constants/env-vars';
import { MensajeGPT } from '@/constants/interfaces-local';

const useSocket = () => {
	const { back_url } = envVars;
	const [socket, setSocket] = useState<Socket<
		DefaultEventsMap,
		DefaultEventsMap
	> | null>(null);
	const [historial, setHistorial] = useState<MensajeGPT[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [query, setQ] = useState<string>('');
	const queryRef = useRef(query);
	useEffect(() => {
		if (back_url) {
			const newSocket = io(back_url);
			setSocket(newSocket);
			newSocket.on('chat_response', (data) => {
				setHistorial((historialAnterior) => [
					...historialAnterior,
					{ role: 'system', content: data.content },
				]);
				setLoading(false);
				setQ('');
			});

			newSocket.on('chat_error', (error) => {
				console.error({ error });
			});
		}
		return () => {
			if (socket) {
				socket.close();
			}
		};
	}, []);

	// Actualizar el ref cada vez que query cambia
	useEffect(() => {
		queryRef.current = query;
	}, [query]);

	// Retorno de estados y funciones
	return {
		socket,
		loading,
		query,
		setQ,
		setLoading,
		historial,
		setHistorial,
	};
};

export default useSocket;
