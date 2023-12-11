'use server'

export async function fetchData(url: string, options: OptionsFetch, retryCount = 3) {
    for (let i = 0; i < retryCount; i++) {
        try {
            const response = await fetch(url, options);
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