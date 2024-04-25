import { create } from "zustand";

interface EditorInterface {
    autor: string,
    title: string,
    content: string,
    category: 'Noticias' | 'Servicios',
    image: string,
    editImage: (image: string) => void
    editAutor: (autor: string) => void
    editTitle: (title: string) => void
    editContent: (content: string) => void
    editCategory: (category: 'Noticias' | 'Servicios') => void
}

export const editorStore = create<EditorInterface>((set) => {
    return {
        autor: '',
        title: '',
        content: '',
        category: 'Servicios',
        image: '',
        editImage: (image) => set({image}),
        editAutor: (autor) => set({autor}),
        editTitle: (title) => set({title}),
        editContent: (content) => set({content}),
        editCategory: (category) => set({category})
    }
})

