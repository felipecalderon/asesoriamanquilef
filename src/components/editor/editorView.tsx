'use client'
import { editorStore } from '@/store/editorStore'
import { guardarPost } from '@/utils/insertDB'
import { Button } from '@nextui-org/react'
import React from 'react'

const EditorView = () => {
    const saveContent = async () => {
        const data = {
            autor: 'Bárbara',
            html: editorContent
        }
        const post = await guardarPost(data)
        console.log({post});
    }
    const { editorContent } = editorStore()
    return (
        <div className='p-10'>
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: editorContent }}></div>
            <Button
                onClick={saveContent}
                className="text-xs mt-3 mx-1 h-fit py-1 text-violet-950 dark:text-white bg-fuchsia-300 dark:bg-fuchsia-950 hover:bg-opacity-90 transition-all">
                Guardar
            </Button>
        </div>
    )
}

export default EditorView