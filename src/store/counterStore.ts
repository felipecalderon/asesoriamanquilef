import { create } from 'zustand';

interface CounterStore {
	counter: number;
    setCounter: (counter: number) => void 
}

export const counterStore = create<CounterStore>((set) => {
	return {
		counter: 0,
        setCounter: (newCounter) => {
			window.localStorage.setItem('counter', newCounter.toString());
			set({ counter: newCounter });
		  },
	};
});
