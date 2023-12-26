'use client'
export const getCounterLocal = () => {
    const counterLocal = window.localStorage.getItem('counter');
    return counterLocal ? parseInt(counterLocal) : 3;
};