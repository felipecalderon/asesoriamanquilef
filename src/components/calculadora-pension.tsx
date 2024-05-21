'use client'
import { indicadoresStore } from "@/store/indicadores"
import { Input } from "@nextui-org/react"
import { ChangeEvent, useState } from "react"

export default function CalculadoraPension() {
    const { utm } = indicadoresStore()
    const [total, setTotal] = useState("")
    const calcularMonto = (e: ChangeEvent<HTMLInputElement>) => {
        const valor = Number(e.target.value);
        const total = valor * Number(utm.replace(".", ""));
        const totalFormateado = Math.round(total).toLocaleString('es-ES');
        setTotal(totalFormateado)
    }

    if (utm) return (
        <div className="pt-6">
            <p className="text-2xl font-semibold text-center">Calculadora de Pensiones</p>
            <p className="text-xs text-center">Ingresa la cantidad de UTM y la calculadora te mostrará la cantidad de dinero que deberás pagar.</p>
            <div className="flex flex-row gap-3 px-6 items-center pt-6 pb-2 justify-center">
                <p className="text-xs text-right">Anota la cantidad de UTM</p>
                <Input className="max-w-24" type="number" step={0.1} placeholder="Ingresar" onChange={calcularMonto} color="secondary" />
            </div>
            <div className="flex flex-row gap-3 px-6 items-center pb-6 justify-center">
                <p className="text-xs text-right">Total a pagar:</p>
                <p className="font-bold">${total}</p>
            </div>
        </div>
    )
}