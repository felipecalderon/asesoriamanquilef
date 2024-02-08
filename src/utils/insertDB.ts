'use server'
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "@/services/firebaseInit"; 

export async function guardarPost({autor, html}: {autor: string, html: string}) {
    if (!html || html === '') {
        throw "No se proporcionó contenido HTML."
    }

    // Crear un nuevo documento en la colección 'contents'
    // Puede utilizar un ID específico o permitir que Firestore genere uno automáticamente
    const contentRef = doc(collection(db, "contents"));

    try {
        // Guardar el contenido HTML en Firestore
        await setDoc(contentRef, { autor, html, createdAt: new Date() });
        
        // Devolver el ID del documento para referencia futura
        return contentRef;
    } catch (error) {
        throw new Error("Error al guardar el contenido HTML: " + error);
    }
};