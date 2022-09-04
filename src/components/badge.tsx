import { Box, SystemStyleObject } from "@chakra-ui/react";
import React, { memo } from "react";

interface Props {
  children?: any;
  styleBadge: SystemStyleObject | undefined;
}

export const Badge: React.FC<Props> = memo((props) => {
  return <Box sx={{ ...props.styleBadge }}>{props.children}</Box>;
});
