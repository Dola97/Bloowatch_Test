import { Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const CartInfo = () => {
  return (
    <Flex maxW="container.md" flexDirection="column" pb="276px">
      <Heading>CART TOTAL</Heading>

      <Flex mt="40px" flexDir="row" justify="flex-start">
        <Text flex={1}>SUBTOTAL</Text>
        <Text flex={1}>$200</Text>
      </Flex>
      <Divider />
      <Flex mt="40px" flexDir="row" justify="flex-start">
        <Text flex={1}>SHIPPING </Text>
        <Text flex={1}>Enter your address to view shipping options.</Text>
      </Flex>
      <Divider />
    </Flex>
  );
};
