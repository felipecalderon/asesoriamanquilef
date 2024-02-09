'use client'
import React, { ChangeEvent } from 'react'
import {Input} from "@nextui-org/react";
import { editorStore } from '@/store/editorStore'

const TitleInput = () => {
    const { title, editTitle } = editorStore()
    const handleButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
      editTitle(e.target.value)
    }
  return (
    <Input
          type="text"
          color="default"
          label="Título"
          placeholder="Ingresa el título de la publicación"
          onChange={handleButtonChange}
          value={title}
          className="max-w-[400px] mx-auto my-3"
        />
  )
}

export default TitleInput