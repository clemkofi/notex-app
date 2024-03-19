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
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "@chakra-ui/next-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

interface SignInValues {
  email: string;
  password: string;
}

export default function Login() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitLoading, SetSubmitLoading] = useState(false);

  const toast = useToast();

  // schema validate signup input
  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .required("Erforderlich")
      .email("E-Mail muss eine gültige E-Mail sein"),
    password: Yup.string().required("Erforderlich").min(6),
  });

  const handleSignIn = async (signInValues: SignInValues) => {
    const authUser = await supabase.auth.signInWithPassword({
      email: signInValues.email,
      password: signInValues.password,
    });

    if (authUser.data && authUser.data.user) {
      if (
        authUser.data.user.identities &&
        authUser.data.user.identities?.length > 0
      ) {
        toast({
          title: "Anmeldung erfolgreich",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        router.refresh();
        router.push("/dashboard/startseite");
      } else {
        toast({
          title: "Fehler",
          description: `Fehler bei Benutzername und Passwort.`,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Fehler",
        description: `Fehler bei Benutzername und Passwort.`,
        status: "error",
        isClosable: true,
      });

      console.error(
        "An error occurred during sign-up:",
        authUser.error?.message
      );
    }

    SetSubmitLoading(false);
  };

  const initialSignInValues: SignInValues = {
    email: "",
    password: "",
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
            <Formik
              initialValues={initialSignInValues}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                SetSubmitLoading(true);
                // same shape as initial values
                console.log(values);
                handleSignIn(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Stack spacing={4}>
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel>E-Mail Adresse</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-Mail-Adresse*"
                      />

                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel>Passwort</FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Passwort*"
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
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
                      <Button
                        colorScheme="brand"
                        type="submit"
                        isLoading={submitLoading}
                      >
                        Loslegen
                      </Button>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>

            <Stack pt={2}>
              <Text align={"center"}>
                <Link color={"gray.400"} href="/registrieren">
                  Noch kein Konto?
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </div>
    </div>
  );
}
