import React, { useState } from 'react'
import { chakra,Image,Badge,LinkOverlay,Tag,Link } from "@chakra-ui/react"

import { Stack,Flex,Box,Text,Heading } from "@chakra-ui/layout";

const AirbnbExample = ({img,title,desc,link}) => {
  const[show, setshow] = useState(false);
return (
 
  <Link href={link} target="_blank" rel="noreferrer">
  <Flex borderWidth='2px' borderRadius='10px 10px 0px 0px' overflow='hidden' margin="15px" maxW="350px" height="179px" _hover="{bg: 'green'}"
    onMouseEnter={()=>setshow(true)} 
    onMouseLeave={()=>setshow(false)}>
{show ?(
  <span>
   <Text fontSize='3xl'>{title}</Text>
  <Text>{desc}</Text>
   </span>
) : (
  <Image width="100%" src={img} alt=""/>)

}



{/* {show ?
  
   
   <Image width="100%" src={img} alt=""/>
   
    
  
 : 
 <span>
  <Text>{title}</Text>
            
  <Text>{desc}</Text>
  </span>
} */}




</Flex>

{/* </Flex> */}

</Link>







)
      
      }
  export default  AirbnbExample;