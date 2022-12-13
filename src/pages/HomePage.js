import {Image, Center, Container, Heading, HStack, Text} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import img from "../image/Andre.png";
import React from "react";
// import {
//   Image,
//   HStack,
//   Text,
//   Container,
//   Heading,
//   IconButton,
//   Spacer,
//   ButtonGroup,
// } from "@chakra-ui/react";
// import Typewriter from 'typewriter-effect';
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import pdf from "../utilities/andreResume.pdf";

// export default function HomePage() {
//   return (
//     <Container>
//       <HStack p={100} ml={250}>
//         <Image
//           id="andre"
//           borderRadius="full"
//           boxSize="650px"
//           objectFit="contain"
//           src={img}
//           alt="Andre Grady"
//         />
//         <Text pb={200} fontSize="25px">
//           <Heading size="6xl" fontSize="50px">
//           <Typewriter
//           options={{
//             strings:["Andre' Grady"],
//             autoStart:true,
//             loop:true
//           }}
//         />
//           </Heading>
//           Front-end Web Developer.
//           <Spacer />
//           <ButtonGroup gap={19} p={10}>
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href="https://www.linkedin.com/in/andre-grady-a70237190/"
//             >
//               <IconButton size='md' ml={90} icon={<FaLinkedin />}/>
//             </a>
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href="https://github.com/Grady253"
//             >
//               <IconButton size="lg" icon={<FaGithub />}/>
//             </a>
//           </ButtonGroup>
//           <a style={{textDecoration:'none'}}href={pdf} download><Text ml={45} color='black' fontSize='lg'>Download Resume</Text></a>
//         </Text>
//       </HStack>
//     </Container>
//   );
// }

export default function HomePage(){
  return(
    <Container w='100%' pt={50} m={99} ml={100} >
      <HStack>
        <Image mr={50}
        id='andre'
        borderRadius='50%'
        boxSize='600px'
        objectFit='contain'
        src={img}
        alt='Andre Grady'
        />

        <Center>
        <Text as='b' fontSize='70px'>
          Hello, my name is{''}
          <Heading size='4xl' color='#611C35' fontSize='100px'>
            <Typewriter
            options={{
              strings:["Andre' Grady."],
              autoStart: true,
              loop:true,
            }}
            />
          </Heading>
          I'm a software engineer. 
        </Text>
        </Center>
      </HStack>
    </Container>
  )
}