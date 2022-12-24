import { useContext } from "react";
import { ClothingShopContext, } from "../../useContext/shopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title, Header, LinksWrapper } from "./Cart.styled";

import { Link } from "react-router-dom";
export const Cart = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <Header>
        <Title>Your cart total is {total}.00$</Title>
        <Link to="/checkout" >Checkout</Link>
      </Header>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};