'use client'
import React, { useEffect, useState } from "react"
import { counterStore } from "@/store/counterStore";
import { getCounterLocal } from "@/utils/counterLocal";
import { Button } from "@nextui-org/react";
import ChatInputForm from "./chatForm";
import { FaRegFilePdf } from "react-icons/fa";
import useSocket from "@/hooks/useSocket";
import {Spinner} from "@nextui-org/react";

const FormIA = () => {
    const [animatedText, setAnimatedText] = useState("");
    const { counter, setCounter } = counterStore()
    const { socket, respIA, urlDoc, loading, query, setQ, setResIA, setLoading, historial, setUltimaConsulta } = useSocket();

    const consultarIA = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!socket) return;

        if (query === '') {
            setResIA('No escribiste nada, ingresa tu requerimiento');
            return;
        }
        setUltimaConsulta(query)
        if (counter < 1) {
            return setResIA('Se agotaron los intentos, consulte directamente a la abogada Bárbara Manquilef: +569 84290489');
        }

        setLoading(true);
        setCounter(counter - 1);
        socket.emit('chat_query', { query });
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
    useEffect(() => console.log(historial), [historial])
    useEffect(() => setCounter(getCounterLocal()), [])


    return (
        <div className="fixed bottom-4 right-4 md:right-10 md:bottom-10 w-80 md:w-96 bg-white dark:bg-violet-950 rounded-lg shadow-lg flex flex-col overflow-hidden">
            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto p-3 max-h-[calc(100vh-400px)]">
            { respIA && <div className="p-2 text-gray-700">{animatedText} </div> }
            { urlDoc && <div className="p-2 text-gray-700">Tengo lo que necesitas, puedes usar este documento como guía: 
                <Button className="text-xs mt-3 mx-1 text-violet-950" onClick={() => downloadDoc('urlDoc')}>Ver documento <FaRegFilePdf className="text-lg text-violet-900" /> </Button> 
                </div>
            }
            {loading && <div className="inline-flex gap-4 items-center">
                    <Spinner color="secondary"/>
                    <p className="text-lg text-left font-semibold italic dark:text-white">Cargando...</p>
                </div>}
            </div>
            <ChatInputForm
                query={query}
                setQuery={setQ}
                handleSubmit={consultarIA}
                />
            {
                counter > 0
                ? <p suppressHydrationWarning className="px-4 py-1 text-xs italic dark:text-white">{`Tienes ${counter} consultas disponibles`}</p>
                : <p suppressHydrationWarning className="px-4 py-1 text-xs italic dark:text-white">Se acabaron los intentos de chat</p>
            
            }
        </div>
    );
    
}



export default FormIA