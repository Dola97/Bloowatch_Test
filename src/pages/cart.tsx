import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { ButtonCart, CartInfo, CartItem, Categorie, Page } from "components";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCart } from "store/cart-slice";

const Cart: NextPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCart);
  console.log("items", items);
  const _handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Page>
      <Categorie choosed={"CART"} />
      <Container maxW="container.xl">
        <Flex display={{ base: "none", md: "flex" }} justify="space-between">
          <Text flex={2}>PRODUCT</Text>
          <Text flex={1}>PRICE</Text>
          <Text flex={1}>QUANTITY</Text>
          <Text flex={1}>SUBTOTAL</Text>
        </Flex>
        <Divider
          display={{ base: "none", md: "flex" }}
          colorScheme="blue"
          orientation="horizontal"
        />
        {items.map((item, key) => (
          <React.Fragment key={`item_key_cart${key}`}>
            <CartItem
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              _handleDelete={() => _handleDelete(item.id)}
            />
          </React.Fragment>
        ))}
        <ButtonCart />
        <CartInfo />
      </Container>
    </Page>
  );
};

export default Cart;
