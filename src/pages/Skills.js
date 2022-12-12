import { Box, Center, Container, Heading, SimpleGrid,Text } from "@chakra-ui/react";
import iconData from "../componets/iconData";
import React from "react";

export default function Skills() {
  return (
    <Container p={20}>
        <Center>
        <Heading as='h1' fontSize='60px'> My Skills</Heading>
        </Center>
        <Center>
        <Text fontSize='25px'>Here below are some technologies I've grasped great understanding of.</Text>
        </Center>
      <Center>
      <SimpleGrid column={2} spacing={10}>
        {iconData.map(({id,icon})=>(
          <Box w='30px' p={16} key={id}>{icon}</Box>
        ))}
      </SimpleGrid>
      </Center>
    </Container>
  );
}
