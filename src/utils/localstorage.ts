'use client'
export const getItemBoolean = (name: string): boolean => {
    if(typeof Window === 'undefined') return false
    const item = localStorage.getItem(name);
    if(item){
        const bol: boolean = JSON.parse(item) 
        return bol
    }
    return false
}

export const setItemBoolean = (name: string, dark: boolean): void => {
    if(typeof window === 'undefined'){
        return console.log('void');
    }
    
    localStorage.setItem(name, JSON.stringify(dark))
}