import {
  AddButton,
  RemoveButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
  Icon,
  CartContainer,
  WishBtnContainer,
  Input,

} from "./ProductCard.styled";
import { useState, useEffect, useContext } from "react";
import { Product } from "../../models";
import { ClothingShopContext } from "../../useContext";

import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

export const ProductCard = ({ name, imageUrl, price, isWishlist, count }: Product) => {
  const { products, addToCart, removeItem, addToWishlist } = useContext(ClothingShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [thisCount, setAddCount] = useState(count);
  const ONE = 1;


  useEffect(() => {
    const itemInCart = products.find(
      (product: { name: string }) => product.name === name
    );


    setIsInCart(itemInCart ? true : false);
    setAddCount(count)
  }, [products, name]);

  const handleClick = () => {
    // shoping cart icon

    var product = { name, imageUrl, price, count };
    product.count = ONE


    if (isInCart) {
      removeItem(product);
      return;
    }

    setIsInCart(isInCart!);
    addToCart(product);
  };

  const addCountValue = () => {
    var product = { name, imageUrl, price, count };


    setAddCount(thisCount + ONE)
    product.count = thisCount + ONE;


    //gi update ang quantity sa product ++
    addToCart(product);
  };

  const addToWish = () => {
    var product = { name, imageUrl, price, isWishlist, count };
    //gi call si addtowishlist method
    addToWishlist(product);
  }

  const removeCountValue = () => {
    var product = { name, imageUrl, price, count };


    setAddCount(thisCount - ONE)
    product.count = thisCount - ONE;

    //gi update ang quantity sa product --
    addToCart(product);
  };

  return (
    <Wrapper background={imageUrl}>
      {count > 0 ?
        // add remove button 
        <div>
          <AddButton isInCart={isInCart} onClick={addCountValue}>
            <p>{"+"}</p>
          </AddButton>
          <RemoveButton isInCart={isInCart} onClick={removeCountValue}>
            <p>{"-"}</p>
          </RemoveButton>
          <Input type='number' value={thisCount}
            pattern='[0-9]+([\,|\.][0-9]+)?' />
        </div>
        :
        <div>
          {/* //add to wishlist */}
          <WishBtnContainer>
            {isWishlist ? <FavoriteOutlinedIcon style={Icon} onClick={addToWish} /> :
              <FavoriteBorderOutlinedIcon style={Icon} onClick={addToWish} />}
          </WishBtnContainer>
          {isInCart ?
            // add to cart
            <CartContainer>
              <RemoveShoppingCartOutlinedIcon style={Icon} onClick={handleClick} />
            </CartContainer> :
            <CartContainer>
              <AddShoppingCartOutlinedIcon style={Icon} onClick={handleClick} />
            </CartContainer>
          }
        </div>}
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
