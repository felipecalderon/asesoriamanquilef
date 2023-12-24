import { create } from 'zustand';

interface CounterStore {
	counter: number;
    setCounter: (counter: number) => void 
}

let counterNumber = 3

if (typeof window !== 'undefined') {
    const counterLocal = window.localStorage.getItem('counter');
    counterNumber = counterLocal ? parseInt(counterLocal) : 3;
}

export const counterStore = create<CounterStore>((set) => {
	return {
		counter: counterNumber,
        setCounter: (newCounter) => {
			window.localStorage.setItem('counter', newCounter.toString());
			set({ counter: newCounter });
		  },
	};
});
