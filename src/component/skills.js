import React from 'react'

import {Stack,Flex,Box,Text, Heading,Spacer} from "@chakra-ui/layout";

import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoReact,
    IoLogoJavascript,
    IoLogoGithub,
    IoLogoPython,
  } from "react-icons/io5"

  export default function App() {
  return (



    <Box>
           <Flex    my={10} ml={20}>
          <Heading> Skills </Heading>
          </Flex>
         
          <Flex   ml={10} mt={20}  my={10} >
          
          <Heading >Front End</Heading>
          
        
          
          </Flex>
          
          <Flex    direction="column" my={5} >
            <Flex>
            <Text mr={20} ml={5}> HTML 5</Text>
          <Text  mr={7} ml={5} >  CSS 3 </Text>
          </Flex>
          <Flex  justifyContent="space-between" my={5}>
          < IoLogoHtml5  size="100px"color= '#e34c26'/>
          <IoLogoCss3  size="100px"color= '#1572B6'/>
          </Flex>
          </Flex>

          <Flex    direction="column" my={5} >
            <Flex>
            <Text mr={20} ml={5}> Java Script</Text>
          <Text  mr={7}> React </Text>
          </Flex>
          <Flex  justifyContent="space-between" my={5}>
          < IoLogoJavascript  size="100px"color= '#e34c26'/>
          <IoLogoReact  size="100px"color= '#1572B6'/>
          </Flex>
          </Flex>
          <Flex  ml={10} mt={20}  my={10}>
          <Heading >Front End</Heading>
          </Flex>
          
         
          
          
          </Box>
     
      
      ) 
  }
 


