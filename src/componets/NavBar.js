import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import{Spacer} from "@chakra-ui/react";
import {FaCode, FaHome, FaPhone} from "react-icons/fa";
import{BsNut} from "react-icons/bs";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
// import {Flex, Heading, Spacer, Text , Link} from "@chakra-ui/react";

// export default function Navbar() {
//   return (
//     <Flex minWidth="max-content">
//       <Text fontSize="60px" as="b" m={20}>
//         Welcome
//       </Text>
//       <Spacer />
//       <Heading as="h2">
//         <Link m={10} as='u' to="/HomePage">
//           Home
//         </Link>
//         <Link m={10} as='u' href="/Skills">
//           Skills
//         </Link>
//         <Link m={10} as="u" href="#portfolio">
//           Portfolio
//         </Link>
//         <Link m={10} as="u" href="#contact">
//           Contact
//         </Link>
//       </Heading>
//     </Flex>
//   );
// }

export default function NavBar(){
  return(
    <Flex w='100%'>
    <Menu>
      <Spacer/>
      <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon/>}
      m={10} w={60} h={60}
      borderRadius='20%'
      variant= 'outline'
      />
      <MenuList w={200} h={200}>
      <a href="#home">
      <MenuItem icon={<FaHome/>}>
        Home
      </MenuItem> 
      </a>  
      <MenuItem icon={<FaCode/>}>
        Portfolio
      </MenuItem>
      <MenuItem icon={<BsNut/>}>
        Skills
      </MenuItem>
      <MenuItem icon={<FaPhone/>}>
        Contact
      </MenuItem>
      </MenuList>
    </Menu>
    </Flex>
  )
};
