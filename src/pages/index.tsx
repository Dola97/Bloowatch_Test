import { Categorie, Page } from "components";
import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";

import { ProductsSection, FilterSection, Sorting } from "sections";
import { useSelector } from "react-redux";
import { selectCart } from "store/cart-slice";
import { selectFilter } from "store/filter-slice";
const Home: NextPage = () => {
  const items = useSelector(selectCart);
  const { choosedCategorie } = useSelector(selectFilter);
  console.log("items", items);
  return (
    <Page>
      <Categorie choosed={choosedCategorie} />
      <Sorting />
      <Flex
        justifyContent={["center"]}
        pb={40}
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <ProductsSection />
        <FilterSection />
      </Flex>
    </Page>
  );
};

export default Home;
