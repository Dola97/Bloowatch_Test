import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Sections = () => {
  return (
    <Flex
      w="container.lg"
      justifyContent="space-between"
      flexDir={["column", "column", "row", "row"]}
    >
      <VStack flexDir="column" alignItems="flex-start">
        <Text color="white" fontSize="14px">
          About
        </Text>
        <Text color="white" w="322px" fontSize="14px">
          Bloowatch is specialized software for watersports schools (surfing,
          kitesurfing, sailing, and diving) and outdoor activity providers
          (skiing, climbing
        </Text>
      </VStack>
      <VStack flexDir="column" alignItems="flex-start">
        <Text color="white" fontSize="14px">
          Contact
        </Text>
        <Text color="white" fontSize="14px">
          156-677-124-442-2887
        </Text>
        <Text color="white" fontSize="14px">
          wave@bloowatch.com
        </Text>
        <Text color="white" fontSize="14px">
          Spain
        </Text>
      </VStack>
      <VStack flexDir="column" alignItems="flex-start">
        <Text color="white" fontSize="14px">
          USEFULL LINKS
        </Text>
        <Text color="white" fontSize="14px">
          About us
        </Text>
        <Text color="white" fontSize="14px">
          History
        </Text>
        <Text color="white" fontSize="14px">
          Contact us
        </Text>
      </VStack>
      <VStack flexDir="column" alignItems="flex-start">
        <Text color="white" fontSize="14px">
          Instagram
        </Text>
      </VStack>
    </Flex>
  );
};

export const Footer = () => {
  return (
    <Flex
      as="footer"
      sx={{
        py: [16, 12],
        px: [8, 20],
        bg: "#000000",
        flexDir: ["row", "row"],
        justifyContent: ["center", "space-between"],
        alignItems: ["center", "inherit"],
      }}
    >
      <Sections />
    </Flex>
  );
};
