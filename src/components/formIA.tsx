'use client'
import React, { useEffect, useState } from "react"
import { counterStore } from "@/store/counterStore";
import ChatInputForm from "./chatForm";
import { FaRegFilePdf } from "react-icons/fa";
import useSocket from "@/hooks/useSocket";
import LoadingText from "./ui/LoadingText";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const FormIA = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [animatedText, setAnimatedText] = useState("");
    const { socket, urlDoc, loading, query, setQ, setResIA, setLoading, historial, setHistorial } = useSocket();
    const route = useRouter()
    const consultarIA = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!socket) return;

        if (query === '') {
            setResIA('No escribiste nada, ingresa tu requerimiento');
            return;
        }

        setLoading(true);
        socket.emit('chat_query', { query });
    };

    const downloadDoc = (url: string) => {
        window.open(url, '_blank');
    }

    const sendWSP = () => {
        window.open('https://wa.me/56982853280?text=Buen+d%C3%ADa+busco+asesor%C3%ADa+jur%C3%ADdica', '_blank')
    }
    useEffect(() => {
        const ultimoHistorial = historial[historial.length - 1]; // Acceder al último elemento de historial

        if (ultimoHistorial && ultimoHistorial.respuesta) {
            setAnimatedText(""); // Reiniciar el texto
            let index = 0;
            const intervalId = setInterval(() => {
                if (ultimoHistorial.respuesta) {
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

    useEffect(() => {
        const mensajeInicial = 'Hola, soy un asistente legal avanzado de inteligencia artificial, por favor haz consultas claras, completas y directas...'
        if (isOpen && historial.length === 0) {
            setHistorial(historialAnterior => [...historialAnterior, { respuesta: mensajeInicial }])
        }
    }, [isOpen])
    return (
        <>
            <div className="fixed bottom-4 right-4 md:right-10 md:bottom-10 md:w-3/12 flex flex-row justify-end gap-3">
                <Button onPress={sendWSP} className="rounded-lg shadow-md px-6 pt-2 pb-1 text-sm border-green-400 border-2 font-semibold bg-green-700 hover:bg-green-800 text-white hover:scale-105 transition-all">
                    Whatsapp <RiWhatsappFill className='text-2xl text-fuchsia-50 mb-1 animate-wiggle' />
                </Button>
                <Button onPress={onOpen} className="rounded-lg shadow-md px-6 pt-2 pb-1 text-sm border-fuchsia-400 border-2 font-semibold bg-fuchsia-600 hover:bg-fuchsia-500 text-white hover:scale-105 transition-all">
                    Asesoría virtual <BiSolidMessageDetail className='text-2xl text-fuchsia-50 mb-1 animate-wiggle' />
                </Button>
            </div>
            <Modal scrollBehavior='inside' isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} closeButton={<div><FaWindowClose className='text-xl text-red-600 dark:text-white' /></div>}>
                <ModalContent className="bg-white dark:bg-violet-950">
                    {historial.map((item, index) => {
                        return (
                            <div key={index} className="mb-2 px-9 pt-2">
                                {item.consulta && <div className="text-left text-sm text-gray-700 bg-violet-200 mb-1 px-2 py-1 w-fit rounded-e-lg rounded-t-lg dark:bg-violet-800 dark:text-white max-w-xs">
                                    {item.consulta}
                                </div>}
                                {index === historial.length - 1
                                    ? <div className="bg-fuchsia-200 text-gray-700 text-sm text-right mb-1 px-2 py-1 w-fit ml-auto rounded-s-lg rounded-t-lg dark:bg-fuchsia-800 dark:text-white max-w-xs">{animatedText}</div>
                                    : <div className="bg-fuchsia-200 text-gray-700 text-sm text-right mb-1 px-2 py-1 w-fit ml-auto rounded-s-lg rounded-t-lg dark:bg-fuchsia-800 dark:text-white max-w-xs">{item.respuesta}</div>
                                }
                            </div>
                        )
                    })}
                    {urlDoc && <div className="bg-fuchsia-200 text-gray-700 text-sm text-right mb-1 px-2 py-1 w-fit ml-auto rounded-s-lg rounded-t-lg dark:bg-fuchsia-800 dark:text-white max-w-xs">Usa esto como una guía base, NO es para aplicarlo directamente:
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
                    <p suppressHydrationWarning className="text-pretty text-center px-4 py-1 text-xs italic dark:text-white">IMPORTANTE: Este es un asesor virtual potenciado con IA, sólo hacer consultas generales.</p>
                </ModalContent>
            </Modal>
        </>
    );

}



export default FormIA