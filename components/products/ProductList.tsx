import { Grid } from "@mui/material"
import { IProduct } from '../../interfaces/products';
import { FC } from 'react';
import { ProductCard } from "./ProductCard";

interface Props {
    products: IProduct[]
}

export const ProductList:FC<Props> = ({products}) => {
  return (
    <Grid container spacing={4} columns={16} >
        {
            products.map( product => (
                <ProductCard key={product.slug} product={product}/>
            ))
        }
    </Grid>
  )
}
