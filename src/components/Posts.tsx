import { listOfPosts } from "@/utils/insertDB"
import Post from "./Post"


export default async function Posts() {
    const posts = await listOfPosts()
    if(posts.length > 0) return (
        <div className="flex flex-row gap-3 justify-center">
            { posts.map(({autor, content, id, title, image}) => <Post key={id} autor={autor} content={content} id={id} title={title} image={image} />)}
        </div>
    )
    return null
}