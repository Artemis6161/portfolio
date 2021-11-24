import React from 'react'
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import {Image} from '@chakra-ui/image';
import {Circle,Stack,Flex,Box,Text} from "@chakra-ui/layout"
const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
  return (
   <Stack>
        <Circle
        position="absolute"
        bg="blue.100" 
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"/>
        <Flex>
        <Box>
        <Text>Hi,</Text>
        <Text>I'm Sangeetha Rajan.</Text>
        <Text> I design and Code simple yet beautiful websites.</Text>
        </Box>
        </Flex>
        </Stack>
        
        
        
     

    
  );
};

export default Header;
