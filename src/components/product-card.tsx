import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Badge } from "./badge";
import NextLink from "next/link";
interface Props {
  hasSale?: boolean;
  canBuy: boolean;
  name: string;
  categoires: string[];
  price: number;
  salePrice: number | undefined;
  image: any;
  alt: string;
  clickButton: () => void;

  productid: number;
}
export const ProductCard: React.FC<Props> = ({
  hasSale = false,
  canBuy = false,
  name,
  categoires,
  price,
  clickButton,
  salePrice,
  image,
  alt,
  productid,
}) => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        w={["322px", "250px", "322px"]}
        pos="relative"
        flexDir="column"
      >
        <Image
          quality={100}
          src={image}
          alt={alt}
          layout="fixed"
          style={{ zIndex: 1 }}
        />
        <NextLink href={`/product/${encodeURIComponent(productid)}`} passHref>
          <Box
            as={Link}
            pos="absolute"
            bg="#FAFAFA"
            height={"379px"}
            right={0}
            left={0}
          />
        </NextLink>
        {canBuy ? (
          <Button
            borderRadius={0}
            onClick={clickButton}
            sx={{
              color: "white",
              fontSize: "14px",
              fontFamily: "OpenSans-SemiBold",
              zIndex: 2,
            }}
            height="53px"
            w="full"
            bg="#0C0EB6"
          >
            Add To Cart
          </Button>
        ) : (
          <Box height="53px" />
        )}

        <Text
          fontSize={"19px"}
          pt="17px"
          pb="5px"
          pos="relative"
          color="#000000"
          fontFamily="sans-serif"
        >
          {name?.toUpperCase()}
        </Text>
        <Flex flexDirection="row">
          {categoires?.map((item, key) => (
            <Text
              fontSize="14px"
              pb="23px"
              key={`categories_keys_products_list${key}`}
              color="#0C0EB7"
              fontFamily="sans-serif"
            >
              {" "}
              {item} ,{" "}
            </Text>
          ))}
        </Flex>

        <Flex justify="center">
          <Badge
            styleBadge={{ bg: "#0C0EB7", padding: 1, marginRight: "10px" }}
          >
            <Text color="white" fontSize="16px">
              {price}
            </Text>
          </Badge>
          {hasSale && (
            <Badge styleBadge={{ bg: "#fff", padding: 1 }}>
              <Text color="#000000">{salePrice}</Text>
            </Badge>
          )}
        </Flex>
      </Flex>
    </>
  );
};
