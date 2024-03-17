import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <HStack padding=".2rem">
      <Image src={logo} boxSize="60px" rounded="5px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
