import { Container, Heading, Center, Text} from "@chakra-ui/layout";
import pdf from "../utilities/Andre_Grady_Resume.pdf";
import React from "react";
import { Button} from "@chakra-ui/react";


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
            <Center>
                <Button>
                <Text fontSize='20px'>
                    <a style={{textDecoration:'none'}}href={pdf} download><Text color='black' fontSize='lg'>Download Resume</Text></a>
                </Text>
                </Button>
            </Center>
        </Container>
    )
}