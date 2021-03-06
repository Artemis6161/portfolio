import React, { useState } from 'react';
import {  useColorModeValue } from "@chakra-ui/color-mode";
import Skills from "./component/skills";
import Product from "./component/product"
import Contact from "./component/contact"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import "./App.css";

import Header from "./component/Header";
import SocialLinks from "./component/social icon";
import { Button} from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon, CloseIcon  } from "@chakra-ui/icons";
import{useColorMode} from "@chakra-ui/color-mode"
import { VStack, Flex , Heading, Spacer} from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,} from "react-icons/fa";
  // FaInstagram,
  // FaLinkedin,
  // FaGithub,


  export default function App()  {
  const {colorMode,toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  const [toggle, setToggle] = useState("none");

  return (
   
   <>
   
   <VStack p={5}>
        <Flex
         position="fixed"
         bgColor="rgb(0, 40, 63, 0.7)"
         top="0"
         as="nav"
         zIndex="5"
          bg={useColorModeValue("white")}
          width="100%"
          // top="1rem"
          // right="1rem"
          alignItems="center"
          justify="flex-end"
          pr="10"
        >
  <Heading ml="8" size="md"fontweight='semibold' color="cyan.400" >Develo<span>per</span></Heading> 
<Spacer />


{/* 
<div className="header">
  <div className="header_right"> */}
    
  

  <Flex display={["none", "none", "flex", "flex"]} alignItems="center">
   
  <Link to="/">
              <Button  as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </Link>

       <HashLink smooth to="/#Skills">
              <Button ml="8" as="a" variant="ghost" aria-label="Blogs" my={5} w="100%">
                Skills
              </Button>
            </HashLink>

            <HashLink smooth to="/#Projects">
              <Button ml="8" as="a" variant="ghost" aria-label="Blogs" my={5} w="100%">
              Projects
              </Button>
            </HashLink>
            <HashLink smooth to="/#Say Hi">
              <Button ml="8" as="a" variant="ghost" aria-label="Blogs" my={5} w="100%">
              Say Hi
              </Button>
            </HashLink>


            <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            background="none"
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => {
              setToggle("flex");
            }}
          />
     
  {/* </Flex> */}
{/* <Link  ml={20}to="/Contact">
        <h4> Contact </h4>
      </Link> */}
      
       {/* </div>
       </div> */}

   <IconButton ml={20} icon={ isDark? <FaSun/> : <FaMoon />}
   isRound='true' onClick={toggleColorMode}/> 
   
   <Flex
          w="100vw"
          h="100vh"
          bgColor={isDark ? "black" : "white"}
          zIndex="200"
          opacity="0.95"
          top="0"
          left="0"
          overflow="auto"
          position="fixed"
          flexDirection="column"
          align="center"
          display={toggle}
        >
          <Flex mt={2} mr={2} size="lg" justify="flex-end">
            <Flex width="100" direction="column">
              <Flex
                direction="column"
                alignItems="center"
                display={["flex", "flex", "flex", "flex"]}
              >
                <IconButton
                  display={["flex", "flex", "none", "none"]}
                  onClick={() => {
                    setToggle("none");
                  }}
                />
                  <CloseIcon />
                
              </Flex>
              <Link to="/">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  my={5}
                  w="100%"
                  onClick={() => {
                    setToggle("none");
                  }}
                >
                  Home
                </Button>
              </Link>

              <HashLink to="/#Projects">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Projects"
                  my={5}
                  w="100%"
                  onClick={() => {
                    setToggle("none");
                  }}
                > Projects </Button>
                </HashLink>

              <HashLink to="/#Skills">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Skills"
                  my={5}
                  w="100%"
                  onClick={() => {
                    setToggle("none");
                  }}
                >
                  Skills
                </Button>
              </HashLink>

              <HashLink to="/#Say Hi">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Say Hi"
                  my={5}
                  w="100%"
                  onClick={() => {
                    setToggle("none");
                  }}
                >
                  Say Hi
                </Button>
              </HashLink>

            </Flex>
          </Flex>
        </Flex>
      
   
 

        </Flex>
  
</Flex>

<Header />
<Skills />
<Product />
<Contact/>
<SocialLinks />
</VStack>
</>
 );}

