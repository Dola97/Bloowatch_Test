import React from "react";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

export const MainImage = () => {
  return (
    <Flex justify="center">
      <Image
        src={require("../images/BitmapN.png")}
        layout="fixed"
        width="533px"
        height="601px"
        objectFit="contain"
        style={{ backgroundColor: "#FAFAFA" }}
      />
    </Flex>
  );
};
