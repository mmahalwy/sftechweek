import type { NextPage } from 'next';

import portal from '../public/images/portal.svg';
import star from '../public/images/star.svg';
import sanfran from '../public/images/sanfran.svg';
import sanfranSmall from '../public/images/sanfran-small.svg';
import chevronDown from '../public/images/chevron-down.svg';
import brex from '../public/images/brex.png';
import shepherd from '../public/images/shepherd.png';
import signalfire from '../public/images/signalfire.png';
import m13 from '../public/images/m13.png';
import jllspark from '../public/images/jllspark.png';
import mage from '../public/images/mage.png';
import threeplus from '../public/images/3plus.png';
import airfoil from '../public/images/airfoil.svg';
import betterleap from '../public/images/betterleap.svg';
import the from '../public/images/the.svg';
import ondeck from '../public/images/ondeck.svg';
import finch from '../public/images/finch.svg';
import standardmetrics from '../public/images/standardmetrics.svg';
import stonks from '../public/images/stonks.png';
import wework from '../public/images/wework.png';
import crv from '../public/images/crv.jpeg';
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
import { event } from 'nextjs-google-analytics';
import Image from 'next/image';
import ImageFuture from 'next/future/image';
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

const SPONSORS = [
  { image: signalfire, href: 'https://signalfire.com/' },
  { image: threeplus, href: 'https://3plus.vc/' },
  { image: brex, href: 'https://brex.com/' },
  { image: m13, href: 'https://m13.co/' },
  { image: jllspark, href: 'https://spark.jllt.com/' },
  { image: ondeck, href: 'https://beondeck.com' },
  { image: airfoil, href: 'https://airfoil.studio' },
  { image: stonks, href: 'https://stonks.com' },
  {
    image: standardmetrics,
    href: 'https://standardmetrics.io',
  },
  { image: betterleap, href: 'https://betterleap.com' },
  { image: shepherd, href: 'https://withshepherd.com' },

  { image: the, href: 'https://the.com' },
  { image: finch, href: 'https://tryfinch.com' },
  { image: mage, href: 'https://mage.ai' },
  { image: crv, href: 'https://www.crv.com/' },
  { image: wework, href: 'https://www.wework.com' },
];

const Home: NextPage = () => {
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  return (
    <Container maxW="100%" px={{ base: 4, md: 6 }} pt="6">
      <Navbar onRegisterOpen={onRegisterOpen} />
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
                as="h1"
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
                Register to attend
              </Button>
            </div>
            <Text>
              Want to host an event?{' '}
              <Link
                textDecor="underline"
                fontWeight={700}
                href="https://docs.google.com/forms/d/e/1FAIpQLSfTnPV_AkD34XqLKyjjQjjPllVwLRkdi2wWacBF2TLp1ipE_w/viewform"
                target="_blank"
              >
                Host an event
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
        spacing={{ base: 2, md: 6 }}
        gap={{ base: 3, md: 0 }}
        mt={{ base: 8, md: 0 }}
        mb={{ base: 8, md: 0 }}
        ml={{ base: -4, md: 0 }}
        mr={{ base: -4, md: 0 }}
        px={{ base: 4, md: 8 }}
        py={{ base: 5, md: 5 }}
        flexWrap="wrap"
      >
        {SPONSORS.map((item) => (
          <Link
            href={item.href}
            target="_blank"
            key={item.image?.src}
            onClick={() => {
              event('sponsor_clicked', {
                label: item.href,
              });
            }}
            >
            <Box
              as={ImageFuture}
              src={item.image}
              alt={item.href}
              height={{ base: '16px', md: '20px' }}
              width="auto"
            />
          </Link>
        ))}

        <Text color="white">+more</Text>
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

          <Button
            colorScheme="whiteAlpha"
            bg="white"
            color="black"
            size="lg"
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTnPV_AkD34XqLKyjjQjjPllVwLRkdi2wWacBF2TLp1ipE_w/viewform"
            target="_blank"
          >
            Host an event
          </Button>
        </Stack>
      </SimpleGrid>
      <RegisterForm isOpen={isRegisterOpen} onClose={onRegisterClose} />
      <Footer />
    </Container>
  );
};

export default Home;
