import { Image } from "@nextui-org/react";
import ServiciosIconos from "@/components/servicios";
import LineaDeTiempo from "@/components/timeline";
import { cursosOtros } from "@/constants/cursosOtros";

export default function CartaPresentacion(){
    return (
        <div className="flex flex-col-reverse px-6 items-center md:items-start text-center sm:text-left md:flex-row gap-12 md:px-20 py-10 justify-center">
          <Image className="shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl hover:-translate-y-4 transition-all" src={'/barbara-foto-vertical.jpg'} alt="Foto vertical" width={400} height={900} />
          <div className="max-w-xl">
            <h1 className="dark:text-white text-2xl font-semibold">¡Hola! Soy Barbara, estoy para ayudarte..</h1>
            <h3><i>Con más de 5 años de experiencias en diversos casos</i></h3>
            <ServiciosIconos />
            <LineaDeTiempo info={cursosOtros} title="Mi desarrollo profesional" />
          </div>
        </div>
    )
}