import {
  Image,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Flex,
} from "@chakra-ui/react";
import iconData from "../componets/iconData";
import React from "react";

export default function Skills() {
  return (
    <Container p={20} id='skill'>

      <Center>
        <Heading as="h1" fontSize="60px">
          {" "}
          My Skills
        </Heading>
      </Center>
      <Center>
        <Text fontSize="25px">
          Here below are some technologies I've grasped great understanding of.
        </Text>
      </Center>
      
        <Flex minWidth="max-content" alignItems="center">
          <SimpleGrid row={2} spacing={15}>
            {iconData.map(({ id, icon }) => (
              <Image
                style={{ width: 190, height: 160}}
                src={icon}
                alt="Skills picture"
              />
            ))}
          </SimpleGrid>
        </Flex>
    </Container>
  );
}
