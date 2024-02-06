'use server'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/services/firebaseInit";

export async function uploadFile(imageFile: File){
    if (!imageFile) {
        throw new Error("No se proporcionó ningún archivo de imagen.");
    }

    // Crear una referencia al lugar donde desea guardar el archivo en Firebase Storage
    // 'images' es la carpeta, 'imageFile.name' es el nombre del archivo
    const imageRef = ref(storage, `images/${imageFile.name}`);

    try {
        // Cargar el archivo a Firebase Storage
        const snapshot = await uploadBytes(imageRef, imageFile);
        
        // Obtener y devolver la URL de descarga
        return await getDownloadURL(snapshot.ref);
    } catch (error) {
        throw new Error("Error al cargar la imagen: " + error);
    }
};