import React from "react";
import {Button, Flex, HStack} from "@chakra-ui/react";

export default function Navber(){
    return(
       <HStack p={6}>
           <Flex w={"100%"}>
               <Button  variant='ghost'size="lg">Portfolio!</Button>
           </Flex>
       </HStack>
    );
}