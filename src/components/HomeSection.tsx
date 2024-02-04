"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import homeImage from "../assets/home_image.png";
import MaxWidthWrapper from "./MaxWidthWrapper";

const HomeSection = () => {
  return (
    <MaxWidthWrapper>
      <SimpleGrid
        columns={[1, 1, 2, 2, 2, 2]}
        spacing={[5, 5, 5, 5, 5, 5]}
        mt={20}
      >
        <VStack spacing={10} alignItems="center">
          <Box
            display="flex"
            alignItems="flex-start"
            // justifyContent="center"
            w="80%"
            // mx={2}
          >
            <Heading as="h2" size="2xl">
              Der effiziente{" "}
              <Heading as="span" size="2xl" color="#A3C185">
                Notenplaner{" "}
              </Heading>
              für Lehrer/innen
            </Heading>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            // justifyContent="center"
            w="80%"
            // mx={14}
            flexDirection="column"
          >
            <Text fontSize="2xl" mt={2}>
              Stärken Sie Ihren Unterricht mit Präzision und Effizienz: Die
              bewährte Bewertungsanwendung für Pädagogen
            </Text>
            {/* <Text fontSize="md">
            Stärken Sie Ihren Unterricht mit Präzision und Effizienz: Die
            bewährte Bewertungsanwendung für Pädagogen
          </Text> */}
            <Link href="/" w="full">
              <Button colorScheme="brand" w="full" size="lg" mt={20} mb={10}>
                Login
              </Button>
            </Link>
          </Box>
        </VStack>
        <Box height="auto">
          <Image src={homeImage.src} alt="running" h="80%" m="auto" />
        </Box>
      </SimpleGrid>
    </MaxWidthWrapper>
  );
};

export default HomeSection;
