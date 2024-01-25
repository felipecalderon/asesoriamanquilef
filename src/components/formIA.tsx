'use client'
import React, { useEffect, useState } from "react"
import { counterStore } from "@/store/counterStore";
import { getCounterLocal } from "@/utils/counterLocal";
import ChatInputForm from "./chatForm";
import { FaRegFilePdf } from "react-icons/fa";
import useSocket from "@/hooks/useSocket";
import LoadingText from "./ui/LoadingText";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const FormIA = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [animatedText, setAnimatedText] = useState("");
    const { counter, setCounter } = counterStore()
    const { socket, urlDoc, loading, query, setQ, setResIA, setLoading, historial } = useSocket();

    const consultarIA = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!socket) return;

        if (query === '') {
            setResIA('No escribiste nada, ingresa tu requerimiento');
            return;
        }

        if (counter < 1) {
            return setResIA('Se agotaron los intentos, consulte directamente a la abogada Bárbara Manquilef: +569 84290489');
        }

        setLoading(true);
        // setCounter(counter - 1);
        socket.emit('chat_query', { query });
    };
    
    const downloadDoc = (url: string) => {
        window.open(url, '_blank');
    }

    useEffect(() => {
        const ultimoHistorial = historial[historial.length - 1]; // Acceder al último elemento de historial
    
        if (ultimoHistorial && ultimoHistorial.respuesta) {
            setAnimatedText(""); // Reiniciar el texto
            let index = 0;
            const intervalId = setInterval(() => {
                if(ultimoHistorial.respuesta){
                    if (index < ultimoHistorial.respuesta.length) {
                        const nextChar = ultimoHistorial.respuesta[index] || ""; 
                        setAnimatedText(prev => prev + nextChar);
                        index++;
                    } else {
                        clearInterval(intervalId);
                    }
                }
            }, 40); 
    
            return () => clearInterval(intervalId);
        }
    }, [historial]);

    useEffect(() => setCounter(getCounterLocal()), [])


    return (
        <>
        <div className="fixed bottom-4 right-4 md:right-10 md:bottom-10 w-80 md:w-2/12 bg-white dark:bg-violet-950 rounded-lg shadow-lg flex flex-col overflow-hidden">
        <Button onPress={onOpen}>Hablemos</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent className="bg-white dark:bg-violet-950 ">
                {historial.map((item, index) => (
                    <div key={index} className="mb-2">
                    { <div className="text-left text-sm text-gray-700 bg-violet-200 mb-1 px-2 py-1 w-fit rounded-e-lg rounded-t-lg dark:bg-violet-800 dark:text-white max-w-xs">{item.consulta}</div>}
                    { index === historial.length - 1
                      ? <div className="bg-fuchsia-200 text-gray-700 text-sm text-right mb-1 px-2 py-1 w-fit ml-auto rounded-s-lg rounded-t-lg dark:bg-fuchsia-800 dark:text-white max-w-xs">{animatedText}</div>
                      : <div className="bg-fuchsia-200 text-gray-700 text-sm text-right mb-1 px-2 py-1 w-fit ml-auto rounded-s-lg rounded-t-lg dark:bg-fuchsia-800 dark:text-white max-w-xs">{item.respuesta}</div>
                    }
                </div>
                ))}
                { urlDoc && <div className="bg-fuchsia-200 text-gray-700 text-sm text-right mb-1 px-2 py-1 w-fit ml-auto rounded-s-lg rounded-t-lg dark:bg-fuchsia-800 dark:text-white max-w-xs">Usa esto como una guía base, NO es para aplicarlo directamente: 
                <Button className="text-xs mt-3 mx-1 h-fit py-1 text-violet-950 dark:text-white bg-fuchsia-300 dark:bg-fuchsia-950 hover:bg-opacity-90 transition-all" onClick={() => downloadDoc(urlDoc)}>
                    Ver documento <FaRegFilePdf className="text-lg text-violet-900 dark:text-white" />
                </Button> 
                </div>
                }
                {loading && <LoadingText />}
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
            </ModalContent>
            </Modal>
        </div>
        </>
    );
    
}



export default FormIA