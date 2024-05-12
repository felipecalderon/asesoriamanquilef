'use client'
import { indicadoresStore } from "@/store/indicadores"
import { fechaCorta } from "@/utils/fechaFormatos"

export default function IndicadoresEc() {
    const { mes, uf, usd, utm } = indicadoresStore()
    return (
        <div>
            <div className="flex flex-row justify-center gap-3">
                {utm && <div className="flex flex-row w-full shadow-sm gap-1 mx-auto px-2 py-1 justify-center items-center bg-gray-50 rounded-lg pointer-events-none text-center">
                    <p className="text-gray-900 text-xs font-semibold">
                        UTM:
                    </p>
                    <p className="font-bold text-primario">${utm}</p>
                </div>}
                {uf && <div className="flex flex-row w-full shadow-sm gap-1 mx-auto px-2 py-1 justify-center items-center bg-gray-50 rounded-lg pointer-events-none text-center">
                    <p className="text-gray-900 text-xs font-semibold">
                        UF:
                    </p>
                    <p className="font-bold text-primario">${uf}</p>
                </div>}
                {usd && <div className="flex flex-row w-full shadow-sm gap-1 mx-auto px-2 py-1 justify-center items-center bg-gray-50 rounded-lg pointer-events-none text-center">
                    <p className="text-gray-900 text-xs font-semibold">
                        USD:
                    </p>
                    <p className="font-bold text-primario">${usd}</p>
                </div>}
            </div>
            {mes && <p className="text-sm italic text-center mt-1">Valores correspondientes al mes de {fechaCorta(mes)}</p>}
        </div>
    )
}