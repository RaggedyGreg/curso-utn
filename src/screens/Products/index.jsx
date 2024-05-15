import React from "react";
import ProductCard from "../../shared/Card";
import { ProductsContainer } from "./styled";

const Products = () => {
  return (
    <>
      <h1>Productos</h1>
      <ProductsContainer>
        <ProductCard />
      </ProductsContainer>
    </>
  );
};

export default Products;
