import { useContext } from "react";
import { ClothingShopContext, } from "../../useContext/shopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";
import { shopData } from '../../data';

export const Wishlist = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <Title>Your product wishlists </Title>
      <ProductsWrapper>

        {/* //gi filter ang data if naa sa wishlist io gi heart */}
        {shopData.filter((product: Product) =>
          product.isWishlist == true).map((product: Product, index) => (
            <ProductCard {...product} key={index} />
          ))}
      </ProductsWrapper>
    </>
  );
};

