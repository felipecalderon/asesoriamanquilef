'use client'
import React, { useEffect, useRef } from 'react';
import { editorStore } from '@/store/editorStore';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // texto en negrita, cursiva, subrayado, tachado
    [{'list': 'ordered'}, {'list': 'bullet'}], // listas ordenadas y desordenadas
    [{'script': 'sub'}, {'script': 'super'}], // subíndices y superíndices
    [{'size': ['small', false, 'large', 'huge']}],  // tamaños de fuente personalizados
    [{ 'align': [] }], // alineación de texto
    ['clean'], // botón para limpiar formato
    ['link', 'image'] // enlaces e imágenes
];

const QuillEditor = () => {
    const quillRef = useRef(null);
    const { editContent } = editorStore()
    const selectLocalImage = async (quill: Quill) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            if(!input.files) return
            const file = input.files[0];
            if (file) {
                try {
                    const formData = new FormData()
                    formData.append('file', file)

                    const postData = await fetch('/api/upload', {
                        method: 'POST',
                        body: formData
                    })

                    const urlResponse = await postData.json()
                    insertImage(quill, urlResponse);
                } catch (error) {
                    console.error('Error al cargar la imagen:', error);
                }
            }
        };
    };

    const insertImage = (quill: Quill, url: string) => {
        const range = quill.getSelection();
        if(!range) return
        quill.insertEmbed(range.index, 'image', url);
    };

    useEffect(() => {
        let quill: Quill;

        if (quillRef.current) {
            quill = new Quill(quillRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: toolbarOptions,
                },
            });

            const toolbar = quill.getModule('toolbar');
            toolbar.addHandler('image', () => {
                selectLocalImage(quill);
            });

            // Manejo de eventos, por ejemplo:
            quill.on('text-change', (delta, oldDelta, source) => {
                editContent(quill.root.innerHTML)
            });
        }

        // Función de limpieza para desmontar correctamente
        return () => {
            if (quill) {
                quillRef.current = null; // Limpieza de la referencia
            }
        };
    }, []); // Revisa si necesitas agregar dependencias aquí

    return (
		<div className='bg-white mx-6'>
			<div ref={quillRef}/>
		</div>
	)
};

export default QuillEditor;