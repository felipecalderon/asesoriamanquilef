'use client'
import { editorStore } from '@/store/editorStore'
import React from 'react'

const EditorView = () => {
    const { editorContent } = editorStore()
    return (
        <div className='p-10'>
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: editorContent }}></div>
        </div>
    )
}

export default EditorView