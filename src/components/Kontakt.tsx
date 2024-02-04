"use client";

import { Flex } from "@chakra-ui/react";
import KontaktForm from "./KontaktForm";
import KontaktInfo from "./KontaktInfo";

const Kontakt = () => {
  return (
    <Flex
      h={{ base: "auto", md: "100vh" }}
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <KontaktInfo />
      <KontaktForm />
    </Flex>
  );
};

export default Kontakt;
