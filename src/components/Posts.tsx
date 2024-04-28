'use client'
import { storePosts } from "@/store/postsStore"
import SinglePost from "./posts/single-post"

export default function Noticias() {
    const { posts } = storePosts()
    const filterPosts = posts.filter((post) => post.category === 'Noticias')

    if(filterPosts.length > 0) return (
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            { filterPosts.map((post) => <SinglePost post={post} />)}
        </div>
    )
    return null
}