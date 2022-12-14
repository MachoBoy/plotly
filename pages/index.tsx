import type { NextPage } from "next";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";

import Header from "../components/header/header";
import TextContent from "../components/text-contents/text-contents";
import Form from "../components/form/form";
import LogoContainer from "../components/logo-container/logo-container";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>plotly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          px="38px"
          pt="87px"
          pb="167px"
          maxWidth="1218px"
          minWidth="675px"
          mx="auto"
        >
          <Box w="100%" mx="auto">
            <Box marginBottom="100px" px={{ base: "96px", lg: "0" }}>
              <Header></Header>
            </Box>

            <Flex
              position="relative"
              px={{ base: "96px", lg: "0" }}
              zIndex={1}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box maxWidth={{ base: "full" }}>
                <TextContent />
              </Box>
              <Box width="100%" maxWidth={{ base: "full", lg: "530px" }}>
                <Box
                  marginLeft={{ base: "0", lg: "27px" }}
                  position={{ base: "relative", lg: "absolute" }}
                  right={{ lg: 0 }}
                  top={{ lg: 0 }}
                  maxWidth={{ base: "full", lg: "530px" }}
                >
                  <Form />
                </Box>
              </Box>
            </Flex>

            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              position="relative"
            >
              <Box
                width="100%"
                maxWidth={{ base: "full", lg: "675px" }}
                marginTop={{ base: "-40px", lg: "26px" }}
              >
                <Image
                  src="/calender.png"
                  layout="responsive"
                  width={675}
                  height={471}
                  alt="calender"
                />
              </Box>
              <Flex
                paddingBottom={{ base: "0", lg: "30px" }}
                alignItems="flex-end"
                maxWidth={{ base: "full", lg: "430px" }}
                marginTop="82.84px"
                marginLeft={{ base: "0", lg: "37px" }}
              >
                <LogoContainer />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Home;
