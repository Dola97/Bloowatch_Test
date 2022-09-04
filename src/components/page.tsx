import { ComponentWithAs, Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface PropsPage {
  children?: React.ReactNode;
  props?: ComponentWithAs<"div", FlexProps>;
  hasHeader?: boolean;
  hasFooter?: boolean;
}
export const Page: React.FC<PropsPage> = ({
  children,
  hasHeader = true,
  hasFooter = true,
  ...props
}) => {
  return (
    <div style={{ minHeight: "100vh", overflowY: "scroll" }}>
      <Flex
        overflowX="hidden"
        pos="relative"
        flex={1}
        flexDirection="column"
        {...props}
      >
        {hasHeader ? <Header /> : null}
        <main>{children}</main>
        {hasFooter ? <Footer /> : null}
      </Flex>
    </div>
  );
};
