import { useMediaQuery } from "@chakra-ui/react";
import { breakpoints } from "../../theme";

export const useResponsive = () => {
  const [isMobile, isTablet, isXLarge, is2XLarge] = useMediaQuery([
    `(max-width: ${breakpoints.sm})`,
    `(max-width: ${breakpoints.md})`,
    `(max-width: ${breakpoints.lg})`,
    `(max-width: ${breakpoints.xl})`,
  ]);

  return {
    isMobile,
    isTablet: isTablet && !isMobile,
    isSmall: isMobile,
    isLarge: isTablet && !isMobile,
    isXLarge,
    is2XLarge,
  };
};
