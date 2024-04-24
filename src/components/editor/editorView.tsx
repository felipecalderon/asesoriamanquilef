'use client'
import { editorStore } from '@/store/editorStore'
import React from 'react'
import CreatePostModal from '@/components/CreatePostModal'
const EditorView = () => {
    const { content, title, image, category } = editorStore()
    return (
        <div className='p-10'>
            <CreatePostModal title={title} content={content} image={image} category={category}/>
        </div>
    )
}

export default EditorView