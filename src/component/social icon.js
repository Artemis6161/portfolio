import React from 'react'
import { IconButton } from '@chakra-ui/button';
import { VStack, Flex , Spacer} from "@chakra-ui/layout";
import {
 
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const SocialIcon = () => {
  return (
    <div>
         <VStack p={10}>
<Flex w= "100%">


  <Spacer />
 
<IconButton icon={<FaLinkedin/>}isRound='true' onClick={() => window.open("https://www.linkedin.com/in/sangeetha-rj-283106198/")} boxSize={50}/>

<IconButton ml={8} icon={<FaGithub/>} isRound='true' onClick={() => window.open("https://github.com/Artemis6161")} boxSize={50}/>

<IconButton ml={8} icon={<FaInstagram/>}isRound='true' onClick={() => window.open("https://www.instagram.com/spiceitupwithsan61/")} boxSize={50}/>


</Flex>


</VStack>
      




    </div>
  )
}

export default SocialIcon;
