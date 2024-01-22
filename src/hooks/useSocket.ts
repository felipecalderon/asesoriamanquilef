import { useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from "@socket.io/component-emitter";

interface Historial {
    consulta: string
    respuesta: string
}

const useSocket = () => {
    const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
    const [historial, setHistorial] = useState<Historial[]>([]);
    const [ultimaConsulta, setUltimaConsulta] = useState("");
    const [respIA, setResIA] = useState<string | null>(null);
    const [urlDoc, setURLdoc] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [query, setQ] = useState<string>('');

    useEffect(() => {
        const url_backend = process.env.NEXT_PUBLIC_URL_BACKEND as string;
        const newSocket = io(url_backend);
        setSocket(newSocket);
        newSocket.on('chat_response', (data) => {
            if (typeof data === 'string') {
                console.log({data});
                setHistorial(historialAnterior => [...historialAnterior, { consulta: ultimaConsulta, respuesta: data }]);
                setURLdoc(data);
                setResIA(null);
                setLoading(false);
                setQ('');
            } else {
                setHistorial(historialAnterior => [...historialAnterior, { consulta: ultimaConsulta, respuesta: data.content }]);
                setURLdoc(null);
                setResIA(data.content);
                setLoading(false);
                setQ('');
            }
        });

        newSocket.on('chat_error', (error) => {
            console.error({ error });
        });

        return () => {
            newSocket.close();
        };
    }, []);

    // Retorno de estados y funciones
    return { socket, respIA, urlDoc, loading, query, setQ, setResIA, setLoading, historial, setUltimaConsulta };
};

export default useSocket;
