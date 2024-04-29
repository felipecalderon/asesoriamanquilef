'use client'
import { storePosts } from "@/store/postsStore"
import Service from "./service"

export default function Servicios() {
    const { posts } = storePosts()
    const filterPosts = posts.filter((post) => post.category === 'Servicios')
    
    if(filterPosts.length > 0) return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            { filterPosts.map((post) => <Service key={post.id} post={post} />)}
        </div>
    )
    return null
}