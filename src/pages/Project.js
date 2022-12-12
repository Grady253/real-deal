import React from "react";
import { Center, Container, Heading, SimpleGrid, Box, Image, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
import data from "../componets/data";

export default function Project(){
    return(
       <Container>
           <Center>
            <Heading as='h1' fontSize='60px'>My PortFolio</Heading>
           </Center>
            <SimpleGrid columns={2} spacing={3} ml={35}>
            {data.map(({ title, description, image, repository, url})=> (
                <Box maxW='sm' minH='xl' borderWidth='2px' borderRadius='lg' overflow='hidden'>
                    
                    <Image style={{width:850,height:400}} src={image} alt='Project picture'/>
                    <Box p={6}>
                        <Box mt='1' fontWeight='bold' as="h2" lineHeight='tight' noOfLines={1}>
                            {title}
                        </Box>
                        <Box mt='2' fontWeight='medium' as='h4' lineHeight='tight'>
                            {description}
                        </Box>
                        <Center>
                        <Box as='span' fontSize='lg'>
                            <a target='_blank' rel='noreferrer' href={repository}>
                                <IconButton m={3} size="lg" icon={<FaGithub/>}></IconButton>
                            </a>

                            <a target='_blank' rel="noreferrer" href={url}>
                                <IconButton m={3}  size='lg' icon={<FaLink/>}></IconButton>
                            </a>
                        </Box>
                        </Center>
                    </Box>
                </Box>
            ))}
            </SimpleGrid>
       </Container>
    )
}