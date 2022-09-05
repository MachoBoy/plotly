import { Flex, Spacer, Box, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex alignItems="center">
      <Box position="relative" w="186px">
        <Image
          src={
            colorMode === "light"
              ? "/plotly_logo_light.svg"
              : "/plotly_logo_dark.svg"
          }
          alt="plotly logo"
          width={186}
          height={52}
          layout="responsive"
        ></Image>
      </Box>
      <Spacer />
      <ThemeSwitcher />
    </Flex>
  );
};

export default Header;
