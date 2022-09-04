import { Flex } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./logo";
import { Menu } from "./menu";
import { MenuToggle } from "./menu-toggle";

export const Header = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const NavBarContainer = ({ children, ...props }: any) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={6}
        color={["#000000"]}
        {...props}
      >
        {children}
      </Flex>
    );
  };
  return (
    <NavBarContainer {...props}>
      <Logo w="219px" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Menu isOpen={isOpen} />
    </NavBarContainer>
  );
};
