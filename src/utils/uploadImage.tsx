import { envVars } from "@/constants/env-vars";
const { back_url } = envVars

export const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
        const postData = await fetch(`${back_url}/api/media`, {
            method: 'POST',
            body: formData,
        });

        const urlResponse = await postData.json();
        return urlResponse.secure_url
    } catch (error) {
        console.error('Error al cargar la imagen:', error);
    }
};