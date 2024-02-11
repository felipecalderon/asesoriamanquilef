'use server'
import { collection, doc, setDoc, getDocs } from "firebase/firestore"; 
import { db } from "@/services/firebaseInit"; 

interface Post {
    autor: string
    content: string
    title: string
    image: string
}
export async function listOfPosts() {
    try {
        const {docs} = await getDocs(collection(db, "posts"));
        // Convertir cada documento en un objeto Post
        const posts = docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                autor: data.autor,
                content: data.content,
                title: data.title,
                image: data.image
            };
        });
        return posts;
    } catch (error) {
        console.log({error});
        return [];
    }
}

export async function guardarPost({autor, content, title, image}: Post) {
    if (!content || content === '') {
        throw "No se proporcionó contenido content."
    }

    const contentRef = doc(collection(db, "posts"));

    try {
        // Guardar el contenido content en Firestore
        await setDoc(contentRef, { autor, content, title, image, createdAt: new Date() });
        
        // Devolver el ID del documento para referencia
        return contentRef.id;
    } catch (error) {
        throw new Error("Error al guardar el contenido HTML: " + error);
    }
};