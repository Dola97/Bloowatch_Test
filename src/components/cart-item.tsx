import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

interface Props {
  image: any;
  name: string;
  price: number;
  quantity: number;
  _handleDelete: any;
}
export const CartItem: React.FC<Props> = ({
  image,
  name,
  price,
  quantity,
  _handleDelete,
}) => {
  return (
    <>
      <Flex
        display={{ base: "none", md: "flex" }}
        flexDir="row"
        align="center"
        py="24px"
      >
        <Flex flex={2} flexDir="row" align="center">
          <DeleteIcon onClick={_handleDelete} />
          <Box mx="5">
            <Image
              layout="fixed"
              src={image}
              width="35px"
              height="104px"
              objectFit="contain"
            />
          </Box>
          <Text>{name}</Text>
        </Flex>
        <Text flex={1}>{price}</Text>
        <Flex flex={1}>
          <NumberInput
            size="xs"
            maxW={16}
            defaultValue={quantity}
            min={1}
            max={20}
            // onChange={(valueString) => setValue(parse(valueString))}
            // value={format(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
        <Text flex={1}>{price * quantity}</Text>
      </Flex>

      <Divider
        display={{ base: "none", md: "flex" }}
        colorScheme="blue"
        orientation="horizontal"
      />
      {/* Mobile Version */}
      <Flex display={{ base: "flex", md: "none" }} flexDir="column">
        <Flex mt="4" align="center" width="full" justify="flex-start">
          <DeleteIcon onClick={_handleDelete} />
          <Box mx="5">
            <Image
              layout="fixed"
              src={image}
              width="35px"
              height="104px"
              objectFit="contain"
            />
          </Box>

          <Text>{name}</Text>
        </Flex>
        <Text flex={1}>{price * quantity}</Text>
      </Flex>
      <Divider
        display={{ base: "flex", md: "none" }}
        colorScheme="blue"
        orientation="horizontal"
      />
    </>
  );
};
