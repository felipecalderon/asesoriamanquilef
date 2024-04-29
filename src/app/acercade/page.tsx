import CartaPresentacion from "@/components/carta-presentacion";
import { Button } from "@nextui-org/react";

export default function AcercaDeMiPage(){
    return (
        <>
            <CartaPresentacion />
            <div className="">
                <Button>Enviar Whatsapp</Button>
            </div>
        </>
    )
}