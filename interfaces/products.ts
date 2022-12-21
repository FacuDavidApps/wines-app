export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    type: ITypes;
    category: 'red-wine'|'white-wine'|'sparkling'
}

export type ITypes = 'chardonnay'|'malbec'|'pinot'|'cavernet'|'sauvignon'|'vieux'|'extra brut'|'brut nature';