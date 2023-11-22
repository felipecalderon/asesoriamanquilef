'use client'

import React, { useState } from "react"
import { VscLoading } from "react-icons/vsc";

const FormIA = () => {
    const [respIA, setResIA] = useState<string | null>(null)
    const [query, setQ] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const consultarIA = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await fetch(`https://asesoriamanquilef-back-production.up.railway.app/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({query})
            });
            const data = await response.json();
            setLoading(false)
            setResIA(data.content); 
            setQ('')
        } catch (error) {
            setLoading(false)
            console.error('Error al consultar la IA:', error);
            setResIA('Error al recibir respuesta de la IA.');
        }
    }
    return (
        <form className="space-y-8 py-6" onSubmit={consultarIA}>
            <div>
                <label htmlFor="consulta" className="block mb-2 text-center text-sm font-medium text-gray-900 dark:text-gray-300">Ingresa algo</label>
                <input 
                    onChange={(e) => setQ(e.target.value)}
                    value={query}
                    type="text" 
                    id="consulta" 
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ingresa tu consulta" required />
            </div>
            {respIA && <p className="text-xl text-center font-semibold italic">{respIA}</p>}
            {loading && <div className="inline-flex gap-4 items-center">
                <VscLoading className='text-4xl animate-spin' />
                <p className="text-lg text-left font-semibold italic">Cargando...</p>
            </div>}

        </form>
    )
}

export default FormIA