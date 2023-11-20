'use client'

import { useState } from "react"

const FormIA = () => {
    const [respIA, setResIA] = useState<string | null>(null)
    const [q, setQ] = useState<string>('')

    const consultarIA = async () => {
        return await ''
    }
    return (
        <form action="#" className="space-y-8 py-6">
            <div>
                <label htmlFor="email" className="block mb-2 text-center text-sm font-medium text-gray-900 dark:text-gray-300">Ingresa algo</label>
                <input 
                    onChange={(e) => setQ(e.target.value)}
                    value={q}
                    type="email" 
                    id="email" 
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ingresa tu consulta" required />
            </div>
            {respIA && <p className="text-xl font-semibold italic">{respIA}</p>}
        </form>
    )
}

export default FormIA