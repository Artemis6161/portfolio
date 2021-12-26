import React from 'react'
 import AirbnbExample from './new'
import {Projects} from './data'
import { Stack,Flex,Box,Text,Heading } from "@chakra-ui/layout";
const product = () => {
  return (
    <div>
<Box maxW="50px 100px" mx="auto" flexDirection="column" alignitems="center" textAlign="center">
            
    <Heading id="Projects" fontSize='5xl'>
          Projects
      </Heading>
     <Text  maxW="20px 0px" margin="20px 0px">lkehfuiegfsfbsjkdbfjkdsf </Text>
          <Flex  w='100%'   flex-wrap="wrap" maxW="20px 10px" justifyContent="space-between" >
   {Projects.map((item) => (
       <AirbnbExample 
       key={item}
       img={item.img} 
    title={item.title} 
desc={item.desc}
link={item.link}/>
))}
     
      </Flex>
      </Box>
  
    </div>
  )
   }

export default product
