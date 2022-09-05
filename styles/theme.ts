import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, Styles } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles: Styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("white", "#1E1E1E")(props),
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
