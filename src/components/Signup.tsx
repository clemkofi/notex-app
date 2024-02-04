"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const Signup = () => {
  const colspan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} mb={5}>
      <Stack align={"center"} mb={5}>
        <Heading fontSize={"4xl"}>NoteX Registrieren</Heading>
        <Text>
          Haben Sie bereits ein Konto?{" "}
          <Link color={"gray.400"} href="/login">
            Hier anmelden.
          </Link>
        </Text>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colspan}>
            <FormControl>
              <FormLabel>Vorname</FormLabel>
              <Input placeholder="Irena" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colspan}>
            <FormControl>
              <FormLabel>Nachname</FormLabel>
              <Input placeholder="Schwager" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>E-Mail Adresse</FormLabel>
              <Input placeholder="E-Mail-Adresse*" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="password">
              <FormLabel>Passwort</FormLabel>
              <Input type="password" placeholder="Passwort*" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="wiederpassword">
              <FormLabel>Passwort wiederholen</FormLabel>
              <Input type="password" placeholder="Passwort wiederholen*" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button colorScheme="brand" size="lg" w="full">
              Registrierung abschließen
            </Button>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default Signup;
