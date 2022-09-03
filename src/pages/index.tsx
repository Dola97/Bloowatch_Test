import { Page } from "components";
import type { NextPage } from "next";
import { Box, Text } from "@chakra-ui/react";
const Home: NextPage = () => {
  return (
    <Page>
      <Box flexDir="column" sx={{ bg: "red", flex: 1, display: "flex" }} />
      <Text>Next App</Text>
    </Page>
  );
};

export default Home;
