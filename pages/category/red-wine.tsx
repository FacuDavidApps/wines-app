import {
    Typography,
  } from "@mui/material";
  import { NextPage } from "next";
  import { ShopLayout } from "../../components/layouts";
  import { ProductList } from "../../components/products";
  import { useProducts } from '../../hooks';
  import { FullScreenLoading } from '../../components/ui';
  
  
  const RedWinePage: NextPage = () => {
  
    const {products, isLoading} = useProducts('/products?category=red-wine')
    return (
      <>
        <ShopLayout
          title={"New Era - Wines"}
          pageDescription={"Encuentra los mejores vinos de New Era"}
        >
          <Typography variant="h1" component="h1">
            Vinos Rojos
          </Typography>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Los mejores vinos rojos
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
  
  
  export default RedWinePage