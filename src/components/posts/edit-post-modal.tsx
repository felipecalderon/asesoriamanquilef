'use client'
import { IPost } from "@/constants/interfaces-local"
import { editorStore } from "@/store/editorStore"
import { Button, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react"
import { ChangeEvent, useEffect, useState } from "react"
import QuillEditor from "../editor/editorRich"
import { storePosts } from "@/store/postsStore"

const categories = ['Servicios', 'Noticias']

export const EditPostModal = ({ isOpen, onOpenChange, post }: { isOpen: boolean, onOpenChange: () => void, post: IPost }) => {
    const { autor, category, content, title, image } = editorStore()
    const { editAutor, editCategory, editContent, editTitle, editImage } = editorStore()
    const [isLoading, setIsLoading] = useState(false)
    const { updatePost, filterPost } = storePosts()
    const [msgError, setError] = useState<null | string>(null)
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

    useEffect(() => {
        if (isOpen) {
            editContent(post.content)
            editCategory(post.category || 'Servicios')
            editAutor(post.autor)
            editTitle(post.title)
            editImage(post.image)
        } else {
            editContent('')
            editCategory('Servicios')
            editAutor('')
            editTitle('')
            editImage('')
        }
    }, [isOpen])

    const saveData = async () => {
        try {
            setError(null)
            let endpoint = ''
            if (post.id) {
                endpoint = `?postId=${post.id}`
            }

            console.log({ autor, category, content, title, image });
            const fetchSave = await fetch(`/api/posts${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    autor, category, content, title, image
                })
            })
            const newPost = await fetchSave.json()
            console.log(newPost);
            if(newPost.error){
                setError(newPost.error)
            }else{
                updatePost(newPost)
                onOpenChange()
            }
        } catch (error) {
            console.error(error)
        }
    }

    const deletePost = async () => {
        try {
            const deletePostFetch = await fetch(`/api/posts`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({postId: post.id})
            })
            const deletePostJson = await deletePostFetch.json()
            console.log({deletePostJson});
            filterPost(post.id)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior="outside"
            size="2xl"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Editar publicación
                            {msgError && <p className="text-sm text-red-600 italic">{msgError}</p>}
                        </ModalHeader>
                        <ModalBody>
                            <Input label="Título" value={title} onChange={(e) => editTitle(e.target.value)} />
                            <Input label="Subtítulo" value={autor} onChange={(e) => editAutor(e.target.value)} />
                            <div className="flex flex-row gap-3 items-center">
                                <Input type="file" label="Cargar Portada" onChange={handleFileChange} labelPlacement="outside-left"
                                    className="h-fit" />
                                {/* {isLoading && 'Cargando imagen...'} */}
                                {image !== '' && <Image src={image} width={100} height={100} />}
                            </div>
                            <Select
                                label="Selecciona categoría"
                                onChange={(e) => editCategory(e.target.value as 'Noticias' | 'Servicios')}
                                defaultSelectedKeys={[post.category]}
                            >
                                {
                                    categories.map(cat => <SelectItem key={cat} value={cat} textValue={cat}> {cat} </SelectItem>)
                                }
                            </Select>
                            {content && <QuillEditor key={post.id} content={content} />}
                        </ModalBody>
                        <ModalFooter className="flex flex-row justify-between">
                            <Button color="danger" variant="solid" onPress={deletePost}>
                                Eliminar (acción irreversible)
                            </Button>
                            <div className="flex flex-row gap-3">
                                <Button color="warning" variant="solid" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button color="primary" variant="solid" onPress={saveData}>
                                    Guardar Edición
                                </Button>
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}