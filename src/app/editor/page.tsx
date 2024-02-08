import React from 'react'
import dynamic from 'next/dynamic'
const QuillEditor = dynamic(() => import('@/components/editor/editorRich'), {ssr: false})
import EditorView from '@/components/editor/editorView'
const EdicionPage = () => {
  return (
    <>
    <h2 className='text-center text-2xl py-3'>
      Creación de publicaciones
    </h2>
    <QuillEditor key={'editor'} />
    <EditorView />
    </>
  )
}

export default EdicionPage