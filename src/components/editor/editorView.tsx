'use client'
import { editorStore } from '@/store/editorStore'
import { guardarPost } from '@/utils/insertDB'
import { Button } from '@nextui-org/react'
import React from 'react'

const EditorView = () => {
    const { content, title } = editorStore()
    const saveContent = async () => {
        try {
            const data = {
                autor: 'Bárbara',
                title,
                content
            }
            const post = await guardarPost(data)
            console.log({ post });
        } catch (error) {
            console.log({ error });
        }
    }

    return (
        <div className='p-10'>
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }}></div>
            <Button
                onClick={saveContent}
                className="text-xs mt-3 mx-1 h-fit py-1 text-violet-950 dark:text-white bg-fuchsia-300 dark:bg-fuchsia-950 hover:bg-opacity-90 transition-all">
                Guardar
            </Button>
        </div>
    )
}

export default EditorView