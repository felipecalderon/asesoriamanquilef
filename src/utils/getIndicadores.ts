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
    let params = {
        mes: '', 
        utm: '', 
        uf: '', 
        usd: '',
    }
    try {        
        const resUTM = await fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/utm?apikey=${envVars.utm_url}&formato=json`)
        if(!resUTM.ok) throw new Error('No se pudo obtener UTM desde API')
        const UtmJson: UTM = await resUTM.json()
        const mes = UtmJson.UTMs[0].Fecha
        const utm = UtmJson.UTMs[0].Valor
        params.mes = mes
        params.utm = utm
    } catch (error) {
        console.log(error);
    }
    try {
        const resUF = await fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=${envVars.utm_url}&formato=json`)
        if(!resUF.ok) throw new Error('No se pudo obtener UF desde API')
        const UFJson: UF = await resUF.json()
        const uf = UFJson.UFs[0].Valor
        params.uf = uf
    } catch (error) {
        console.log(error);
    }
    try {
        const resUSD = await fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=${envVars.utm_url}&formato=json`)
        if(!resUSD.ok) throw new Error('No se pudo obtener DOLAR desde API')
        const UsdJson: Dolares = await resUSD.json()
        const usd = UsdJson.Dolares[0].Valor
        params.usd = usd
    } catch (error) {
        console.log(error);
    }

    return params
}