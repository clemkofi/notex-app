"use client";
// Chakra Imports
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom Components
import { SearchBar } from "@/components/navbar/searchBar/SearchBar";
import { SidebarResponsive } from "@/components/sidebar/Sidebar";
// Assets
import navImage from "../../assets/logo.png";
import { FaEthereum } from "react-icons/fa";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdInfoOutline, MdNotificationsNone } from "react-icons/md";
import routes from "@/utils/routes";
import { ItemContent } from "../menu/ItemContent";
import { usePathname, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useQuery } from "@tanstack/react-query";
import {
  getCurrentUserProfile,
  getProfiles,
} from "@/server/data-layer/profiles";

function useProfileData() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getCurrentUserProfile(),
  });

  return { data, isLoading };
}

export default function HeaderLinks(props: {
  secondary: boolean;
  onOpen: boolean | any;
  fixed: boolean | any;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClientComponentClient();

  const { secondary } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  const navbarIcon = useColorModeValue("gray.400", "white");
  let menuBg = useColorModeValue("white", "navy.800");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.700", "brand.400");
  const ethColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#E6ECFA", "rgba(135, 140, 189, 0.3)");
  const ethBg = useColorModeValue("secondaryGray.300", "navy.900");
  const ethBox = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  const borderButton = useColorModeValue("secondaryGray.500", "whiteAlpha.200");

  const { data, isLoading } = useProfileData();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.history.replaceState(null, "", pathname);
    router.push("/dashboard");
    router.refresh();
  };

  const getCurrentUser = async () => {
    console.log("user => ", await supabase.auth.getUser());
  };

  getCurrentUser();

  return (
    <Flex
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      flexWrap={secondary ? { base: "wrap", md: "nowrap" } : "unset"}
      p="10px"
      borderRadius="30px"
      boxShadow={shadow}
    >
      <SearchBar
        mb={() => {
          if (secondary) {
            return { base: "10px", md: "unset" };
          }
          return "unset";
        }}
        me="10px"
        borderRadius="30px"
      />
      <SidebarResponsive routes={routes} />

      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={toggleColorMode}
      >
        <Icon
          me="10px"
          h="18px"
          w="18px"
          color={navbarIcon}
          as={colorMode === "light" ? IoMdMoon : IoMdSunny}
        />
      </Button>
      <Menu>
        <MenuButton p="0px" style={{ position: "relative" }}>
          <Box
            _hover={{ cursor: "pointer" }}
            color="white"
            bg="#11047A"
            w="40px"
            h="40px"
            borderRadius={"50%"}
          />
          <Center top={0} left={0} position={"absolute"} w={"100%"} h={"100%"}>
            <Text fontSize={"xs"} fontWeight="bold" color={"white"}>
              AP
            </Text>
          </Center>
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="0px"
          mt="10px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
        >
          <Flex w="100%" mb="0px">
            <Text
              ps="20px"
              pt="16px"
              pb="10px"
              w="100%"
              borderBottom="1px solid"
              borderColor={borderColor}
              fontSize="sm"
              fontWeight="700"
              color={textColor}
            >
              👋&nbsp; Hey, Clement
            </Text>
          </Flex>
          <Flex flexDirection="column" p="10px">
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              borderRadius="8px"
              px="14px"
              onClick={(e) => {
                e.preventDefault();
                console.log("Mein Konto");
              }}
            >
              <Text fontSize="sm">Mein Konto</Text>
            </MenuItem>
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              borderRadius="8px"
              px="14px"
              onClick={(e) => {
                e.preventDefault();
                console.log("Einstellungen");
              }}
            >
              <Text fontSize="sm">Einstellungen</Text>
            </MenuItem>
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              color="red.400"
              borderRadius="8px"
              px="14px"
              onClick={handleSignOut}
            >
              <Text fontSize="sm">Log out</Text>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}
