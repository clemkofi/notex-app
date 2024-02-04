"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "@chakra-ui/next-js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const handleSubmit = () => {
    console.log("Login Pressed");
  };

  return (
    <div>
      <div>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} mb={5}>
          <Stack align={"center"} mb={5}>
            <Heading fontSize={"4xl"}>NoteX Login</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>E-Mail Adresse</FormLabel>
                <Input
                  type="email"
                  placeholder="E-Mail-Adresse*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Passwort</FormLabel>
                <Input
                  type="password"
                  placeholder="Passwort*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Eingeloggt bleiben</Checkbox>
                  {/* <Link href="/" color={"blue.400"}>
                    Forgot password?
                  </Link> */}
                </Stack>
                {/* <Flex style={{gap:"15px", justifyContent:"center", alignItems:"center", borderTop:"1px solid #c8cfca", borderBottom:"1px solid #c8cfca", padding:"0.5rem", width:"80%", margin:"auto", marginTop:"4rem"}}>
                  <Text>Login via</Text>
                  <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" width="37px"/>
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="facebook" width="37px"/>
                  <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="apple" width="37px"/>
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="microsoft" width="37px"/>
                </Flex> */}
                <Button colorScheme="brand" onClick={handleSubmit}>
                  Loslegen
                </Button>
              </Stack>
              <Stack pt={2}>
                <Text align={"center"}>
                  <Link color={"gray.400"} href="/registrieren">
                    Noch kein Konto?
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
