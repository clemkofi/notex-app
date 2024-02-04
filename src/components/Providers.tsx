"use client";

import theme from "@/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default Providers;
