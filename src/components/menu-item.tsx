import Link from "next/link";
import React from "react";
import { ComponentWithAs, Flex, Text, TextProps } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  to: string;
}
export const MenuItem: React.FC<Props> = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Flex>
        <Text
          fontFamily="OpenSans-SemiBold"
          cursor="pointer"
          fontSize={["18px"]}
          display="block"
          {...rest}
        >
          {children}
        </Text>
      </Flex>
    </Link>
  );
};
