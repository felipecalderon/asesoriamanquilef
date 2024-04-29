import { useState, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { envVars } from '@/constants/env-vars';
import { Historial } from '@/constants/interfaces-local';

const useSocket = () => {
    const { back_url } = envVars
    const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
    const [historial, setHistorial] = useState<Historial[]>([]);
    const [respIA, setResIA] = useState<string | null>(null);
    const [urlDoc, setURLdoc] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [query, setQ] = useState<string>('');
    const queryRef = useRef(query);
    useEffect(() => {
        if(back_url){
            const newSocket = io(back_url);
            setSocket(newSocket);
            newSocket.on('chat_response', (data) => {
                const ultimaConsulta = queryRef.current
                if (typeof data === 'string') {
                    if(ultimaConsulta !== '') setHistorial(historialAnterior => [...historialAnterior, { consulta: ultimaConsulta }]);
                    setURLdoc(data);
                    setResIA(null);
                    setLoading(false);
                    setQ('');
                } else {
                    if(ultimaConsulta !== '') setHistorial(historialAnterior => [...historialAnterior, { consulta: ultimaConsulta, respuesta: data.content }])
                    else setHistorial(historialAnterior => [...historialAnterior, { respuesta: data.content }])
                    setURLdoc(null);
                    setResIA(data.content);
                    setLoading(false);
                    setQ('');
                }
            });
    
            newSocket.on('chat_error', (error) => {
                console.error({ error });
            });
        }
        return () => {
            if(socket){
                socket.close();
            }            
        };
    }, []);

    // Actualizar el ref cada vez que query cambia
    useEffect(() => {
        queryRef.current = query;
    }, [query, respIA]);

    // Retorno de estados y funciones
    return { socket, respIA, urlDoc, loading, query, setQ, setResIA, setLoading, historial, setHistorial };
};

export default useSocket;
