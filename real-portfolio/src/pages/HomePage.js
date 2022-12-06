import React from "react";
import {Image, HStack,Text, Container, Heading, IconButton} from "@chakra-ui/react";
import {FaLinkedin,FaGithub} from "react-icons/fa"
import img from "../image/Profile.png";

export default function HomePage(){
    return(
        <Container>
        <HStack p={130} ml={250}>
            <Image
            borderRadius="Full"
            boxSize='500px'
            objectFit='cover'
            src={img}
            alt='Andre Grady'
            />
        <Text p={90} pb={350} fontSize='25px'>
            <Heading size='6xl' fontSize='50px'>
                Andre' Grady
            </Heading>
            Front-end web Devloper.
        
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andre-grady-a70237190/">
          <IconButton m={10} size="3xl" icon={<FaLinkedin />}></IconButton>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Grady253">
          <IconButton m={10}  size="3xl" icon={<FaGithub />}></IconButton>
        </a>
        </Text>
        </HStack>
        </Container>
    )
}