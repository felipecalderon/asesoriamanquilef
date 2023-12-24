'use server'
export async function fetchData(options: OptionsFetch) {
    const url_backend = process.env.URL_BACKEND
    try {
        const response = await fetch(url_backend as string, options);
            if (!response.ok) {
                throw response;
            }
            return await response.json();
        } catch (error) {
                console.error('Falló fetchData', error)
                throw error;
        }
}