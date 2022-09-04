import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { MenuItem } from "./menu-item";
interface Props {
  isOpen: boolean;
}

export const Menu: React.FC<Props> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={20}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Shop</MenuItem>
        <MenuItem to="/how">Blog</MenuItem>
        <MenuItem to="/how">Search</MenuItem>
        <MenuItem to="/cart">Cart</MenuItem>
      </Stack>
    </Box>
  );
};
