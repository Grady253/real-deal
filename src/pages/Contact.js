import { Container, Heading, Center, Text } from "@chakra-ui/layout";
import React from "react";

export default function Contact(){
    return(
        <Container>
            <Center>
            <Heading as='h1' fontSize='60px'>Contact Me</Heading>
            </Center>
            <Center>
                <Text fontSize='25px'>
                    I'd love to get in touch! Here are my socials below.
                </Text>
            </Center>
        </Container>
    )
}