import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import style from "./text-contents.module.css";

const TextContent = () => {
  return (
    <Box
      maxWidth={{ base: "full", lg: "591px" }}
      paddingTop={{ base: "0", lg: "32px" }}
    >
      <Heading as="h1" fontSize="56px" lineHeight="65.63px">
        See Dash in action.
      </Heading>
      <Text
        fontSize="27px"
        fontWeight="700"
        marginTop="15px"
        lineHeight="32.81px"
      >
        Thank you for your interest in Dash Enterprise. We&apos;ll be in touch
        soon to schedule a demo.
      </Text>
      <UnorderedList
        spacing={30}
        marginTop="26px"
        fontSize="1.125rem"
        color="#7E8489"
      >
        <ListItem className={style.list}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ListItem>
        <ListItem className={style.list}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </ListItem>
        <ListItem className={style.list}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default TextContent;
