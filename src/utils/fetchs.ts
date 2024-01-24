'use server';

import { OptionsFetch } from "../../global";

export async function fetchData(path: string, options: OptionsFetch) {
	const url_backend = process.env.NEXT_PUBLIC_URL_BACKEND as string;
	try {
		const response = await fetch(`${url_backend}${path}`, options);
		if (!response.ok) {
			throw response;
		}

		// Verifica si el contenido de la respuesta es JSON
		const contentType = response.headers.get('content-type');
		if (contentType && contentType.indexOf('application/json') !== -1) {
			return await response.json(); // Es JSON
		} else {
			return await response.text(); // No es JSON, se maneja como texto plano
		}
	} catch (error) {
		console.error('Falló fetchData', error);
		throw error;
	}
}
