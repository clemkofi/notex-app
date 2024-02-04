import {
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
  AspectRatio,
  Stack,
  Divider,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import logo from "../assets/logo.png";

const KontaktInfo = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Kontakt</Heading>
        <HStack spacing={6} alignItems="center" w="full" my={20}>
          <AspectRatio ratio={1.5} w={28}>
            <Image src={logo.src} alt="logo" />
          </AspectRatio>
          <Stack
            spacing={0}
            w="full"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack w="full" spacing={0} alignItems="flex-start">
              <Heading size="md">NoteX</Heading>
              <Text color={secondaryTextColor}>©2023</Text>
            </VStack>
          </Stack>
        </HStack>
        <Text>
          Bei Fragen oder Anregungen können Sie uns anrufen oder per Formular
          anschreiben.
        </Text>
      </VStack>

      <Divider />

      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Irena und Sandro Schwager</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Tel.: +43(0) 6642159570</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>E-Mail: schwager94@gmail.com</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default KontaktInfo;
