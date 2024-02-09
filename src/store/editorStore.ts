import { create } from "zustand";

interface EditorInterface {
    autor: string,
    title: string,
    content: string,
    editAutor: (autor: string) => void
    editTitle: (title: string) => void
    editContent: (content: string) => void
}
export const editorStore = create<EditorInterface>((set) => {
    return {
        autor: '',
        title: '',
        content: '',
        editAutor: (autor: string) => set({autor}),
        editTitle: (title: string) => set({title}),
        editContent: (content: string) => set({content}),
    }
})

