import CalculadoraPension from "@/components/calculadora-pension";
import Servicios from "@/components/PostServices";

export default function ServiciosPage(){
    
    return (
        <div className="px-6">
            <h2 className="text-center text-2xl font-semibold py-6">Servicios Jurídicos</h2>
            <Servicios />
            <CalculadoraPension />
        </div>
    )
}