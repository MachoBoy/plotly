import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  Input,
  Textarea,
  Button,
  Grid,
  GridItem,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const Form = () => {
  const formBg = useColorModeValue("#fff", "#1E1E1E");
  const formBoxShadow = useColorModeValue(
    "4px 8px 18px rgba(217, 217, 217, 0.25)",
    "none"
  );
  return (
    <Box
      backgroundColor={formBg}
      marginTop="30px"
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      paddingX="52px"
      paddingTop="56px"
      paddingBottom={{ base: "40px", lg: "61px" }}
      boxShadow={formBoxShadow}
      width="100%"
    >
      <FormControl>
        <RadioGroup defaultValue="professional">
          <HStack spacing={35}>
            <Radio
              value="professional"
              _checked={{
                bg: "#7A76FF",
                color: "white",
                borderColor: "#7A76FF",
              }}
            >
              <Text as="b">Professional</Text>
            </Radio>
            <Radio
              value="student"
              _checked={{
                bg: "#7A76FF",
                color: "white",
                borderColor: "#7A76FF",
              }}
            >
              <Text as="b">Student</Text>
            </Radio>
          </HStack>
        </RadioGroup>

        <Grid
          marginTop="33px"
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={{ base: "20px", lg: "20px" }}
        >
          <GridItem>
            <FormLabel color="#7E8489" marginBottom="0" fontSize="14px">
              First name*
            </FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489" marginBottom="0" fontSize="14px">
              Last name*
            </FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489" marginBottom="0" fontSize="14px">
              Business Email*
            </FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489" marginBottom="0" fontSize="14px">
              Phone*
            </FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489" marginBottom="0" fontSize="14px">
              Company Name*
            </FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489" marginBottom="0" fontSize="14px">
              Title*
            </FormLabel>
            <Input />
          </GridItem>
        </Grid>
        <Box marginTop={{ base: "20px", lg: "31px" }}>
          <FormLabel color="#7E8489" marginBottom="0" fontSize="14px">
            Tell us about your project*
          </FormLabel>
          <Textarea height="122px" />
        </Box>
        <HStack marginTop={{ base: "20px", lg: "27px" }}>
          <Button
            width="103px"
            height="44px"
            background="#7A76FF"
            variant="solid"
            letterSpacing="0.15em"
            mr="19px"
            color="#fff"
          >
            SEND
          </Button>
          <FormLabel color="#7E8489" fontSize="14px">
            *required
          </FormLabel>
        </HStack>
      </FormControl>
    </Box>
  );
};

export default Form;
