import { db } from "."
import Product from '../models/Product';
import { IProduct } from '../interfaces/products';

export const getProductBySlug = async(slug: string): Promise<IProduct>=> {
    await db.connect()
    
    const product = await Product.findOne({slug}).lean();

    await db.disconnect()


    if (!product) {
         // @ts-ignore:
        return null
    }

    return JSON.parse(JSON.stringify(product))
}


interface ProductSlug {
    slug: string;
}
export const getAllProductSlugs = async(): Promise<ProductSlug[]>  => {


    await db.connect();
    const slugs = await Product.find().select('slug -_id').lean();
    await db.disconnect();

    return slugs;
}


export const getProductByTerm = async(term: string): Promise<IProduct>=> {

    term = term.toString().toLowerCase();

    await db.connect();
    const products = await Product.find({
        $text: { $search: term }
    })
    .select('title images price inStock slug -_id')
    .lean();


    await db.disconnect();


    return JSON.parse(JSON.stringify(products))
}