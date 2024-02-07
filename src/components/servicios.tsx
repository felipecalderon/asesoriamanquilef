'use client'
import ModalButton from "@/components/ui/modal";
import { GiCat } from "react-icons/gi";
import { MdBusinessCenter, MdFamilyRestroom } from "react-icons/md";
import { FaRegistered } from "react-icons/fa6";
import { listas } from "@/constants/listaServicios";
import { IoStorefront } from "react-icons/io5";
import { PiButterflyFill } from "react-icons/pi";

const Servicios = () => {
  const servicios = [
    { buttonText: "Derecho de Familia", Icono: MdFamilyRestroom, lista: listas.familia },
    { buttonText: "Derecho Animal", Icono: GiCat, lista: listas.animal },
    { buttonText: "Derecho Concursal", Icono: MdBusinessCenter, lista: listas.concursal },
    { buttonText: "Derecho Laboral", Icono: IoStorefront, lista: listas.laboral },
    { buttonText: "Propiedad Intelectual", Icono: FaRegistered, lista: listas.marcas },
    { buttonText: "Protección Ambiental", Icono: PiButterflyFill, lista: listas.ambiental },
  ];
  return (
    <>
      {servicios.map((servicio, index) => (
        <ModalButton
          key={index}
          buttonText={servicio.buttonText}
          Icono={servicio.Icono}
          lista={servicio.lista}
        />
      ))}
    </>
  )
}

export default Servicios