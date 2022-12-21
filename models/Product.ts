import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces';


const productSchema = new Schema({
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },

    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
        type: String,
        enum: {
            values: ['chardonnay','malbec','pinot','cavernet','sauvignon','vieux', 'extra brut','brut nature'],
            message: '{VALUE} no es un tipo válido'
        }
    },
    category: {
        type: String,
        enum: {
            values: ['red-wine','white-wine','sparkling'],
            message: '{VALUE} no es una categoria válida'
        }
    }
},{
    timestamps: true
});


productSchema.index({ title: 'text', tags: 'text' });


const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema );


export default Product;