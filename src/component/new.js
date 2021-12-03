import React from 'react'
import { chakra,Image,Badge,LinkOverlay,Tag,Link } from "@chakra-ui/react"
import { VscLinkExternal,VscGithubInverted } from "react-icons/vsc";
import { Stack,Flex,Box,Text,Heading } from "@chakra-ui/layout";
import { Icon,StarIcon} from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'
function AirbnbExample({img,link}) {
  return(
    <div className="p">
      <Box w='30%' h='4vh'  borderWidth='2px' borderRadius='10px 10px 0px 0px' overflow='hidden'>
<Flex >

      </Flex>

      <Link href={link}/>
<Image src={img} alt=""/>

      </Box>
    </div>
  )
    
      
       
        
  
  

      
 
  
         
         
        
      
    
  }
  export default  AirbnbExample;