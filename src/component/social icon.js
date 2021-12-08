import React from 'react'

import { IoLogoLinkedin } from "react-icons/io5"
import { IconButton } from '@chakra-ui/button';
// import { PseudoBox } from "@chakra-ui/core"
import { VStack, Flex , Spacer,Link,Box, } from "@chakra-ui/layout";

import { VscGithub, VscTwitter } from "react-icons/vsc"
import {
 
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaInstagramSquare
} from "react-icons/fa";
 const SocialLinks  = () => {
  return (
<VStack p={5}>
  <Box>

       
  <Flex  direction="row">

  <Flex  justifyContent="space-between"ml={10}   _hover={{
    background: "white",
    color: "#6CC644",
  }} transition="0.3s ease-in-out">

  <Link href="https://github.com/Artemis6161" target="_blank">
<VscGithub size="100px"/> 

</Link>
</Flex>
<Flex  justifyContent="space-between"ml={10}  _hover={{
    background: "white",
    color: "#0e76a8",
  }} transition="0.3s ease-in-out">

<Link href="https://www.linkedin.com/in/sangeetha-rj-283106198/" target="_blank">
<IoLogoLinkedin size="100px" />
</Link>
</Flex>


<Flex  justifyContent="space-between"ml={10}  _hover={{
    background: "white",
    color: "#E4405F",
  }}     transition="0.3s ease-in-out">
<Link href="https://www.instagram.com/spiceitupwithsan61/" target="_blank">
<FaInstagramSquare size="100px" />
</Link>
</Flex>
</Flex>


</Box>
</VStack>
  )
 }

export default SocialLinks
