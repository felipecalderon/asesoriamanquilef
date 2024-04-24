'use client'
import { Button } from "@nextui-org/react"
import LoadingText from "./LoadingText"
export default function Boton(){
    const sesion = {status: 'loading'}
    switch(sesion.status){
        case 'unauthenticated': return <BotonDeslogueado />
        case 'authenticated': return <BotonLogueado />
        case 'loading': return <LoadingText />
        default: return <BotonDeslogueado />
    }
}

const BotonDeslogueado = () => {
    return <Button 
    className="bg-yellow-500 dark:bg-violet-600 text-white" 
    size="sm" 
    radius="full" 
    href="#" 
    variant="shadow">
            Ingresar
    </Button>
}

const BotonLogueado = () => {
    return <Button 
    className="bg-yellow-500 dark:bg-violet-600 text-white" 
    size="sm" 
    radius="full" 
    href="#" 
    variant="shadow">
            Salir
    </Button>
}