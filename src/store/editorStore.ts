import { create } from 'zustand';

interface EditorInterface {
	subtitle: string;
	title: string;
	content: string;
	category: 'Noticias' | 'Servicios';
	image: string;
	editImage: (image: string) => void;
	editSubt: (subtitle: string) => void;
	editTitle: (title: string) => void;
	editContent: (content: string) => void;
	editCategory: (category: 'Noticias' | 'Servicios') => void;
	cleanEditor: () => void;
}

export const editorStore = create<EditorInterface>((set) => {
	return {
		subtitle: '',
		title: '',
		content: '',
		category: 'Servicios',
		image: '',
		editImage: (image) => set({ image }),
		editSubt: (subtitle) => set({ subtitle }),
		editTitle: (title) => set({ title }),
		editContent: (content) => set({ content }),
		editCategory: (category) => set({ category }),
		cleanEditor: () =>
			set({
				subtitle: '',
				title: '',
				content: '',
				category: 'Servicios',
				image: '',
			}),
	};
});
