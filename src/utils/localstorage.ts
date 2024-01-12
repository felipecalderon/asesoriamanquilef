'use client'
export const getItemBoolean = (name: string): boolean => {
    const item = localStorage.getItem(name);
    if(item){
        const bol: boolean = JSON.parse(item) 
        return bol
    }
    return false
}

export const setItemBoolean = (name: string, dark: boolean): void => {
    localStorage.setItem(name, JSON.stringify(dark))
}