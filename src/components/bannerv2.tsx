'use client'
import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

export default function BannerOpcional() {
    return (
        <Card
            isFooterBlurred={false}
            fullWidth={true}
            radius="none"
            className="md:max-h-[600px] border-none"
        >
            <Image
                alt="Servicios jurídicos banner Manquilef"
                className="object-cover rounded-none"
                src="/fondo-edit-asm.jpg"
            />
            <CardFooter className="py-0 px-2 w-full absolute bottom-0 md:bottom-auto md:top-10 flex items-center justify-center z-10">
                <div className="flex flex-col">
                    <p className='text-2xl text-white md:text-5xl py-4 px-6 bg-primario/80 dark:text-white dark:bg-violet-950 dark:bg-opacity-20 rounded-t-2xl'>
                        Servicios Jurídicos
                    </p>
                    <p className='text-xl text-center text-primario bg-white px-6 py-2 md:rounded-b-2xl drop-shadow-md dark:text-violet-50'>Asesoría Manquilef</p>
                </div>
            </CardFooter>
        </Card>
    );
}
