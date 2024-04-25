export interface IPost {
	id: string;
	autor: string;
	content: string;
	title: string;
	image: string;
	category: 'Noticias' | 'Servicios';
}