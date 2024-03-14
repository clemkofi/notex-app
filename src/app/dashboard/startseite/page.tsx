"use client";

import ComplexTable from "@/components/ComplexTable";
import MiniCalendar from "@/components/calendar/MiniCalendar";
import { HSeparator } from "@/components/separator/Separator";
import { CircleColors } from "@/theme/circleColors";
import { RowObj } from "@/types/sharedTypes";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const tableDataComplex: RowObj[] = [
  {
    subjectPre: {
      name: "DLS",
      color: "#FE8892",
    },
    assessmentType: "Wörterübung",
    class_name: {
      name: "1a",
      color: "#DACFC5",
    },
    date: "12.01.2024",
  },
  {
    subjectPre: {
      name: "SU",
      color: "#C5E2A7",
    },
    assessmentType: "Lernzielkontrolle",
    class_name: {
      name: "1a",
      color: "#DACFC5",
    },
    date: "28.02.2024",
  },
  {
    subjectPre: {
      name: "M",
      color: "#BCDCFB",
    },
    assessmentType: "Schularbeit",
    class_name: {
      name: "2b",
      color: "#DACFC5",
    },
    date: "13.03.2024",
  },
  {
    subjectPre: {
      name: "DLS",
      color: "#FE8892",
    },
    assessmentType: "Wörterübung",
    class_name: {
      name: "2b",
      color: "#DACFC5",
    },
    date: "24.03.2024",
  },
];

const page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [class_name, setClassName] = useState("");
  const [classColor, setClassColor] = useState("");

  const handleSubmit = () => {
    console.log("Login Pressed");
  };

  return (
    <>
      <Box pt={{ base: "50px", md: "80px", xl: "80px" }}>
        <Box h="131px" w="100%">
          <Center>
            <Text
              color={"brand.700"}
              fontWeight="bold"
              fontSize="60px"
              mt="10px"
            >
              Hallo Irena!
            </Text>
          </Center>
        </Box>

        <Box mx="40px">
          <HSeparator mb="20px" />
        </Box>

        <Box w="100%" mb="20px">
          <HStack justify="space-between" align="center">
            <Text fontWeight="bold" fontSize="xl" mt="10px">
              Meine Klassenübersicht
            </Text>

            <Button
              colorScheme="brand"
              fontWeight="500"
              onClick={() => {
                onOpen();
              }}
            >
              Klasse hinzufügen +
            </Button>
          </HStack>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
          gap="20px"
          mb="60px"
        >
          <Box
            _hover={{ cursor: "pointer" }}
            color="white"
            bg="#11047A"
            w="200px"
            h="200px"
            borderRadius={"50%"}
          >
            <Center top={0} left={0} w={"100%"} h={"100%"}>
              <Text fontSize={"50px"} fontWeight="bold" color={"white"}>
                1a
              </Text>
            </Center>
          </Box>
          <Box
            _hover={{ cursor: "pointer" }}
            color="white"
            bg="#11047A"
            w="200px"
            h="200px"
            borderRadius={"50%"}
          >
            <Center top={0} left={0} w={"100%"} h={"100%"}>
              <Text fontSize={"50px"} fontWeight="bold" color={"white"}>
                1a
              </Text>
            </Center>
          </Box>
          <Box
            _hover={{ cursor: "pointer" }}
            color="white"
            bg="#11047A"
            w="200px"
            h="200px"
            borderRadius={"50%"}
          >
            <Center top={0} left={0} w={"100%"} h={"100%"}>
              <Text fontSize={"50px"} fontWeight="bold" color={"white"}>
                1a
              </Text>
            </Center>
          </Box>
        </SimpleGrid>

        <Box mx="40px">
          <HSeparator mb="20px" />
        </Box>

        <Box w="100%" mb="20px">
          <HStack justify="space-between" align="center">
            <Text fontWeight="bold" fontSize="xl" mt="10px">
              Nächste Termine
            </Text>
          </HStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap="20px" mb="20px">
          <ComplexTable tableData={tableDataComplex} />
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
        </SimpleGrid>
      </Box>

      {/* modal for adding new subject */}
      <Modal
        isCentered
        isOpen={isOpen}
        size="2xl"
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Klasse hinzufügen</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl
                id="class_name"
                isRequired
                display="flex"
                alignItems="center"
              >
                <FormLabel>Klassenkürzel:</FormLabel>
                <Input
                  type="text"
                  placeholder="Kürzel eingeben"
                  value={class_name}
                  onChange={(e) => setClassName(e.target.value)}
                  maxLength={3}
                />
              </FormControl>

              <Center>
                <Text fontSize="xl" mt="10px">
                  Farbe wählen
                </Text>
              </Center>

              <SimpleGrid
                columns={{ base: 2, md: 2, lg: 5, "2xl": 6 }}
                gap="20px"
                mb="60px"
                h={{ sm: "200px", md: "100%" }}
                overflowX={{ sm: "scroll", xl: "hidden" }}
              >
                {CircleColors.map((circleColor, i) => (
                  <Button
                    key={i}
                    bg={circleColor}
                    w="100px"
                    h="100px"
                    borderRadius={"50%"}
                  ></Button>
                ))}
              </SimpleGrid>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" onClick={handleSubmit}>
              +
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default page;
