import React, { useMemo } from "react";
import Image from "next/image";
import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { useResponsive } from "hooks/useResponsive";
export const Carousel = () => {
  return (
    <Flex
      flexDir={["row", "row", "row", "column"]}
      flexWrap="wrap"
      mr="43px"
      justify="center"
    >
      <Box mb="15px" mr={["15px", "15px", "15px", null]}>
        <Image
          layout="fixed"
          src={require("../images/BitmapN.png")}
          width="83px"
          height="135px"
          objectFit="contain"
          style={{ backgroundColor: "#FAFAFA" }}
        />
      </Box>
      <Box mb="15px" mr={["15px", "15px", "15px", null]}>
        <Image
          layout="fixed"
          src={require("../images/BitmapN.png")}
          width="83px"
          height="125px"
          objectFit="contain"
          style={{ backgroundColor: "#FAFAFA" }}
        />
      </Box>
      <Box mb="15px">
        <Image
          layout="fixed"
          src={require("../images/BitmapN.png")}
          width="83px"
          height="125px"
          objectFit="contain"
          style={{ backgroundColor: "#FAFAFA" }}
        />
      </Box>
    </Flex>
  );
};
