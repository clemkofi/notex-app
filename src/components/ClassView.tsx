import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const ClassView = (props: {
  data: {
    id: string;
    name: string;
    color: string;
    ownerId: string;
  }[];
}) => {
  return (
    <div>
      {props.data && props.data.length == 0 ? (
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
          {props.data?.map((classInfo) => (
            <Box
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
  );
};

export default ClassView;
