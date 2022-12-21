import { IProduct } from "../../interfaces";
import { FC, useMemo, useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import NextLink from "next/link";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NextLink href={`/product/${ product.slug }`}  prefetch={false}>
          <Card sx={{ height: '303px', width: '303px'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={productImage}
                alt={product.title}
                className="fadeIn"
                onLoad={() => setIsImageLoaded(true)}
              />
            </CardActionArea>
          </Card>
      </NextLink>

      <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$ ${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
