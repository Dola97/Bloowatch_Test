import { Flex } from "@chakra-ui/react";
import { Search, SliderRange, Categories } from "components";
import React from "react";

export const FilterSection = () => {
  return (
    <Flex as="section" flexDir={"column"}>
      <Search />
      <SliderRange />
      <Categories />
    </Flex>
  );
};
