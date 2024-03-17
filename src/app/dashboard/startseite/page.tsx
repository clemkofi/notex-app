"use client";

import ClassView from "@/components/ClassView";
import ComplexTable from "@/components/ComplexTable";
import MiniCalendar from "@/components/calendar/MiniCalendar";
import { HSeparator } from "@/components/separator/Separator";
import { addClass, getlastThreeClasses } from "@/server/data-layer/classes";
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
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Upload from "rc-upload";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

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

function useClassesData() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: () => getlastThreeClasses(),
  });

  const { mutateAsync, isError, isSuccess, isPending } = useMutation({
    mutationFn: (classInfo: { name: string; color: string }) =>
      addClass(classInfo),
    onSuccess: () => refetch(),
  });

  return { data, mutateAsync, isLoading, isPending };
}

const page = () => {
  const { data, mutateAsync, isLoading, isPending } = useClassesData();

  console.log({ data });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [class_name, setClassName] = useState("");
  const [classColor, setClassColor] = useState("");

  const [uploading, setUploading] = useState(false);

  const handleColorButtonClick = (color: string) => {
    setClassColor(color);
  };

  const handleSubmit = async () => {
    console.log("submit Pressed");
    try {
      const classAdded = await mutateAsync({
        name: class_name,
        color: classColor,
      });
      onClose();
    } catch (error) {
      console.log("error occured");
    }
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

        {/* loading state for classes */}
        {isLoading ? (
          <Box mb="60px">
            <Center>
              <Spinner />
            </Center>
          </Box>
        ) : (
          <ClassView data={data!} />
        )}

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
                gridTemplateRows="min-content"
                gap="10px"
                mb="60px"
                h={{ sm: "200px", md: "100%" }}
                overflowX={{ sm: "scroll", xl: "hidden" }}
              >
                {CircleColors.map((circleColor, i) => (
                  <Button
                    key={i}
                    variant="solid"
                    bg={circleColor}
                    w="100px"
                    h="100px"
                    borderRadius={"50%"}
                    border={
                      circleColor === classColor ? "2px solid gray" : "none"
                    }
                    onClick={() => handleColorButtonClick(circleColor)}
                  ></Button>
                ))}
              </SimpleGrid>

              <FormControl mb="3">
                <FormLabel>Schüler-/innen hinzufügen</FormLabel>
                <Input type="file" display="none" />
                <Upload
                  name="file"
                  onProgress={({ percent }) => {
                    setUploading(true);
                    if (percent === 100) {
                      setUploading(false);
                    }
                  }}
                  onSuccess={(response, file) => {
                    const { name, size, type, lastModified } = file;
                    const images = [
                      {
                        name,
                        size,
                        type,
                        lastModified,
                        url: response.url,
                      },
                    ];

                    console.log({ file });

                    // setValue("images", images);
                  }}
                  // action={`${apiUrl}/media/upload`}
                >
                  <Box
                    p="4"
                    bg="gray.100"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    {uploading ? (
                      <span>The file is uploading...</span>
                    ) : (
                      <>
                        <Icon
                          as={FiUploadCloud}
                          w={8}
                          h={8}
                          mb="3"
                          color="gray.600"
                        />
                        <Text color="gray.700" fontWeight="semibold">
                          Klicken oder ziehen Sie zum Hochladen
                        </Text>
                      </>
                    )}
                  </Box>
                </Upload>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" onClick={handleSubmit}>
              {isPending ? <Spinner /> : <span>+</span>}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default page;
