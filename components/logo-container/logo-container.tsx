import Image from "next/image";
import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";

const logoData = [
  {
    src: "/colgate_logo.png",
    alt: "Colgate",
    w: ["125.02px", "99.75px"],
    h: ["33.86px", "27.02px"],
  },
  {
    src: "/nvidia_logo.png",
    alt: "Nvidia",
    w: ["155.37px", "123.96px"],
    h: ["28.02px", "22.36px"],
  },
  {
    src: "/kc_logo.png",
    alt: "KC",
    w: ["103.17px", "82.32px"],
    h: ["64.22px", "51.24px"],
  },
  {
    src: "/jazz_logo.png",
    alt: "Utah Jazz",
    w: ["108.03px", "86.19px"],
    h: ["49.04px", "39.13px"],
  },
  {
    src: "/tmobile_logo.png",
    alt: "T Mobile",
    w: ["162.65px", "129.77px"],
    h: ["39.7px", "31.68px"],
  },
  {
    src: "/tva_logo.png",
    alt: "TVA",
    w: ["66.76px", "53.27px"],
    h: ["63.06px", "50.31px"],
  },
];

const LogoContainer = () => {
  return (
    <Grid
      px={{ base: "96px", lg: "0" }}
      templateColumns="repeat(3, 1fr)"
      justifyItems="center"
      alignItems="center"
      gridAutoRows="min-content"
      gap="56px"
    >
      {logoData.map(({ src, alt, w, h }, index) => {
        return (
          <GridItem key={index}>
            <Box
              position="relative"
              width={{ base: w[0], lg: w[1] }}
              height={{ base: h[0], lg: h[1] }}
            >
              <Image layout="fill" objectFit="contain" src={src} alt={alt} />
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default LogoContainer;
