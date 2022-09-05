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
      paddingBottom="40px"
      boxShadow={formBoxShadow}
      width="100%"
    >
      <FormControl>
        <RadioGroup defaultValue="professional">
          <HStack spacing={35}>
            <Radio value="professional">
              <Text as="b">Professional</Text>
            </Radio>
            <Radio value="student">
              <Text as="b">Student</Text>
            </Radio>
          </HStack>
        </RadioGroup>

        <Grid
          marginTop="33px"
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={{ base: "20px", lg: "31px" }}
        >
          <GridItem>
            <FormLabel color="#7E8489">First name*</FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489">Last name*</FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489">Business Email*</FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489">Phone*</FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489">Company Name*</FormLabel>
            <Input />
          </GridItem>
          <GridItem>
            <FormLabel color="#7E8489">Title*</FormLabel>
            <Input />
          </GridItem>
        </Grid>
        <Box marginTop={{ base: "20px", lg: "31px" }}>
          <FormLabel color="#7E8489">Tell us about your project*</FormLabel>
          <Textarea />
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
          <FormLabel color="#7E8489">*required</FormLabel>
        </HStack>
      </FormControl>
    </Box>
  );
};

export default Form;
