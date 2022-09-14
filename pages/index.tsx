import type { NextPage } from 'next';
import portal from '../public/images/portal.svg';
import star from '../public/images/star.svg';
import brex from '../public/images/brex.png';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Footer from '../components/Footer';

const ValueProp = [
  {
    title: 'Learning',
    description:
      'From fire-side chats to expert panels, SF Tech Week is the place for anyone to learn about all things happening in tech and crypto.',
  },
  {
    title: 'Building',
    description: 'Bringing the best builders, operators and entrepreneurs under the same roof.',
  },
  {
    title: 'Connecting',
    description:
      'Whether you’re seeking a cofounder, a new job or making new friends, SF Tech Week is where connections are made.',
  },
];

const Home: NextPage = () => {
  return (
    <Container maxW="100%" px="6" pt="6">
      <Navbar />
      <Box
        sx={{
          borderLeft: '2px solid black',
          borderRight: '2px solid black',
          borderBottom: '2px solid black',
          paddingTop: 24,
          paddingBottom: 156,
          background:
            'radial-gradient(98.71% 98.71% at 52.79% 99.41%, #FFC5C0 0%, rgba(255, 241, 192, 0) 100%)',
        }}
      >
        <Stack spacing="8">
          <Image src={portal} width={48} height={48} alt="portal" />
          <Stack spacing="6">
            <Stack spacing="4" align="center">
              <Heading fontSize={{ base: '16px', md: '25px' }}>Early November</Heading>
              <Heading
                fontSize={{ base: '39px', md: '95px' }}
                lineHeight={{ base: '120%', md: '105%' }}
                textAlign="center"
              >
                San Francisco
                <br />
                Tech Week
              </Heading>
            </Stack>
          </Stack>
          <Stack spacing="6" align="center">
            <div>
              <Button as="a" colorScheme={'blackAlpha'} bg="black" href="#" size="lg">
                Register
              </Button>
            </div>
            <Text>
              Want to host an event? <Link>Sign up</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
      <HStack
        bg="black"
        height={{ base: 16, md: 20 }}
        justify="center"
        gap={'32px'}
        mt={{ base: 8, md: 0 }}
        ml={{ base: -6, md: 0 }}
        mr={{ base: -6, md: 0 }}
      >
        <Text color="white" fontFamily={'PF Tempesta Seven'}>
          Events by
        </Text>

        <Image src={brex} width={100} objectFit="scale-down" />
      </HStack>
      <Stack border="2px solid black" px="14" py="24" spacing="16">
        <Stack spacing="9">
          <Image src={star} width={48} height={48} alt="portal" />
          <Heading
            fontSize={{ base: '39px', md: '61' }}
            lineHeight={{ base: '120%', md: '105%' }}
            textAlign="center"
          >
            What it’s all about
          </Heading>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="9">
          {ValueProp.map((item) => (
            <Stack
              key={item.title}
              spacing="6"
              bg="white"
              border="2px solid black"
              padding="40px 40px 40px 32px"
            >
              <Heading fontSize={{ base: '39px' }} lineHeight={{ base: '120%', md: '105%' }}>
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="9">
        <Stack
          spacing={{ base: '9', md: '14' }}
          px={{ base: '4', md: '14' }}
          py={{ base: 9, md: 14 }}
          bg="w"
        ></Stack>
      </SimpleGrid>
      <Footer />
    </Container>
  );
};

export default Home;
