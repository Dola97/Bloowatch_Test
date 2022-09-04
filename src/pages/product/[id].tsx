import { Container, Flex } from "@chakra-ui/react";
import { Carousel, Categorie, MainImage, Page, ProductInfo } from "components";
import { TabsProduct } from "components/tabs";
import { useGetProduct } from "hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ProductsSection } from "sections/products";

const Product: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  console.log("d", query);
  const { product }: any = useGetProduct(id);

  return (
    <Page>
      <Categorie choosed={product?.name} />
      <Container maxW="container.xl">
        <Flex
          justifyContent={["flex-start"]}
          flexDirection={["column", "column", "column", "column", "row"]}
        >
          <Carousel />
          <MainImage />
          <ProductInfo
            Pname={product.name}
            price={product.price}
            salePrice={product.salePrice}
            description={product.descrption}
            sku={"111"}
            categories={product.categories}
            tags={[]}
            hasSale={product.hasSale}
          />
        </Flex>
        <TabsProduct />
        <ProductsSection />
      </Container>
    </Page>
  );
};

export default Product;
