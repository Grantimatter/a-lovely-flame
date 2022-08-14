export interface Product {
	name: string;
	price: number;
	description: string;
	notes: string[];
	thumbnail?: string;
	sku: string;
	categories: string[];
}

export interface Categories {
	name: string;
}

export interface ScentNotes {
	name: string;
}
