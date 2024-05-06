import { envVars } from "@/constants/env-vars"
import { fechaCorta } from "@/utils/fechaFormatos"
import { useEffect, useState } from "react"

interface UTM {
    UTMs: {
        Valor: string,
        Fecha: string
    }[]
}
export default function UTM() {
    const [utm, setUtm] = useState<UTM | null>(null)
    useEffect(() => {
        fetch(envVars.utm_url)
            .then(res => res.json())
            .then((res: UTM) => setUtm(res))

    }, [])
    if (utm) return (
        <div className="max-w-sm mx-auto px-4 py-1 shadow-md bg-gray-50 rounded-lg pointer-events-none text-center">
            <h1 className="text-gray-900 text-xs font-semibold">
                UTM de {fechaCorta(utm.UTMs[0].Fecha)}
            </h1>
            <p className="text-lg font-bold text-primario">${utm.UTMs[0].Valor}</p>
        </div>
    )
}
