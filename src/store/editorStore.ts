import { create } from "zustand";

interface EditorInterface {
    editorContent: string,
    setEditor: (editorContent: string) => void
}
export const editorStore = create<EditorInterface>((set) => {
    return {
        editorContent: '',
        setEditor: (editorContent: string) => set({editorContent})
    }
})

