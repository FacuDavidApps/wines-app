import {
    Typography,
  } from "@mui/material";
  import { NextPage } from "next";
  import { ShopLayout } from "../../components/layouts";
  import { ProductList } from "../../components/products";
  import { useProducts } from '../../hooks';
  import { FullScreenLoading } from '../../components/ui';
  
  
  const SparklingWinesPage: NextPage = () => {
  
    const {products, isLoading} = useProducts('/products?category=sparkling')
    return (
      <>
        <ShopLayout
          title={"Teslo-Shop - Kids"}
          pageDescription={"Encuentra los mejores productos de teslo para niños"}
        >
          <Typography variant="h1" component="h1">
            Vinos Espumantes
          </Typography>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Los mejores vinos Espumantes
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
  
  
  export default SparklingWinesPage