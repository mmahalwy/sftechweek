import { Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex as="footer" borderBottom="2px solid black" mb="4" mt="9" h="14" justify="center">
      <Flex flex="1" justify="start">
        Logo
      </Flex>
      <Flex flex="1" justify="center">
        Twitter
      </Flex>
      <Flex flex="1" justify="end">
        <Text fontFamily={'PF Tempesta Seven'}>© SF Tech Week 2022</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
