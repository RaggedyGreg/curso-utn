import React, { useContext } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardComponent, MediaContainer, CardImage, Waiting } from "./styled";
import { productsContext } from "../../context/ProductsContext";

const ProductCard = () => {
  const { products, isLoading, error, maxPrice, query, cart } =
    useContext(productsContext);

  console.log(products);

  return (
    <>
      {isLoading ? (
        <Waiting>Esperando</Waiting>
      ) : (
        products.map((product) => (
          <CardComponent key={product.id}>
            <MediaContainer>
              <CardImage
                component="img"
                height="160"
                image={product.image}
                alt={product.title}
              />
            </MediaContainer>
            <CardContent>
              <Typography sx={{ fontSize: 18, mb: 1.5 }}>
                {product.title.length >= 40
                  ? product.title.substr(0, 40) + "..."
                  : product.title}
              </Typography>
              <Typography variant="body2">
                {product.description.length >= 165
                  ? product.description.substr(0, 165) + "..."
                  : product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Agregar al carrito</Button>
            </CardActions>
          </CardComponent>
        ))
      )}
    </>
  );
};

export default ProductCard;
