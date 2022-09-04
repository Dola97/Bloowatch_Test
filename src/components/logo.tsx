import React, { memo } from "react";
import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
interface Props {}
export const Logo: React.FC<Props> = memo((props: any) => {
  const { ...rest } = props;
  return (
    <NextLink href={"/"} passHref>
      <Box as={Link} {...rest}>
        <Image src={require("../images/Bitmap.png")} alt="Logo" />
      </Box>
    </NextLink>
  );
});
