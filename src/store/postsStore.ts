import { IPost } from '@/constants/interfaces-local';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ListOfPost {
	posts: IPost[];
    getPosts: () => void 
    updatePost: (post: IPost) => void 
    filterPost: (postId: string) => void
}

export const storePosts = create(persist<ListOfPost>((set, get) => ({
    posts: [],
    getPosts: async () => {
        const fetchPosts = await fetch(`/api/posts`, {cache: 'no-store'})
        const parsePosts: IPost[] = await fetchPosts.json()
        console.log({parsePosts});
        set({posts: parsePosts})
    },
    updatePost: async (newPost) => {
        const { posts } = get()
        let postFinded = 0
        const newPosts = posts.map(oldPost => {
            if(oldPost.id === newPost.id){
                postFinded++
                return { ...newPost }
            }
            return {...oldPost}
        })
        if(postFinded === 0){
            set({posts: [...newPosts, newPost]})
        } else {
            set({posts: newPosts})
        }
    },
    filterPost: (id) => {
        const { posts } = get()
        const filteredPosts = posts.filter(post => post.id !== id)
        set({posts: filteredPosts})
    }

}),
{
    name: 'listOfPosts'
}
))

