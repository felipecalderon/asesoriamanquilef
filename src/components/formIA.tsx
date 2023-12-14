'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react"
import { VscLoading } from "react-icons/vsc";
import { fetchData } from "@/utils/fetchs";
import { counterStore } from "@/store/counterStore";
import Titulo from "./titulo";
import { LuSendHorizonal } from "react-icons/lu";

const FormIA = () => {
    const [respIA, setResIA] = useState<string | null>(null)
    const [query, setQ] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [animatedText, setAnimatedText] = useState("");
    const { counter, setCounter } = counterStore()

    const consultarIA = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResIA(null)
        if(query === '') return setResIA('No escribiste nada, ingresa tu requerimiento')
        if (counter < 1) {
            setResIA('Se agotaron los intentos, consulte con la abogada Manquilef directamente')
            return setQ('')
        }
        setCounter(counter - 1)
        window.localStorage.setItem('counter', (counter - 1).toString())
        e.preventDefault()
        try {
            setLoading(true)
            const options: OptionsFetch = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            };
            const data = await fetchData(options)
            setLoading(false)
            setResIA(data.content);
            setQ('')
        } catch (error) {
            setLoading(false)
            console.error('Error al consultar la IA:', error);
            setResIA('Hay un problema de configuración, contacte al administrador.');
        }
    }

    useEffect(() => {
        if (respIA) {
            setAnimatedText(""); // Reiniciar el texto animado
            let index = 0;
            const intervalId = setInterval(() => {
                if (index < respIA.length) {
                    const nextChar = respIA[index] || ""; // Asegúrese de que no sea undefined
                    setAnimatedText(prev => prev + nextChar);
                    index++;
                } else {
                    clearInterval(intervalId);
                }
            }, 40); // Ajuste este valor para controlar la velocidad de la animación

            return () => clearInterval(intervalId);
        }
    }, [respIA]);

    useEffect(() => {
        const counter = window.localStorage.getItem('counter')
        if (counter) setCounter(Number(counter))
        else window.localStorage.setItem('counter', '3')
    }, [])

    return (
        <>
            <div className="w-full px-3 py-6 md:px-10 md:1/3 md:py-16">
                <form className="space-y-8 flex justify-center items-center" onSubmit={consultarIA}>
                    <div className="flex flex-col justify-center items-center md:w-2/3">
                        <div className="text-center py-5 w-fit">
                            <Titulo message="Consulta gratuita" />
                        </div>
                        <label htmlFor="consulta" className="block mb-2 text-center font-bold text-gray-600 dark:text-gray-300">Asistente virtual 24/7<br />
                            <p className="italic font-extralight">(tienes <span className="font-bold">{counter}</span> consultas disponibles)</p>
                        </label>
                        <div className="relative w-full">
                            <textarea
                                onChange={(e) => setQ(e.target.value)}
                                value={query}
                                id="consulta"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Ej: Me pasó lo siguiente... ... ...Podré dejarle testamento a mis mascotas?"
                            />
                            <button 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                type="submit"
                            >
                                <LuSendHorizonal className="text-5xl text-violet-500 hover:text-violet-700" />
                            </button>
                        </div>

                    </div>
                    {loading && <div className="inline-flex gap-4 items-center">
                        <VscLoading className='text-4xl animate-spin dark:text-white' />
                        <p className="text-lg text-left font-semibold italic dark:text-white">Cargando...</p>
                    </div>}
                </form>
            {respIA &&
                <div className="flex flex-col items-center">
                    {respIA !== animatedText && <Image src={'/escribiendo.avif'} alt='escribiendo' width={50} height={50} />}
                    <p className={`px-6 pt-3 pb-9 md:px-20 overflow-hidden text-lg md:text-2xl w-full text-center font-medium italic dark:text-white whitespace-break-spaces`}>
                        {animatedText}
                    </p>
                </div>
            }
            </div>
        </>
    )
}

export default FormIA