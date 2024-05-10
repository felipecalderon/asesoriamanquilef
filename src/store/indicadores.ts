import { create } from "zustand";

interface IndicadoresStore {
    mes: string
    utm: string
    uf: string
    usd: string
    setIndicadores: (indicador: Partial<IndicadoresStore>) => void
}

export const indicadoresStore = create<IndicadoresStore>((set) => ({
    mes: '',
    utm: '',
    uf: '',
    usd: '',
    setIndicadores: (valor) => set(valor),
}))