"use client";

import theme from "@/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
