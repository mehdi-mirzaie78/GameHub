import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="60px" rounded="5px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
