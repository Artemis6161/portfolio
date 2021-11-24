import React from 'react';
import "./App.css";
import Header from "./component/Header";
    import { IconButton } from '@chakra-ui/button';
    import{useColorMode} from "@chakra-ui/color-mode"
import { VStack, Flex , Heading, Spacer} from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function App() {
  const {colorMode,toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
   <VStack p={5}>
<Flex w= "100%">
  <Heading ml="8" size="md"fontweight='semibold' color="cyan.400" >Sangeetha Rajan</Heading>

  <Spacer />
<IconButton icon={<FaLinkedin/>}isRound='true' onClick={() => window.open("https://www.linkedin.com/in/sangeetha-rj-283106198/")}/>

<IconButton ml={2} icon={<FaGithub/>} isRound='true' onClick={() => window.open("https://github.com/Artemis6161")}/>

<IconButton ml={2} icon={<FaInstagram/>}isRound='true' onClick={() => window.open("https://www.instagram.com/spiceitupwithsan61/")}/>

<IconButton ml={8} icon={ isDark? <FaSun/> : <FaMoon />}isRound='true' onClick={toggleColorMode}/>
</Flex>
<Header />
</VStack>
  );
}

export default App;