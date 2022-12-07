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

export default function HomePage() {
  return (
    <Container>
      <HStack p={130} ml={250}>
        <Image
          borderRadius="Full"
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
              <IconButton ml={90} size="3xl" icon={<FaLinkedin />}></IconButton>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Grady253"
            >
              <IconButton size="lg" icon={<FaGithub />}></IconButton>
            </a>
          </ButtonGroup>
        </Text>
      </HStack>
    </Container>
  );
}
