import { VStack, Text, Flex } from "@chakra-ui/react";
import React, { memo } from "react";
import { Badge } from "./badge";
import { Quantity } from "./quantity";
interface Props {
  Pname: string;
  price: number;
  salePrice: number;
  description: string;
  sku: string;
  categories: string[];
  tags: string[];
  hasSale: boolean | undefined;
}
export const ProductInfo: React.FC<Props> = memo((props) => {
  return (
    <VStack
      ml={[null, null, null, "63px"]}
      alignItems={["center", "center", "center", "flex-start"]}
    >
      <Text
        color="#000000"
        textAlign={["center", "center", "center", "left"]}
        fontSize="18px"
        pb="28px"
      >
        {props.Pname}
      </Text>
      <Flex justify="center">
        <Badge styleBadge={{ bg: "#0C0EB7", padding: 1, marginRight: "10px" }}>
          <Text color="white" fontSize="16px">
            {props.price}
          </Text>
        </Badge>
        {props.hasSale && (
          <Badge styleBadge={{ bg: "#fff", padding: 1 }}>
            <Text color="#000000">{props.hasSale}</Text>
          </Badge>
        )}
      </Flex>
      <Text
        textAlign={["center", "center", "center", "left"]}
        pb="33px"
        maxW={"449px"}
        color="#000000"
        fontSize="14px"
        pt="28px"
      >
        {props.description}
      </Text>
      <Quantity />
      <Text pt="80px" color="#000000" fontSize="14px" pb="28px">
        SKU: {props.sku}
      </Text>
      <Flex>
        <Text color="#000000" fontSize="14px" pb="28px">
          CATEGORIES:
        </Text>
        {props.categories.map((item, key) => (
          <Text key={`cate_itrem,${key}`} color="#000000">
            {" "}
            {item}
          </Text>
        ))}
      </Flex>
    </VStack>
  );
});
