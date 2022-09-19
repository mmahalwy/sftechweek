import type { NextPage } from 'next';

import portal from '../public/images/portal.svg';
import star from '../public/images/star.svg';
import sanfran from '../public/images/sanfran.svg';
import sanfranSmall from '../public/images/sanfran-small.svg';
import chevronDown from '../public/images/chevron-down.svg';
import brex from '../public/images/brex.png';
import shepherd from '../public/images/shepherd.png';
import airfoil from '../public/images/airfoil.svg';
import betterleap from '../public/images/betterleap.svg';
import ondeck from '../public/images/ondeck.svg';
import stonks from '../public/images/stonks.webp';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Footer from '../components/Footer';
import HostForm from '../components/HostForm';
import RegisterForm from '../components/RegisterForm';

const ValueProp = [
  {
    title: 'Learning',
    description:
      'From fire-side chats to expert panels, SF Tech Week is the place for anyone to learn about all things happening in tech and crypto.',
    left: false,
    right: true,
  },
  {
    title: 'Building',
    description: 'Bringing the best builders, operators and entrepreneurs under the same roof.',
    left: true,
    right: true,
  },
  {
    title: 'Connecting',
    description:
      'Whether you’re seeking a cofounder, a new job or making new friends, SF Tech Week is where connections are made.',
    left: true,
    right: false,
  },
];

const FAQ = [
  {
    title: 'I’m flying in for SF Tech Week. What part of town should I stay in?',
    description:
      'We recommend staying in the SOMA district, which is where most of the events will be held.',
  },
  {
    title: 'Who is organizing SF Tech Week?',
    description:
      'SFTW is organized by a number of VCs, entrepreneurs, and community leaders in the Bay Area.',
  },
  {
    title: 'What kind of events should I expect?',
    description:
      'Events will range from fireside chats to expert panels to workshops. There will be something for everyone.',
  },
  {
    title: 'I want to host an event, what do I do?',
    description:
      'Fill in the sign up form and we’ll be in touch with you shortly. Otherwise, reach out to us via Twitter',
  },
];

const Home: NextPage = () => {
  const { isOpen: isHostOpen, onOpen: onHostOpen, onClose: onHostClose } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  return (
    <Container maxW="100%" px={{ base: 4, md: 6 }} pt="6">
      <Navbar onRegisterOpen={onRegisterOpen} onHostOpen={onHostOpen} />
      <Box
        sx={{
          position: 'relative',
          borderLeft: '2px solid #150E0A',
          borderRight: '2px solid #150E0A',
          borderBottom: '2px solid #150E0A',
          paddingTop: 24,
          paddingBottom: 156,
          background:
            'radial-gradient(98.71% 98.71% at 52.79% 99.41%, #FFC5C0 0%, rgba(255, 241, 192, 0) 100%)',
        }}
      >
        <Stack spacing="8" zIndex={100} align="center">
          <Box display={{ base: 'none', md: 'block' }}>
            <Image src={portal} width={48} height={48} alt="portal" />
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <Image src={portal} width={32} height={32} alt="portal" />
          </Box>
          <Stack spacing="6">
            <Stack spacing="4" align="center">
              <Heading fontSize={{ base: '16px', md: '25px' }}>November 1st - 6th</Heading>
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
              <Button
                as="a"
                colorScheme={'blackAlpha'}
                bg="black"
                size="lg"
                onClick={onRegisterOpen}
              >
                Register
              </Button>
            </div>
            <Text>
              Want to host an event?{' '}
              <Link onClick={onHostOpen} textDecor="underline" fontWeight={700}>
                Sign up
              </Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          zIndex={-1}
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Image src={sanfran} layout="fill" objectFit="cover" quality={100} />
        </Box>
        <Box
          display={{ base: 'block', md: 'none' }}
          position="absolute"
          zIndex={-1}
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Image src={sanfranSmall} layout="fill" objectFit="cover" quality={100} />
        </Box>
      </Box>
      <HStack
        bg="black"
        justify="center"
        gap={{ base: 2, md: 8 }}
        mt={{ base: 8, md: 0 }}
        mb={{ base: 8, md: 0 }}
        ml={{ base: -4, md: 0 }}
        mr={{ base: -4, md: 0 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 5, md: 5 }}
        flexWrap="wrap"
      >
        <Box w={{ base: '60px', md: '80px' }}>
          <Image src={brex} layout="responsive" />
        </Box>
        <Box w={{ base: '60px', md: '80px' }}>
          <Image src={airfoil} layout="responsive" />
        </Box>
        <Box w={{ base: '32px', md: '40px' }}>
          <Image src={stonks} layout="responsive" />
        </Box>
        <Box w={{ base: '64px', md: 100 }}>
          <Image src={betterleap} layout="responsive" />
        </Box>
        <Box w={{ base: '64px', md: 100 }}>
          <Image src={shepherd} layout="responsive" />
        </Box>
        <Box w={{ base: '64px', md: 100 }}>
          <Image src={ondeck} layout="responsive" />
        </Box>
        <Text color="white">+many more</Text>
      </HStack>
      <Stack
        border="2px solid #150E0A"
        pt={{ base: 8, md: 24 }}
        pb={{ base: 0, md: 24 }}
        px={{ base: 0, md: '14' }}
        mt={8}
        spacing="16"
        bg="rgba(255,255,255,0.5)"
      >
        <Stack spacing="9" px={{ base: 6, md: 0 }} align="center">
          <Box display={{ base: 'none', md: 'block' }}>
            <Image src={star} width={48} height={48} alt="portal" />
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <Image src={star} width={32} height={32} alt="portal" />
          </Box>
          <Heading
            fontSize={{ base: '39px', md: '61px' }}
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
              bg="rgba(255,255,255,0.8)"
              position="relative"
              borderY="2px solid #150E0A"
              borderX={{ base: 'none', md: '2px solid #150E0A' }}
              padding="40px 40px 40px 32px"
              _after={{
                base: 'none',
                md: item.right
                  ? {
                      content: item.right ? "''" : '""',
                      position: 'absolute',
                      top: '-24px',
                      right: '-2px',
                      height: '24px',
                      width: '2px',
                      background: 'black',
                    }
                  : 'none',
              }}
              _before={{
                base: 'none',
                md: item.left
                  ? {
                      content: item.left ? "''" : '""',
                      position: 'absolute',
                      top: '-24px',
                      left: '-2px',
                      height: '24px',
                      width: '2px',
                      background: 'black',
                    }
                  : 'none',
              }}
            >
              <Heading
                fontSize={{ base: '20px', md: '39px' }}
                lineHeight={{ base: '120%', md: '105%' }}
              >
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="9" mt={8}>
        <Stack
          spacing={{ base: '8', md: '14' }}
          px={{ base: '4', md: '14' }}
          py={{ base: 9, md: 14 }}
          bg="white"
          border="2px solid #150E0A"
        >
          <Heading
            id="faq"
            fontSize={{
              base: '38px',
              md: '61px',
            }}
          >
            FAQ
          </Heading>
          <Accordion allowMultiple allowToggle>
            {FAQ.map((item) => (
              <AccordionItem key={item.title} _first={{ borderTopWidth: 0 }} borderColor="#150E0A">
                <h2>
                  <AccordionButton
                    paddingTop={{ base: 4, md: 8 }}
                    paddingBottom={{ base: 4, md: 6 }}
                    px={0}
                  >
                    <Box flex="1" textAlign="left" fontSize={{ md: '20px' }} fontWeight={500}>
                      {item.title}
                    </Box>
                    <Image src={chevronDown} width={'24px'} height={'24px'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px={0}>
                  {item.description}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>
        <Stack
          bg="#232325"
          border="2px solid #150E0A"
          padding={{ base: '72px 24px', md: '96px 56px' }}
          spacing="72px"
          align="start"
        >
          <Heading color="white" fontSize={{ base: '39px', md: '61px' }} id="host">
            Hosting a community meetup?
          </Heading>

          <Button colorScheme="whiteAlpha" bg="white" color="black" size="lg" onClick={onHostOpen}>
            Register
          </Button>
        </Stack>
      </SimpleGrid>
      <HostForm isOpen={isHostOpen} onClose={onHostClose} />
      <RegisterForm isOpen={isRegisterOpen} onClose={onRegisterClose} />
      <Footer />
    </Container>
  );
};

export default Home;
