import React from 'react'
import { Stack,Flex,Box,Text,Heading } from "@chakra-ui/layout";
import { chakra,Image,Badge,LinkOverlay,Tag,Button,Link} from "@chakra-ui/react"

const Contact = () => {
 
    
  return (
    <div>
      <Box id="Say Hi">
      <Flex flexDirection="column" alignItems="center" justifyContent="space-evenly" flexGrow={1}>
          <Heading marginBottom={14}>Say Hi</Heading>
         
          <Text fontSize='5xl' textAlign="center" marginBottom={14}>Want to collab on a project?<br/>
Feel free to send an email my way!</Text>
<Box>
<Link href="mailto:Sangeetharajan112@gmail.com" target="_blank">
    <Button aria-label="Send Email" p={10} fontSize="2xl" colorScheme='teal' size='xs' marginBottom={14}>
        Let's work together!
    </Button>
</Link>
</Box>

</Flex>
      </Box>





    </div>
  )
}

export default Contact
