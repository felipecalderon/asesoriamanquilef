'use client'
import { editorStore } from "@/store/editorStore"
import { storePosts } from "@/store/postsStore"
import EditorWYSWYG from "@/components/editor/editorRich"
import { envVars } from "@/constants/env-vars"
import { ChangeEvent, useEffect, useState } from "react"
import { IPost } from "@/constants/interfaces-local"
import { Button, Image, Input, Select, SelectItem } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { RiArrowGoBackFill } from "react-icons/ri";

const categories = ['Servicios', 'Noticias']
const { back_url } = envVars

interface ResponseBackPost {
    mesaage: string
    error: string | null
    data: IPost
}

export default function PostPage({ params }: { params: { postId: string } }) {
    const { posts } = storePosts()
    const findPost = posts.find(p => p.id === params.postId)
    const { subtitle, category, content, title, image } = editorStore()
    const { editSubt, editCategory, editContent, editTitle, editImage } = editorStore()
    const [isLoading, setIsLoading] = useState(false)
    const { updatePost, filterPost } = storePosts()
    const [msgError, setError] = useState<null | string>(null)
    const router = useRouter()

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        setIsLoading(true); // Inicia la carga
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const postData = await fetch(`${back_url}/api/media`, {
                method: 'POST',
                body: formData,
            });

            const urlResponse = await postData.json();
            console.log(urlResponse);
            editImage(urlResponse.secure_url)
        } catch (error) {
            console.error('Error al cargar la imagen:', error);
        } finally {
            setIsLoading(false); // Finaliza la carga
        }
    };

    const saveData = async (post: IPost) => {
        try {
            setError(null)
            const fetchUpdatePost = await fetch(`${back_url}/api/post?postId=${post.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            const editedPost: ResponseBackPost = await fetchUpdatePost.json()
            if (editedPost.error) {
                console.log(editedPost);
                setError(editedPost.error)
            } else {
                console.log(editedPost);
                router.push('/posts')
                updatePost(editedPost.data)
            }

        } catch (error) {
            console.error(error)
        }
    }

    const deletePost = async (id: string) => {
        try {
            const deletePostFetch = await fetch(`${back_url}/api/post?postId=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ postId: id })
            })
            await deletePostFetch.json()
            filterPost(id)
            router.push('/posts')
        } catch (error) {
            console.error(error);
        }
    }

    
    useEffect(() => {
        if (findPost) {
            editContent(findPost.content)
            editCategory(findPost.category || 'Servicios')
            editSubt(findPost.subtitle)
            editTitle(findPost.title)
            editImage(findPost.image)
        }
        return () => {
            editContent('')
            editCategory('Servicios')
            editSubt('')
            editTitle('')
            editImage('')
        }
    }, [findPost])

    if (findPost) return (
        <div className="max-w-2xl mx-auto py-3 px-6">
            <div className="flex flex-col gap-1 pb-3">
                <div className="flex flex-row gap-3 items-center">
                    <RiArrowGoBackFill
                        className="text-lg text-primario transition-all hover:text-3xl hover:text-violet-800 cursor-pointer"
                        onClick={() => router.back()}
                    />
                    <p className="text-2xl font-semibold">Editar publicación</p>
                </div>
                {msgError && <p className="text-sm text-red-600 italic">{msgError}</p>}
            </div>
            <div className="flex flex-col gap-3">
                <Input label="Título" value={title} onChange={(e) => editTitle(e.target.value)} />
                <Input label="Subtítulo" value={subtitle} onChange={(e) => editSubt(e.target.value)} />
                <div className="flex flex-row gap-3 items-center">
                    <Input type="file" label="Cargar Portada" onChange={handleFileChange} labelPlacement="outside-left"
                        className="h-fit" />
                    {isLoading && 'Cargando imagen...'}
                    {image !== '' && <Image src={image} width={100} height={100} />}
                </div>
                <Select
                    label="Selecciona categoría"
                    onChange={(e) => editCategory(e.target.value as 'Noticias' | 'Servicios')}
                    defaultSelectedKeys={[findPost.category]}
                >
                    {
                        categories.map(cat => <SelectItem key={cat} value={cat} textValue={cat}> {cat} </SelectItem>)
                    }
                </Select>
                <EditorWYSWYG key={findPost.id} content={findPost.content} />
            </div>
            <div className="flex flex-row justify-between">
                <Button color="danger" variant="solid" onPress={() => deletePost(findPost.id)}>
                    Eliminar (acción irreversible)
                </Button>
                <Button color="primary" variant="solid" onPress={() => saveData(findPost)}>
                    Guardar Edición
                </Button>
            </div>
        </div>
    )
}