'use client'
import React, { useEffect, useState } from "react"
import { VscLoading } from "react-icons/vsc";
import { counterStore } from "@/store/counterStore";
import { getCounterLocal } from "@/utils/counterLocal";
import { Button } from "@nextui-org/react";
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from "@socket.io/component-emitter";

const FormIA = () => {
    const [respIA, setResIA] = useState<string | null>(null)
    const [urlDoc, setURLdoc] = useState<string | null>(null)
    const [query, setQ] = useState<string>('')
    const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [animatedText, setAnimatedText] = useState("");
    const { counter, setCounter } = counterStore()

    const consultarIA = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!socket) return;

        if (query === '') {
            setResIA('No escribiste nada, ingresa tu requerimiento');
            return;
        }

        if (counter < 1) {
            setResIA('Se agotaron los intentos, consulte directamente...');
            return setQ('');
        }

        setLoading(true);
        setCounter(counter - 1);
        socket.emit('chat_query', { query });
        setQ('');
    };
    const downloadDoc = (url: string) => {
        window.open(url, '_blank');
    }
    useEffect(() => {
        if (respIA) {
            setAnimatedText(""); // Reiniciar el texto
            let index = 0;
            const intervalId = setInterval(() => {
                if (index < respIA.length) {
                    const nextChar = respIA[index] || ""; 
                    setAnimatedText(prev => prev + nextChar);
                    index++;
                } else {
                    clearInterval(intervalId);
                }
            }, 40); 

            return () => clearInterval(intervalId);
        }
    }, [respIA]);

    useEffect(() => setCounter(getCounterLocal()), [])

    useEffect(() => {
	    const url_backend = process.env.NEXT_PUBLIC_URL_BACKEND as string;
        const newSocket = io(url_backend); 
        setSocket(newSocket);

        newSocket.on('chat_response', (data) => {
            if(typeof data === 'string'){
                    setURLdoc(data);
                    setResIA(null)
                    setLoading(false)
                    return setQ('')
                }else{
                    setURLdoc(null);
                    setResIA(data.content);
                    setLoading(false)
                    setQ('')
                }
        });

        newSocket.on('chat_error', (error) => {
            console.log({error});
        });

        // La función de limpieza aquí retorna void, lo cual es correcto
        return () => {
            newSocket.close();
        };
    }, []);
    return (
        <div className="fixed bottom-4 right-4 md:right-10 md:bottom-10 w-80 md:w-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto p-3 max-h-[calc(100vh-400px)]">
            {loading && <div className="inline-flex gap-4 items-center">
                    <VscLoading className='text-4xl animate-spin dark:text-white' />
                    <p className="text-lg text-left font-semibold italic dark:text-white">Cargando...</p>
                </div>}
            { respIA && <div className="p-2 text-gray-700">{animatedText} </div> }
            { urlDoc && <div className="p-2 text-gray-700">Tengo lo que necesitas, puedes usar este documento como guía: <Button onClick={() => downloadDoc(urlDoc)}>Click aquí para descargar</Button> </div>}
            </div>
            <ChatInputForm
                query={query}
                setQuery={setQ}
                handleSubmit={consultarIA}
                />
            {
                counter > 0
                ? <p suppressHydrationWarning className="px-4 py-1 text-xs italic">{`Tienes ${counter} consultas disponibles`}</p>
                : <p suppressHydrationWarning className="px-4 py-1 text-xs italic">Se acabaron los intentos de chat</p>
            
            }
        </div>
    );
    
}

const ChatInputForm = ({ query, setQuery, handleSubmit }: { query: string, setQuery: React.Dispatch<React.SetStateAction<string>>, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
            <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                className="p-3 h-32 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 resize-none"
            />
            <button 
                type="submit" 
                className="p-2 text-white bg-violet-500 hover:bg-violet-600 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
            >
                Enviar
            </button>
        </form>
    );
};


export default FormIA