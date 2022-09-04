import { Flex, Text } from "@chakra-ui/react";
import { Selector } from "components";
import React from "react";

export const Sorting = () => {
  return (
    <Flex
      flexDirection="row"
      as="section"
      sx={{ pb: "89px" }}
      justifyContent="space-around"
      alignItems="center"
    >
      <Text color="#858585" fontSize="14px">
        Showing 1–9 of 21 results
      </Text>
      <Selector />
    </Flex>
  );
};
