import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useGetProduct } from "hooks/useGetProduct";
import { useRouter } from "next/router";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByProduct, selectCart } from "store/cart-slice";

export const Quantity = memo(() => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector(selectCart);
  const { id } = query;
  const { product }: any = useGetProduct(id);
  const handleChange = (value: any) => setQuantity(value);
  const _handleAdd = () => {
    dispatch(incrementByProduct({ product, quantity: Number(quantity) }));
  };
  console.log("cartt", cart);
  return (
    <Flex>
      <NumberInput
        size="xs"
        value={quantity}
        onChange={handleChange}
        maxW={20}
        defaultValue={1}
        min={1}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        onClick={_handleAdd}
        w="176px"
        ml="7px"
        variant="outline"
        borderRadius={0}
      >
        Add To Cart
      </Button>
    </Flex>
  );
});
