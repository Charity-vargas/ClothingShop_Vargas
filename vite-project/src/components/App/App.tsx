import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";
import { ClothingShopContext } from "../../useContext";
import { useReducer } from "react";
import { add, initialState, remove, shopReducer, update, updateProduct } from "../../useReducer";
import { Product } from "../../models";
import { Wishlist } from "../WishList";
import { shopData } from "../../data";
import { Checkbox } from "@mui/material";
import { Checkout } from "../Checkout";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  const ZERO = 0;

  const addToCart = (product: Product) => {
    //pangitaon ang item if naa sa cart, mo return og data(true) if naa
    const isExist = state.products.find((current: { name: string }) =>
      current.name === product.name)

    //if ang quantity kay zero na gani remove ang item sa cart
    if (product.count <= ZERO) {
      removeItem(product)
      return;
    }

    // if ang item wala sa cart kay iya iadd sa cart then mo return siya
    //if ang isExist kay null mo sud sa if statement
    if (!isExist) {
      const updatedCart = state.products.concat(product);
      updatePrice(updatedCart);
      dispatch(add(updatedCart));

      return
    }

    // if ang itme naa sa cart
    //if ang time more than 0 anfg quamntity
    state.products.forEach((element: Product) => {
      if (element.name === product.name)
        element.count = product.count
    });

    //update price
    updatePrice(state.products);
    //update state sa product
    dispatch(add(state.products));
  }

  const addToWishlist = (wishlist: Product) => {
    //gi loop ang data
    shopData.forEach((product: Product) => {
      
      //if data gi add equal sa product list
      if (product.name == wishlist.name)  
        //gi set to true or false ang isWishlist
        product.isWishlist = !wishlist.isWishlist

      // product.isWishlist = product.name == wishlist.name ?
      //   !wishlist.isWishlist : product.isWishlist
    });

    //update state
    dispatch(add(state.products));
  };


  const removeItem = (product: Product) => {
    //gi filter out ang product 
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );

    //si updatedCart kay ang list product result after gi remove 
    updatePrice(updatedCart);
    dispatch(remove(updatedCart));
  };

  const updatePrice = (products: [] = []) => {
    let total = ZERO;

    products.forEach((product: { price: number, count: number }) => (
      // quantity * price
      total += (product.count * product.price)
    ));

    dispatch(update(total));
  };


//likely global values
  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeItem,
    addToWishlist,
  }
  return (
    <ClothingShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Wrapper>
    </ClothingShopContext.Provider>
  );
};