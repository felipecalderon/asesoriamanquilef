'use server'
export async function fetchData(options: OptionsFetch, retryCount = 3) {
    const url_backend = process.env.URL_BACKEND
    console.log({url_backend});
    for (let i = 0; i < retryCount; i++) {
        try {
            const response = await fetch(url_backend as string, options);
            if (!response.ok) {
                throw new Error('Response not OK');
            }
            return await response.json();
        } catch (error) {
            if (i === retryCount - 1) {
                throw error;
            }
        }
    }
}