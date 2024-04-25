'use client'
import { EditPostModal } from "@/components/posts/edit-post-modal";
import SinglePost from "@/components/posts/single-post";
import { IPost } from "@/constants/interfaces-local";
import { storePosts } from "@/store/postsStore";
import { Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function PostsPage() {
    const {getPosts, posts} = storePosts()
    // const { isOpen, onOpenChange } = useDisclosure();
    const [isOpen, onOpenChange] = useState(false)
    const post: IPost = {
        id: '',
        autor: '',
        category: 'Servicios',
        content: 'Detalle del post aquí',
        title: '',
        image: ''
    }
    useEffect(() => {getPosts()}, [])
    if(posts.length > 0) return (
        <div className="flex flex-col pt-3">
            <p className="text-2xl text-primario text-center py-3 font-semibold">Publicaciones</p>
            <Button color="secondary" onClick={() => onOpenChange(!isOpen)} className="w-fit mx-auto">
                Crear publicación
            </Button>
            <EditPostModal isOpen={isOpen} onOpenChange={() => onOpenChange(!isOpen)} post={post} />
            <div className="grid grid-cols-3 justify-items-center mt-6">
                {
                    posts.map(post => <SinglePost key={post.id} post={post} />)
                }
            </div>
        </div>
    )

}