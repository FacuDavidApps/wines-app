import {
    Typography,
  } from "@mui/material";
  import { NextPage } from "next";
  import { ShopLayout } from "../../components/layouts";
  import { ProductList } from "../../components/products";
  import { useProducts } from '../../hooks';
  import { FullScreenLoading } from '../../components/ui';
  
  
  const WhiteWinePage: NextPage = () => {
  
    const {products, isLoading} = useProducts('/products?category=white-wine')
    return (
      <>
        <ShopLayout
          title={"New Era - White Wine"}
          pageDescription={"Encuentra los mejores vinoes blancos de new era aqui"}
        >
          <Typography variant="h1" component="h1">
            Vino Blanco
          </Typography>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Los mejores vinos blancos 
          </Typography>
  
          {
            isLoading
            ? <FullScreenLoading />
            : <ProductList products={products} />
          }
        </ShopLayout>
      </>
    );
  }
  
  
  export default WhiteWinePage