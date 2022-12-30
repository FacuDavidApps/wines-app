import { Typography } from "@mui/material";
import { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";

const RedWinePage: NextPage = () => {
  const { products, isLoading } = useProducts("/products?category=red-wine");

  const pinots = products.filter((prod) => prod.type === "pinot");
  const sauvignons = products.filter((prod) => prod.type === "sauvignon");
  const cavernets = products.filter((prod) => prod.type === "cavernet");
  const malbecs = products.filter((prod) => prod.type === "malbec");

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

        {isLoading ? (
          <FullScreenLoading />
        ) : (
          <>
            {malbecs.length > 0 && (
              <>
                <Typography>Malbecs</Typography>
                <ProductList products={malbecs} />
              </>
            )}
            {cavernets.length > 0 && (
              <>
                <Typography>Cavernets</Typography>
                <ProductList products={cavernets} />
              </>
            )}
            {pinots.length > 0 && (
              <>
                <Typography>Pinots</Typography>
                <ProductList products={pinots} />
              </>
            )}
            {sauvignons.length > 0 && (
              <>
                <Typography>Sauvignons</Typography>
                <ProductList products={sauvignons} />
              </>
            )}
          </>
        )}
      </ShopLayout>
    </>
  );
};

export default RedWinePage;
