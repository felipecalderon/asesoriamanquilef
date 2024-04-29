export interface IPost {
	id: string;
	subtitle: string;
	content: string;
	title: string;
	image: string;
	category: 'Noticias' | 'Servicios';
}

export interface MensajeGPT {
    role: 'user' | 'system'
    content: string
}

