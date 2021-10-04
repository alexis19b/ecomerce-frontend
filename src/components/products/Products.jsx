import React from "react";
import { Container } from "./style";
import { popularProducts } from "../../data";
import Product from "./Product.js/Product";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
