'use client'
import { Button } from "@nextui-org/react"
import { useSession, signIn, signOut } from "next-auth/react"
import LoadingText from "./LoadingText"
export default function Boton(){
    const sesion = useSession()
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
    onClick={() => signIn()}
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
    onClick={() => signOut()}
    size="sm" 
    radius="full" 
    href="#" 
    variant="shadow">
            Salir
    </Button>
}