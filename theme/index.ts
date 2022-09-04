import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import typography from "./typography";
export const breakpoints = {
  sm: "650px",
  md: "769px",
  lg: "1120px",
  xl: "1441px",
  "2xl": "1536px",
};

const theme = {
  colors,
  ...typography,
  breakpoints,
};

export default extendTheme(theme);
