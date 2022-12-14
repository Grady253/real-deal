import React from "react";
import { Center, Container, Heading, SimpleGrid, Box, Image, Button, Stack} from "@chakra-ui/react";
import data from "../componets/data";

export default function Project(){
    return(
       <Container>
           <Center>
            <Heading as='h1' fontSize='60px'>My PortFolio</Heading>
           </Center>
            <SimpleGrid columns={2} spacing={3} ml={30}>
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
                        <Stack spacing={20} direction='row' align='center'>
                        <Box as='span' fontSize='lg'>
                            <a target='_blank' rel='noreferrer' href={repository}>
                                <Button mr={10} size='lg'>Repo</Button>
                            </a>

                            <a target='_blank' rel="noreferrer" href={url}>
                                <Button size='md'>Link</Button>
                            </a>
                        </Box>
                        </Stack>
                        </Center>
                    </Box>
                </Box>
            ))}
            </SimpleGrid>
       </Container>
    )
}