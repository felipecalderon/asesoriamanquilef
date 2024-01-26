'use client'
import ModalButton from "@/components/modal";
import { Divider } from "@nextui-org/react";
import { GiCat } from "react-icons/gi";
import { MdBusinessCenter, MdFamilyRestroom } from "react-icons/md";
const listas = {
  familia: [
    'Asesoría Mediación Familiar',
    'Transacción Judicial',
    'Pensión Alimenticia',
    'Modificación de Pensión Alimenticia',
    'Cese de Pensión Alimenticia',
    'Relación Directa y Regular (visitas)',
    'Modificación de Relación Directa y Regular',
    'Cuidado Personal',
    'Divorcio Unilateral',
    'Divorcio de Común Acuerdo',
    'Divorcio por Culpa',
    'Medidas de Protección',
  ],
  animal: [
    'Querella Infraccional por mordidas de Perros Potencialmente Peligrosos',
    'Querella Infraccional por Criadero Ilegal',
    'Problemas Vecinales',
    'Problemas comunitarios',
  ],
  concursal: [
    'Solicitud de Liquidación Voluntaria de Persona Deudora',
    'Solicitud de Liquidación Voluntaria de Empresa Deudora',
    'Liquidación Forzosa de Empresa Deudora',
    'Solicitud de Renegociación de Persona Deudora',
    'Solicitud de Reorganización de Empresa Deudora', 
  ]
}

const Servicios = () => {
  return (
    <>
            <ModalButton
              buttonText="Derecho de familia"
              Icono={MdFamilyRestroom}
              lista={listas.familia}
            >
              <Divider />
              <h4 className="font-bold">PRÁCTICA PROFESIONAL CORPORACIÓN DE ASISTENCIA JUDICIAL, OFICINA DE FAMILIA, TEMUCO.</h4>
              <p><i>2020: Marzo-Septiembre:</i> Procedimientos judiciales en Tribunales de Familia.</p>
              <Divider />
              <h4 className="font-bold">TRABAJO INDEPENDIENTE COMO PROCURADORA TEMUCO.</h4>
              <p><i>2021 - Actualidad:</i> Causas Administrativas y  Judiciales en Juzgados Civiles del sur de Chile y Tribunales de Familia.</p>
            </ModalButton>
            <ModalButton
              buttonText="Derecho animal"
              Icono={GiCat}
              lista={listas.animal}
            >
              <p>Holaaa 2</p>
            </ModalButton>
            <ModalButton
              buttonText="Derecho concursal"
              Icono={MdBusinessCenter}
              lista={listas.concursal}
            >
              <p>Holaaa 3</p>
            </ModalButton>
    </>
  )
}

export default Servicios