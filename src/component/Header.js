import React from 'react'
import Image1 from './img/009 a.jpg';
import Sa from './sange.pdf';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import {Image} from '@chakra-ui/image';
import {Circle,Stack,Flex,Box,Text} from "@chakra-ui/layout";
import { chakra,Badge,LinkOverlay,Tag,Link} from "@chakra-ui/react"
import {useMediaQuery} from '@chakra-ui/media-query';


const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
   

  return (
   <Stack>
     {isNotSmallerScreen && (
 <Circle
 position="absolute"
 bg="blue.100" 
 opacity="0.1"
 w="300px"
 h="300px"
 alignSelf="flex-end"/>
     )}
        <Circle
        position="absolute"
        bg="blue.100" 
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"/>
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : 0}
        alignSelf="flex-start">
        <Box mt={isNotSmallerScreen?0:16} alignself="flex-start">
        <Text fontSize="5xl" fontWeight="semibold">Hi,</Text>
        <Text fontSize="6xl"
        fontWeight="bold"
        bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
        bgClip="text">I'm Sangeetha Rajan.</Text>
        <Text color={isDark ? "gray.200" : "Gray.900"}> I design and Code simple yet beautiful websites.</Text>
        <Box flexGrow={1} delay={3}>
        
        {/* <Link src={Sa} target="_blank"> */}
        <a href={Sa} without rel="noopener noreferrer" target="_blank">
        <Button mt={8} colorScheme="blue" size='lg' fontSize="2xl" aria-label="Send Email"  >Hire Me</Button>
        {/* </Link> */}
        </a>
        </Box>
        </Box>
        
        <Image mt={isNotSmallerScreen?"0" : "12"}
        mb={isNotSmallerScreen?"0" : "12"}
        alignSelf="center"
        borderRadius="full"
        backgroundcolor="transparent"
        boxShadow="lg"
        boxSize="300"
        zIndex={1}
        flexShrink={0}
        src={Image1}alt="image"/>
     
        </Flex>
        </Stack>
        
        
        
     

    
  );
};

export default Header;
