import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode';
import {Flex,Box,Text, Heading,VStack} from "@chakra-ui/layout";

import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoReact,
    IoLogoJavascript,
    IoLogoGithub,
    IoLogoPython,
    IoLogoFirebase
   
    
   
  } from "react-icons/io5"
  import {  DiGit,
    } from "react-icons/di"
    import {   FaBootstrap,
    } from "react-icons/fa"
    import {   SiJquery,
    } from "react-icons/si"

    



  export default function App() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    // const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
   
  return (


    <VStack p={5}>

<Flex>


           
            
           <Heading   id="Skills"> Skills </Heading>
 
           </Flex>
{/* <SimpleGrid minChildWidth="120px" spacing="40px"> */}
    <Box>
           
          <Flex  direction="row">
          <Flex  justify="flex-end"  direction="column" my={5} >
          <Flex   ml={20} mt={20} my={10}>
         
         
        
          <Heading >Front End</Heading>
          </Flex>
          
         
            <Flex>
          

            <Text mr={20} ml={5}> HTML 5</Text>
          <Text  mr={10} >  CSS 3 </Text>
          <Text  ml={10} >  Bootstrap </Text>
         
          </Flex>
          <Flex  justifyContent="space-between" my={5}>
          < IoLogoHtml5  size="100px"color= '#e34c26'/>
          <IoLogoCss3  size="100px"color= '#1572B6'/>
          <  FaBootstrap  size="100px"color= '#F7DF1E'/>
          </Flex>
          
            <Flex>
            <Text mr={20} ml={5}> Java Script</Text>
          <Text  mr={20} > React </Text>
          <Text   mr={5} >  Jquery </Text>
          </Flex>
          <Flex  justifyContent="space-between" my={5}>
          < IoLogoJavascript  size="100px"color= '#F7DF1E'/>
          <IoLogoReact  size="100px"color= '#61DAFB'/>
          < SiJquery  size="100px"color= '#61DAFB'/>
          
          </Flex>
          </Flex>
         

          {/* <Flex>
            <Text mr={20} ml={5}> Java Script</Text>
          <Text  mr={7}> React </Text>
          </Flex>
          <Flex  justifyContent="space-between" my={5}>
          <  FaBootstrap  size="100px"color= '#F7DF1E'/>
          < SiJquery  size="100px"color= '#61DAFB'/>
          
          </Flex>
          
          </Flex> */}


{/* others */}
          <Flex  justify="flex-end"  direction="column" my={5} >
          
           <Flex   ml={20} mr={10} mt={20} my={10}>

         
       <Heading >Others</Heading>
       </Flex>
       
       

          <Flex>
          

            <Text mr={20} ml={20}> Github</Text>
          <Text ml={6}>  Git </Text>
          </Flex>
          <Flex  justifyContent="space-between"  ml={10}  my={5}>
          <IoLogoGithub color={isDark ? "white" : "black"}size="100px"/>
          <DiGit size="100px"color= '#1572B6'/>
          </Flex>
          <Flex>
          

            <Text mr={20} ml={20}> python </Text>
          <Text mr={7}>  Firebase </Text>
          </Flex>
          <Flex  justifyContent="space-between" ml={10} my={5}>
          < IoLogoPython size="100px"color= '#4584b6'/>
          <IoLogoFirebase size="100px"color= '#FFCB2B'/>
          
          </Flex>
          </Flex>
          </Flex>
         
          </Box>
         
          </VStack>
         
     
         
       
 
          






        
          
         
          
          
        
     
      
      ) 
  }
 


