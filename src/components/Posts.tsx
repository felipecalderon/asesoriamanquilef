import { listOfPosts } from "@/utils/insertDB"
import Post from "./Post"


export default async function Posts() {
    const posts = await listOfPosts()
    if(posts.length > 0) return (
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            { posts.map(({autor, content, id, title, image}) => <Post key={id} autor={autor} content={content} id={id} title={title} image={image} />)}
        </div>
    )
    return null
}