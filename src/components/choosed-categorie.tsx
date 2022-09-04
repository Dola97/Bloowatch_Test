import { Container, Flex, Text } from "@chakra-ui/react";
import React, { memo } from "react";

interface Props {
  choosed: string;
}
export const Categorie: React.FC<Props> = memo((props) => {
  return (
    <Flex
      w="100%"
      height={"212px"}
      bg="#0C0EB7"
      justify="flex-start"
      align="center"
      mb="100px"
    >
      <Container maxW="85%">
        <Text fontFamily="OpenSans-Regular" fontSize={["34px"]} color="#FFFFFF">
          {props.choosed}
        </Text>
      </Container>
    </Flex>
  );
});
