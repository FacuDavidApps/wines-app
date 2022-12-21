import NextLink from "next/link";
import {
  Typography,
  Toolbar,
  AppBar,
  Box,
  Button,
  Badge,
  IconButton,
} from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UiContext } from "../../context";
import logo from "../../public/assets/logo.jpg"
import Image from 'next/image';

export const Navbar = () => {

  const {asPath} = useRouter();
  const {toggleSideMenu} = useContext(UiContext)

  return (
    <>
      <AppBar>
        <Toolbar>
          <NextLink href="/" style={{ textDecoration: "none" }}>
            <Box display="flex" alignItems="center">
              <Image src={logo} alt="New Era" width={100} height={75}/>
            </Box>
          </NextLink>

          <Box flex={1} />

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NextLink href="/category/red-wine" style={{ textDecoration: "none" }}>
              <Button color={asPath === '/category/red-wine' ? 'primary' : 'info'}>Vinos Rojos</Button>
            </NextLink>
            <NextLink href="/category/white-wine" style={{ textDecoration: "none" }}>
              <Button color={asPath === '/category/white-wine' ? 'primary' : 'info'}>Vinos Blancos</Button>
            </NextLink>
            <NextLink href="/category/sparkling" style={{ textDecoration: "none" }}>
              <Button color={asPath === '/category/sparkling' ? 'primary' : 'info'}>Vinos Espumantes</Button>
            </NextLink>
          </Box>

          <Box flex={1} />

          <IconButton>
            <SearchOutlined />
          </IconButton>

          <NextLink href="/cart" style={{ textDecoration: "none" }}>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </NextLink>
          <Button onClick={toggleSideMenu}>Menu</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
