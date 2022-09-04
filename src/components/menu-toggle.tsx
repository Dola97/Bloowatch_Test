import React, { memo } from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, BellIcon } from "@chakra-ui/icons";
interface Props {
  isOpen: boolean;
  toggle: () => void;
}
export const MenuToggle: React.FC<Props> = memo((props) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={props.toggle}>
      {props.isOpen ? <CloseIcon /> : <BellIcon />}
    </Box>
  );
});
