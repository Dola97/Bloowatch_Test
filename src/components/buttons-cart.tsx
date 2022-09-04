import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export const ButtonCart = () => {
  return (
    <Flex mb="81px" mt="55px" justify="flex-start">
      <Button mr="20px" color="#fff" bg="#0C0EB6">
        APPLY COUPON
      </Button>
      <Button color="#fff" bg="#0C0EB6">
        UPDATE CART
      </Button>
    </Flex>
  );
};
