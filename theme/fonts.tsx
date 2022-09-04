import React from "react";
import { Global } from "@emotion/react";

export const Fonts = () => {
  return (
    <Global
      styles={`
      @font-face {
          font-family: "OpenSans-Bold";
          src: url("/theme/fonts/OpenSans-Bold.ttf") format("truetype"),
         
      }
            @font-face {
          font-family: "OpenSans-Light";
          src: url("/theme/fonts/OpenSans-Light.ttf") format("truetype"),
    
      }
            @font-face {
          font-family: "OpenSans-Medium";
          src: url("/theme/fonts/OpenSans-Medium.ttf") format("truetype"),
     
      }
             @font-face {
          font-family: "OpenSans-Regular";
          src: url("/theme/fonts/OpenSans-Regular.ttf") format("truetype"),
      
      }
                @font-face {
          font-family: "OpenSans-semi";
          src: url("/theme/fonts/OpenSans-SemiBold.ttf") format("truetype"),
      }
    `}
    />
  );
};
