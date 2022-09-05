import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stack,
  Divider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import SunIcon from "../../public/sun.svg";
import ChevronDownIcon from "../../public/chevron_down.svg";
import MoonIcon from "../../public/moon.svg";
import SystemIcon from "../../public/system.svg";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        rightIcon={<ChevronDownIcon />}
        border="0.5px solid #7E8489"
        iconSpacing="3"
        paddingX={"15px"}
      >
        <Stack direction="row" h="40px" align="center">
          <Text textTransform="capitalize">{colorMode}</Text>
          <Divider orientation="vertical" borderColor="#7E8489" />
        </Stack>
      </MenuButton>
      <MenuList p={0} minW="0" w={"135px"}>
        <MenuItem
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={() => toggleColorMode()}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </MenuItem>

        {/* <MenuItem icon={<SystemIcon />}>System</MenuItem> */}
      </MenuList>
    </Menu>
  );
};

export default ThemeSwitcher;
