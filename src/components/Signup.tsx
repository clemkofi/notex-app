"use client";

import { addProfile } from "@/server/data-layer/profiles";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
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
  useToast,
} from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

import * as Yup from "yup";

interface SignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const colspan = useBreakpointValue({ base: 2, md: 1 });
  const toast = useToast();

  const [submitLoading, SetSubmitLoading] = useState(false);

  // schema validate signup input
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Zu kurz")
      .max(50, "Geben Sie einen kürzeren Namen an")
      .required("Erforderlich"),
    lastName: Yup.string()
      .min(2, "Zu kurz")
      .max(50, "Geben Sie einen kürzeren Namen an")
      .required("Erforderlich"),
    email: Yup.string()
      .required("Erforderlich")
      .email("E-Mail muss eine gültige E-Mail sein"),
    password: Yup.string().required("Erforderlich").min(6),
    confirmPassword: Yup.string()
      .test(
        "passwords-match",
        "Passwörter müssen übereinstimmen",
        function (value) {
          return this.parent.password === value;
        }
      )
      .required("Erforderlich"),
  });

  // function to handle the sign up process to supabase
  const handleSignUp = async (signUpValues: SignUpValues) => {
    const authUser = await supabase.auth.signUp({
      email: signUpValues.email,
      password: signUpValues.password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (authUser.data && authUser.data.user) {
      if (
        authUser.data.user.identities &&
        authUser.data.user.identities?.length > 0
      ) {
        await addProfile({
          id: authUser.data.user.id,
          firstName: signUpValues.firstName,
          lastName: signUpValues.lastName,
        });

        toast({
          title: "Konto erstellt",
          description: "Bestätigen Sie Ihre E-Mail-Adresse für die Anmeldung.",
          status: "success",
          duration: 18000,
          isClosable: true,
        });

        router.refresh();
      } else {
        toast({
          title: "Fehler",
          description: `Die E-Mail-Adresse ist bereits vergeben.`,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Fehler",
        description: `Bei der Anmeldung ist ein Fehler aufgetreten. Versuchen Sie es nach ein paar Minuten erneut.`,
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

  const initialSignUpValues: SignUpValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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
        <Formik
          initialValues={initialSignUpValues}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            SetSubmitLoading(true);
            // same shape as initial values
            console.log(values);
            handleSignUp(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={colspan}>
                  <FormControl
                    isInvalid={!!errors.firstName && touched.firstName}
                  >
                    <FormLabel>Vorname</FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      type="firstName"
                      placeholder="Irena"
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colspan}>
                  <FormControl
                    isInvalid={!!errors.lastName && touched.lastName}
                  >
                    <FormLabel>Nachname</FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      type="lastName"
                      placeholder="Schwager"
                    />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
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
                </GridItem>
                <GridItem colSpan={2}>
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
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl
                    isInvalid={
                      !!errors.confirmPassword && touched.confirmPassword
                    }
                  >
                    <FormLabel>Passwort wiederholen</FormLabel>
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Passwort wiederholen*"
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <Button
                    type="submit"
                    colorScheme="brand"
                    size="lg"
                    w="full"
                    isLoading={submitLoading}
                  >
                    Registrierung abschließen
                  </Button>
                </GridItem>
              </SimpleGrid>
            </Form>
          )}
        </Formik>
      </Box>
    </Stack>
  );
};

export default Signup;
