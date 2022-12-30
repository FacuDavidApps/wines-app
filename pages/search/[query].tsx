import { Box, Typography } from "@mui/material";
import { NextPage, GetServerSideProps } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { dbProduct } from "../../database";
import { IProduct } from "../../interfaces/products";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <>
      <ShopLayout
        title={"New Era - Search"}
        pageDescription={"Encuentra los mejores vinos y espumantes aqui"}
      >
        <Typography variant="h1" component="h1">
          Buscar Productos
        </Typography>
        {foundProducts ? (
          <Typography variant="h2" sx={{ mb: 1 }}>
            {query}
          </Typography>
        ) : (
          <Box display="flex">
            <Typography variant="h2" sx={{ mb: 1 }}>
              No se encontro ningun producto
            </Typography>
            <Typography variant="h2" sx={{ ml: 1 }} color="secondary">
             {query}
            </Typography>
          </Box>
        )}

        <ProductList products={products} />
      </ShopLayout>
    </>
  );
};

export default SearchPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/404",
        permanent: true,
      },
    };
  }

  let products = await dbProduct.getProductByTerm(query);

  // TODO:retornar otros productos

  return {
    props: {
      products,
    },
  };
};
