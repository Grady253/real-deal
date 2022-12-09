import React from "react";
import {
  Image,
  HStack,
  Text,
  Container,
  Heading,
  IconButton,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import img from "../image/Andre.png";
import pdf from "../utilities/andreResume.pdf";

export default function HomePage() {
  return (
    <Container>
      <HStack p={130} ml={250}>
        <Image
          id="andre"
          borderRadius="full"
          boxSize="650px"
          objectFit="contain"
          src={img}
          alt="Andre Grady"
        />
        <Text pb={300} fontSize="25px">
          <Heading size="6xl" fontSize="50px">
            Andre' Grady
          </Heading>
          Front-end Web Developer.
          <Spacer />
          <ButtonGroup gap={19} p={10}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/andre-grady-a70237190/"
            >
              <IconButton ml={90} icon={<FaLinkedin />}></IconButton>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Grady253"
            >
              <IconButton icon={<FaGithub />}></IconButton>
            </a>
          </ButtonGroup>
          <a style={{textDecoration:'none'}}href={pdf} download><Text ml={45} color='black' fontSize='lg'>Download Resume</Text></a>
        </Text>
      </HStack>
    </Container>
  );
}
