import { listOfPosts } from '@/utils/insertDB';
import { NextRequest, NextResponse } from 'next/server';
import { collection, doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/services/firebaseInit';
import { Post } from '@/constants/interfaces-local';

export const GET = async (req: NextRequest) => {
	const url = req.nextUrl;
	const postId = url.searchParams.get('postId');
	if (postId) {
		const docRef = doc(db, 'posts', postId);
		const findDoc = await getDoc(docRef);
		const parsePost = findDoc.data();
		if (!parsePost) {
			return NextResponse.json(null);
		}
		const finalPost: Post = {
			id: postId,
			autor: parsePost.autor,
			category: parsePost.category,
			content: parsePost.content,
			image: parsePost.image,
			title: parsePost.title,
		};
		return NextResponse.json(finalPost);
	} else {
		const posts = await listOfPosts();
		return NextResponse.json(posts);
	}
};

export const POST = async (req: NextRequest) => {
	try {
		const url = req.nextUrl;
		const postId = url.searchParams.get('postId');
		const body = await req.json();

		if (!postId) {
            const {autor, category, content, image, title} = body
            if(!autor || !category || !content || !image || !title){
				return NextResponse.json({error: 'Se deben ingresar todas las propiedades del post'});
            }
            const newDocRef = doc(collection(db, 'posts'));
            const newPost: Post = {
				id: newDocRef.id,
				autor, category, content, image, title,
			};
			await setDoc(newDocRef, newPost);
			return NextResponse.json(newPost);
		}

		const docRef = doc(db, 'posts', postId);
		const findDoc = await getDoc(docRef);
		const parsePost = findDoc.data();
		if (!parsePost) {
			return NextResponse.json(null);
		}
		const finalPost: Partial<Post> = {
			id: postId,
			autor: body.autor || parsePost.autor,
			category: body.category || parsePost.category,
			content: body.content || parsePost.content,
			image: body.image || parsePost.image,
			title: body.title || parsePost.title,
		};
		await updateDoc(docRef, finalPost);
		return NextResponse.json(finalPost);
	} catch (error) {
		if (error instanceof TypeError) {
			console.log(error.message);
			return NextResponse.json(null);
		}
		console.log(error);
		return NextResponse.json(error);
	}
};

export const DELETE = async (req: NextRequest) => {
	try {
		const body = await req.json()
		if(!body.postId) return NextResponse.json({error: 'Falta parámetro postId'})
		await deleteDoc(doc(db, "posts", body.postId));
		return NextResponse.json(`Documento id: ${body.postId} eliminado exitosamente`)
	} catch (error) {
		return NextResponse.json(error)
	}
}