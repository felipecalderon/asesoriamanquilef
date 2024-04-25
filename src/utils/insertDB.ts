import { collection, doc, setDoc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '@/services/firebaseInit';
import { IPost } from '@/constants/interfaces-local';

export const editPost = async (id: string) => {
	try {
		console.log({ id });
		const docRef = doc(db, 'posts', id);
		const findDoc = await getDoc(docRef);
		return findDoc;
	} catch (error) {
		if (error instanceof TypeError) {
			return { error: error.message };
		}
		return null;
	}
};

export const listOfPosts = async () => {
	try {
		const docRefs = collection(db, 'posts');
		const { docs } = await getDocs(docRefs);
		// Convertir cada documento en un objeto Post
		const posts: IPost[] = docs.map((doc) => {
			const data = doc.data();
			return {
				id: doc.id,
				autor: data.autor,
				content: data.content,
				title: data.title,
				image: data.image,
				category: data.category,
			};
		});
		return posts;
	} catch (error) {
		console.log({ error });
		return [];
	}
};

export async function guardarPost({
	autor,
	content,
	title,
	image,
	category,
}: IPost) {
	try {
		if (!content || content === '') {
			throw 'No se proporcionó contenido content.';
		}

		const contentRef = doc(collection(db, 'posts'));

		// Guardar el contenido content en Firestore
		await setDoc(contentRef, {
			autor,
			content,
			title,
			image,
			category,
			createdAt: new Date(),
		});

		// Devolver el ID del documento para referencia
		return contentRef.id;
	} catch (error) {
		throw new Error('Error al guardar el contenido HTML: ' + error);
	}
}
