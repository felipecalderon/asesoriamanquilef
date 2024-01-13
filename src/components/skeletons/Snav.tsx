import { Skeleton } from '@nextui-org/react'
import React from 'react'

const Snav = () => {
    return (
            <div className="flex justify-center items-center h-24 px-4 gap-10">
                {/* Simulación del Logo y Título */}
                <div className="flex items-center">
                    <Skeleton className="w-10 h-10 rounded-lg">
                        <div className="w-10 h-10 bg-default-300 rounded-lg"></div>
                    </Skeleton>
                    <Skeleton className="ml-2 w-32 h-6 rounded-lg">
                        <div className="w-32 h-6 bg-default-300 rounded-lg"></div>
                    </Skeleton>
                </div>

                {/* Simulación de Elementos del Menú */}
                <div className="hidden sm:flex gap-4">
                    {Array(5).fill(0).map((_, index) => (
                        <Skeleton key={index} className="w-20 h-6 rounded-lg">
                            <div className="w-20 h-6 bg-default-300 rounded-lg"></div>
                        </Skeleton>
                    ))}
                </div>

                {/* Simulación del Botón de Contacto */}
                <Skeleton className="w-24 h-8 rounded-full">
                    <div className="w-24 h-8 bg-default-300 rounded-full"></div>
                </Skeleton>
            </div>
    )
}

export default Snav