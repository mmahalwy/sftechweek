import NextImage from 'next/image';
import type { FaceCardInfo } from '../types';

import { Image as ChakraImage, Box, HStack, Stack, Text, Link } from '@chakra-ui/react'
import twitter from '../public/images/u_twitter.svg';
import linkedIn from '../public/images/u_linkedIn.svg';



const FaceCard = (props:FaceCardInfo) => {
    const {name, title, company, imgSrc, twitterHref, linkedInHref } = props;
    return (
        <Box maxW={"380px"} px={4} pt={4} m={2} border="2px solid #150E0A">
            <ChakraImage border="2px solid #150E0A" src={imgSrc} alt={name} w="340px" h="255px" objectFit="cover" />
            <Stack py={5}>
                <Text fontSize='2xl' fontFamily="Recoleta">{name}</Text>
                <Text>{title} {company && `@ ${company}`}</Text>
                <HStack>
                    {twitterHref && 
                        <Link href={twitterHref} target="_blank" display="flex">
                            <NextImage src={twitter} alt="twitter" width={24} height={24} />
                        </Link>
                    }
                    {linkedInHref && 
                        <Link href={linkedInHref} target="_blank" display="flex">
                            <NextImage src={linkedIn} alt="linkedin" width={24} height={24} />
                        </Link>
                    }
                </HStack>
            </Stack>
        </Box>
     );
}
 
export default FaceCard;