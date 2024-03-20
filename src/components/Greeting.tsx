"use client";

import { getCurrentUserProfile } from "@/server/data-layer/profiles";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

function useProfileData() {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getCurrentUserProfile(),
  });

  return { data };
}

const Greeting = () => {
  const { data } = useProfileData();

  //   if (isLoading) {
  //     return (
  //       <Box mb="60px">
  //         <Center>
  //           <Spinner />
  //         </Center>
  //       </Box>
  //     );
  //   }

  return (
    <Box h="131px" w="100%">
      <Center>
        <Text color={"brand.700"} fontWeight="bold" fontSize="60px" mt="10px">
          Hallo {data![0].firstName}!
        </Text>
      </Center>
    </Box>
  );
};

export default Greeting;
