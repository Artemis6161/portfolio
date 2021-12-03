import React from 'react'

import {Flex,Box,Text, Heading,VStack} from "@chakra-ui/layout";

import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoReact,
    IoLogoJavascript,
    IoLogoGithub,
    IoLogoPython,
   
  } from "react-icons/io5"
  import {  DiGit,
    DiMongodb,} from "react-icons/di"

  export default function App() {
  return (


<VStack p={5}>
<Flex>
           
            
           <Heading   id="Skills"> Skills </Heading>
 
           </Flex>
{/* <SimpleGrid minChildWidth="120px" spacing="40px"> */}
    <Box>
           
          <Flex  direction="row">
          <Flex  justify="flex-end"  direction="column" my={5} >
          <Flex   ml={10} mt={20}  my={10} >
         
         
        
          <Heading >Front End</Heading>
          </Flex>
          
         
            <Flex>
          

            <Text mr={20} ml={5}> HTML 5</Text>
          <Text  mr={7} ml={5} >  CSS 3 </Text>
          </Flex>
          <Flex  justifyContent="space-between" my={5}>
          < IoLogoHtml5  size="100px"color= '#e34c26'/>
          <IoLogoCss3  size="100px"color= '#1572B6'/>
          </Flex>
          
            <Flex>
            <Text mr={20} ml={5}> Java Script</Text>
          <Text  mr={7}> React </Text>
          </Flex>
          <Flex  justifyContent="space-between" my={5}>
          < IoLogoJavascript  size="100px"color= '#F7DF1E'/>
          <IoLogoReact  size="100px"color= '#61DAFB'/>
          
          </Flex>
          
          </Flex>

          <Flex  justify="flex-end"  direction="column" my={5} >
          
           <Flex   ml={20} mr={10} mt={20} my={10}>

         
       <Heading >Others</Heading>
       </Flex>
       
       

          <Flex>
          

            <Text mr={20} ml={20}> Github</Text>
          <Text mr={7}>  python </Text>
          </Flex>
          <Flex  justifyContent="space-between"  ml={10}  my={5}>
          <IoLogoGithub size="100px"color= 'white'/>
          <DiGit size="100px"color= '#1572B6'/>
          </Flex>
          <Flex>
          

            <Text mr={20} ml={20}> Git </Text>
          <Text mr={7}>  Mongo Db </Text>
          </Flex>
          <Flex  justifyContent="space-between" ml={10} my={5}>
          < IoLogoPython size="100px"color= '#4584b6'/>
          <DiMongodb size="100px"color= '#4EA94B'/>
          </Flex>
          </Flex>
       </Flex>

      

          </Box>
          {/* </SimpleGrid> */}
          </VStack>
 
          






        
          
         
          
          
        
     
      
      ) 
  }
 


