import {Flex, Heading, Spacer, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Flex minWidth="max-content">
      <Text fontSize='30px' as='b' m={20} >Welcome</Text>
      <Spacer />
      <Heading as='h2'>
        <Link m={10} as='u' to='/HomePage'>
          Home
        </Link>
      <Link m={10} as='u' to="/AboutMe">
          About
      </Link>
      <Link m={10} as='u' to="/Contact">
          Contact
      </Link>
      
      <Link m={10} as='u' to="/Portfolio">
          Portfolio
      </Link>

      </Heading>
    </Flex>
  );
}
