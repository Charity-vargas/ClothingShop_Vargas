import { useContext } from "react";
import { ClothingShopContext, } from "../../useContext/shopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title, Inline, ProductImage } from "./Checkout.styled";
import { Wrapper } from "../App";
import Button from '@material-ui/core/Button';

export const Checkout = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <Title>Product Checkout</Title>
      <Wrapper>
        {products.map((product: Product, index) => (
          <div style={{ display: "flex" }}>
            <ProductImage background={product.imageUrl}></ProductImage>
            <div>
              <Inline>
                <h4>Product name</h4>
                <p> {": " + product.name}</p>
              </Inline>
              <Inline>
                <h4>Quantity</h4>
                <p> {": " + product.count} * {product.price}</p>
              </Inline>
              <Inline>
                <h4>Subtotal</h4>
                <p>: {product.count * product.price}.00$</p>
              </Inline>
            </div>
          </div>
        ))}
        <div><b>Total</b>: {total}.00$</div>
      </Wrapper>
    </>
  );
};