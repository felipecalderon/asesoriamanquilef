'use client'
import { storePosts } from "@/store/postsStore"
import Service from "./service"

export default function Servicios() {
    const { posts } = storePosts()
    const filterPosts = posts.filter((post) => post.category === 'Servicios')
    
    if(filterPosts.length > 0) return (
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            { filterPosts.map((post) => <Service key={post.id} post={post} />)}
        </div>
    )
    return null
}