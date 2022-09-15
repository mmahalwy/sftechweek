import { Text, Flex, HStack, Link, VStack, Box } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import heart from '../public/images/heart.svg';
import twitter from '../public/images/u_twitter.svg';

const Footer = () => {
  return (
    <>
      <VStack
        as="footer"
        mb="4"
        mt="9"
        h="14"
        justify="center"
        display={{ base: 'none', md: 'block' }}
        spacing={3}
      >
        <HStack>
          <Flex flex="1" justify="start">
            Logo
          </Flex>
          <HStack flex="1" justify="center" align="center">
            <Image src={heart} alt="heart" width={18} height={16} />
            <Text fontFamily={'PF Tempesta Seven'}>Designed by Airfoil</Text>
          </HStack>
          <HStack flex="1" justify="end">
            <Link href="https://twitter.com/sftechweek" target="_blank" display="flex">
              <Image src={twitter} alt="heart" width={24} height={24} />
            </Link>
            <Text fontFamily={'PF Tempesta Seven'}>© SF Tech Week 2022</Text>
          </HStack>
        </HStack>
        <Box width="100%" height="2px" bg="#232325" />
      </VStack>
      <VStack
        as="footer"
        mb="4"
        mt="9"
        h="14"
        justify="center"
        display={{ base: 'block', md: 'none' }}
        spacing={3}
      >
        <HStack>
          <Flex flex="1" justify="start">
            Logo
          </Flex>
          <HStack flex="1" justify="end">
            <Text fontSize="12px" fontFamily={'PF Tempesta Seven'}>
              © SF Tech Week 2022
            </Text>
          </HStack>
        </HStack>
        <Box width="100%" height="2px" bg="#232325" />
        <HStack>
          <Link href="https://twitter.com/sftechweek" target="_blank">
            <Image src={twitter} alt="heart" width={24} height={24} />
          </Link>
          <HStack flex="1" justify="end" align="center">
            <Image src={heart} alt="heart" width={13.5} height={12} />
            <Text fontSize="12px" fontFamily={'PF Tempesta Seven'}>
              Designed by Airfoil
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Footer;
