import { envVars } from "@/constants/env-vars"

interface UTM {
    UTMs: {
        Valor: string,
        Fecha: string
    }[]
}

interface UF {
    UFs: {
        Valor: string,
        Fecha: string
    }[]
}

interface Dolares {
    Dolares: {
        Valor: string,
        Fecha: string
    }[]
}

export const getIndicadores = async () => {
    const resUTM = await fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/utm?apikey=${envVars.utm_url}&formato=json`)
    const utm: UTM = await resUTM.json()

    const resUF = await fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=${envVars.utm_url}&formato=json`)
    const uf: UF = await resUF.json()

    const resUSD = await fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=${envVars.utm_url}&formato=json`)
    const usd: Dolares = await resUSD.json()
    
    return {
        mes: utm.UTMs[0].Fecha || '', 
        utm: utm.UTMs[0].Valor || '', 
        uf: uf.UFs[0].Valor || '', 
        usd: usd.Dolares[0].Valor || '',
    }
}