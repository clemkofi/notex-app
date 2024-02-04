"use client";

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const KontaktForm = () => {
  const colspan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      {/* to apply a different spacing to the text and heading we have to put them into their own VStack */}
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Ihre Nachricht</Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Name eingeben*</FormLabel>
            <Input placeholder="Irena Schwager" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Telefonnummer eingeben</FormLabel>
            <Input placeholder="+43 000 000 0000" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>E-Mail Adresse*</FormLabel>
            <Input placeholder="E-Mail-Adresse*" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Nachricht eingeben*</FormLabel>
            <Textarea placeholder="Schreiben Sie hier Ihre Nachricht" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme="brand" size="lg" w="full">
            Absenden
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default KontaktForm;
