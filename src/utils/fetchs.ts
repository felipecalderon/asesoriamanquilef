'use server'

export async function fetchData(path: string, options: OptionsFetch) {
    const url_backend = process.env.URL_BACKEND as string
    try {
        const response = await fetch(`${url_backend}${path}`, options);
            if (!response.ok) {
                throw response;
            }
            return await response.json();
        } catch (error) {
                console.error('Falló fetchData', error)
                throw error;
        }
}