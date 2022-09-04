import { DefaultTheme } from "styled-components";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    600: "#0791d0",
  },
};

export const chackraCustomTheme = extendTheme({ colors });

export const theme: DefaultTheme = {
  colors: {
    main: "#0791d0",
  },
  containersPadding: "20px",
};
