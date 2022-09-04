import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";

export const Selector = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        sx={{ color: "#858585" }}
        rightIcon={<ChevronDownIcon />}
        bg="transparent"
      >
        Defualt Sorting
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
          <MenuItemOption value="asc">Ascending</MenuItemOption>
          <MenuItemOption value="desc">Descending</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
