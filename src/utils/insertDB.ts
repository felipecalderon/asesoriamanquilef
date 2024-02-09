'use server'
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "@/services/firebaseInit"; 

interface Post {
    autor: string
    content: string
    title: string
}
export async function guardarPost({autor, content, title}: Post) {
    if (!content || content === '') {
        throw "No se proporcionó contenido content."
    }

    const contentRef = doc(collection(db, "posts"));

    try {
        // Guardar el contenido content en Firestore
        await setDoc(contentRef, { autor, content, title, createdAt: new Date() });
        
        // Devolver el ID del documento para referencia
        return contentRef.id;
    } catch (error) {
        throw new Error("Error al guardar el contenido HTML: " + error);
    }
};