import { addClass, getlastThreeClasses } from "@/server/data-layer/classes";
import { CircleColors } from "@/theme/circleColors";
import {
  Box,
  Button,
  Center,
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
import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

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

export const ClassView = () => {
  const { data, mutateAsync, isLoading, isPending } = useClassesData();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [class_name, setClassName] = useState("");
  const [classColor, setClassColor] = useState("");

  const [uploading, setUploading] = useState(false);

  const handleColorButtonClick = (color: string) => {
    setClassColor(color);
  };

  const handleSubmit = async () => {
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
        <div>
          {data && data.length == 0 ? (
            <Box m="60px">
              <Center>
                <Text fontSize={"20px"} color="gray.300">
                  Noch keine Klassen
                </Text>
              </Center>
            </Box>
          ) : (
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
              gap="20px"
              mb="60px"
            >
              {data?.map((classInfo) => (
                <Box
                  key={classInfo.id}
                  _hover={{ cursor: "pointer" }}
                  color="white"
                  bg={classInfo.color}
                  w="200px"
                  h="200px"
                  borderRadius={"50%"}
                >
                  <Center top={0} left={0} w={"100%"} h={"100%"}>
                    <Text fontSize={"50px"} fontWeight="bold" color={"white"}>
                      {classInfo.name}
                    </Text>
                  </Center>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </div>
      )}

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

export default ClassView;
