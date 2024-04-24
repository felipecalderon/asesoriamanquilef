'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { editorStore } from '@/store/editorStore'
import Image from 'next/image';
import LoadingText from './LoadingText';

const TitleInput = () => {
  const categories = ['Servicios', 'Noticias']
  const { title, image, editTitle, editImage, editCategory } = editorStore();
  const [isLoading, setIsLoading] = useState(false); 

  const handleButtonChange = (e: ChangeEvent<HTMLInputElement>) => {
    editTitle(e.target.value);
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setIsLoading(true); // Inicia la carga
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const postData = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const urlResponse = await postData.json();
      editImage(urlResponse)
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    } finally {
      setIsLoading(false); // Finaliza la carga
    }
  };
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    editCategory(e.target.value)
  }

  useEffect(() => {
    editCategory(categories[0])
  }, [])
  return (
    <div className='px-6 pb-3'>
      <div className='flex flex-row gap-3 justify-center items-center'>
        <Input
          type="text"
          color="default"
          label="Título"
          placeholder="Ingresa el título de la publicación"
          onChange={handleButtonChange}
          value={title}
          className="max-w-[400px] mx-auto my-3"
          />

        <Select
          className="max-w-[400px] mx-auto"
          label="Selecciona categoría"
          onChange={handleSelectChange}
          variant='faded'
          defaultSelectedKeys={[categories[0]]}
        >
            {
              categories.map(cat => <SelectItem key={cat} value={cat} textValue={cat}> {cat} </SelectItem>)
            }
        </Select>
        <div className="container mx-auto p-5">
          <input
            id="image-upload"
            type="file"
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <Button
            className='bg-violet-300'
            disabled={isLoading}
            onClick={() => document.getElementById('image-upload')!.click()}
          >
            {isLoading ? 'Cargando...' : 'Cargar imagen de portada'}
          </Button>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <LoadingText />
          </div>
        ) : image !== '' && <Image src={image} alt='Imagen de carga' width={200} height={100}/> }
      </div>
    </div>
  );
};

export default TitleInput