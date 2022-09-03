import { ComponentWithAs, Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface PropsPage {
  children?: React.ReactNode;
  props?: ComponentWithAs<"div", FlexProps>;
}
export const Page: React.FC<PropsPage> = ({ children, ...props }) => {
  return (
    <div style={{ minHeight: "100vh", overflowY: "scroll" }}>
      <Flex
        overflowX="hidden"
        pos="relative"
        flex={1}
        flexDirection="column"
        {...props}
      >
        {/* {hasHeader ? <Header withMenu={withMenu} /> : null} */}
        <main>{children}</main>
        {/* {hasFooter ? <Footer hasSignUp={hasSignUp} /> : null} */}
      </Flex>
    </div>
  );
};
