import React from 'react'

import { IoLogoLinkedin } from "react-icons/io5"
import { IconButton } from '@chakra-ui/button';
// import { PseudoBox } from "@chakra-ui/core"
import { VStack, Flex , Spacer,Link,Box, } from "@chakra-ui/layout";
import { CPseudoBox } from '@chakra-ui/vue'
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

  <Flex  justifyContent="space-between"ml={10} >

  <Link href="mailto:Sangeetharajan112@gmail.com" target="_blank">
<VscGithub size="100px"/> 

</Link>
</Flex>
<Flex  justifyContent="space-between"ml={10} >
<PseudoBox
    as="button"
    bg="teal.500"
    py={2}
    px={4}
    ml={3}
    rounded="md"
    fontWeight="semibold"
    color="white"
    _hover={{ bg: "teal.600" }}
    _focus={{ boxShadow: "outline" }}
  >
<Link href="mailto:Sangeetharajan112@gmail.com" target="_blank">
<IoLogoLinkedin size="100px" />
</Link>
</PseudoBox>
</Flex>


<Flex  justifyContent="space-between"ml={10} >
<Link href="https://www.instagram.com/spiceitupwithsan61/" target="_blank">
<FaInstagramSquare size="100px"/>
</Link>
</Flex>
</Flex>


</Box>
</VStack>
  )
 }

export default SocialLinks
