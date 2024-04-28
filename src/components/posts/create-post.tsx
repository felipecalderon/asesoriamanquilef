'use client'
import { IPost } from "@/constants/interfaces-local"
import { editorStore } from "@/store/editorStore"
import { Button, Image, Input, Select, Selection, SelectItem } from "@nextui-org/react"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { storePosts } from "@/store/postsStore"
import EditorWYSWYG from "../editor/editorRich"
import { envVars } from "@/constants/env-vars"
import { uploadImage } from "@/utils/uploadImage"

const categories = ['Servicios', 'Noticias']
const { back_url } = envVars

interface ResponseBackPost {
    mesaage: string
    error: string | null
    data: IPost
}


export default function CreateNewPost({ changeSelect }: { changeSelect?: Dispatch<SetStateAction<Selection>> }) {
    const { subtitle, category, content, title, image } = editorStore()
    const { editSubt, editCategory, editTitle, editImage, cleanEditor } = editorStore()
    const [isLoading, setIsLoading] = useState(false)
    const { updatePost } = storePosts()
    const [msgError, setError] = useState<null | string>(null)

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        setIsLoading(true);
        const file = event.target.files[0];
        const imageURL = await uploadImage(file)
        editImage(imageURL)
        setIsLoading(false);
    };

    const createPost = async (post: Partial<IPost>) => {
        try {
            setError(null)
            const fetchUpdatePost = await fetch(`${back_url}/api/post?postId=${post.id}`, {
                method: 'POST',
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
                updatePost(editedPost.data)
                if (changeSelect) {
                    changeSelect(new Set(["2"]))
                }
            }

        } catch (error) {
            console.error(error)
        } finally {
            cleanEditor()
        }
    }

    return (
        <div className="max-w-2xl mx-auto py-3 px-6">
            <div className="flex flex-col gap-1 pb-3">
                <div className="flex flex-row gap-3 items-center">
                    <p className="text-2xl font-semibold">Crear publicación</p>
                </div>
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
                    defaultSelectedKeys={[category]}
                >
                    {
                        categories.map(cat => <SelectItem key={cat} value={cat} textValue={cat}> {cat} </SelectItem>)
                    }
                </Select>
                <EditorWYSWYG content={''} />
            </div>
            <div className="flex flex-col justify-between my-3">
                {msgError && <p className="text-sm text-center text-red-600 italic py-2">{msgError}</p>}
                <Button color="secondary" variant="solid" onPress={() => createPost({ subtitle, category, content, title, image })}>
                    Crear nuevo Post
                </Button>
            </div>
        </div>
    )
}