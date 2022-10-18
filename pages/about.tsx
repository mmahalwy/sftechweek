import type { NextPage } from 'next';
import type { FaceCardInfo } from '../types';

import { Heading, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import FaceCard from '../components/FaceCard';

const vertPadding = '56px';

const faceCardList: FaceCardInfo[] = [
  {
    name: 'Mohamed El Mahallawy',
    title: 'Co-founder & CTO',
    company: 'Shepherd',
    imgSrc: 'https://pbs.twimg.com/profile_images/1460411173623373826/s9ZcaUdU_400x400.jpg',
    twitterHref: 'https://twitter.com/the_mo_el',
    linkedInHref: 'https://www.linkedin.com/in/mmahalwy/',
  },
  {
    name: 'Sachit Sachdev',
    title: 'Venture Capitalist',
    company: '',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C5603AQEJ0pUX6gKTjQ/profile-displayphoto-shrink_800_800/0/1541516367663?e=1670457600&v=beta&t=DnaTVbMQjNU17JFsB1VG-RlNpgeKS-i25pBB3D77eu8',
    twitterHref: 'https://twitter.com/sachit_sachdev',
    linkedInHref: 'https://www.linkedin.com/in/sachitsachdev/',
  },
  {
    name: 'Sonia El-Sherif',
    title: 'Chief of Staff',
    company: 'JLL Spark',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C5603AQEJFlATKRdg1g/profile-displayphoto-shrink_800_800/0/1653410359113?e=1670457600&v=beta&t=cKGaWUd9gSOEUjzvBFE6ksB3kubJCHOEl7y9wKLPyLI',
    twitterHref: 'https://twitter.com/Sony_Sherif',
    linkedInHref: 'https://www.linkedin.com/in/sonia-el-sherif-a85b22139/',
  },
  {
    name: 'Khaled Hussein',
    title: 'Co-Founder and CEO',
    company: 'Betterleap',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C5603AQFXigIglBsiyQ/profile-displayphoto-shrink_800_800/0/1558142865917?e=1670457600&v=beta&t=Dgz_oi43cgV1EvUSKEg6u2MCojQcdzCJlmR__nfcsiM',
    twitterHref: 'https://twitter.com/dsog',
    linkedInHref: 'https://www.linkedin.com/in/dsogkhaled/',
  },
  {
    name: 'Karthik Sagar',
    title: 'Investor',
    company: 'Chamaeleon VC',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C4E03AQF007QFstkSrQ/profile-displayphoto-shrink_800_800/0/1646255739245?e=1670457600&v=beta&t=T0MPbQMHdHBftDBeZPtUtHH01hOG9YC0gaoQZ7upVC4',
    twitterHref: 'https://twitter.com/karthiksagr',
    linkedInHref: 'https://www.linkedin.com/in/karthiksagr',
  },
  {
    name: 'David Miller',
    title: 'Business Development',
    company: 'Standard Metrics',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C5603AQFFfZ4LnQd_Iw/profile-displayphoto-shrink_800_800/0/1664171166977?e=1670457600&v=beta&t=t6pPsU02_k85fU1pBD0Gz6x-9L1CVWDcv5V0M_hFhRE',
    twitterHref: 'https://twitter.com/davidmmiller02',
    linkedInHref: 'https://www.linkedin.com/in/david-miller-94916352',
  },
  {
    name: 'Gen',
    title: 'Problem Solver',
    company: 'Stonks',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C5603AQF1tPUyV0pNLQ/profile-displayphoto-shrink_800_800/0/1603421160222?e=1670457600&v=beta&t=VJ2GqIQsxFriq01aW_OkeYLnlsejwudiGRC8xDYOmGc',
    twitterHref: 'https://twitter.com/Zombiepoke',
    linkedInHref: 'https://www.linkedin.com/in/genevieve-richards/',
  },
  {
    name: 'Sarah Clark',
    title: 'Rev Ops',
    company: 'Standard Metrics',
    imgSrc: 'https://pbs.twimg.com/profile_images/1486102604589395968/bkxGKwjD_400x400.jpg',
    twitterHref: 'https://twitter.com/lewisandSCLARKY',
    linkedInHref: 'https://www.linkedin.com/in/sarahsclark',
  },
  {
    name: 'Sara Ledterman',
    title: 'General Partner',
    company: '3+',
    imgSrc: 'https://pbs.twimg.com/profile_images/1501094058449461249/NRAB8p6R_400x400.jpg',
    twitterHref: 'https://twitter.com/saraledterman',
    linkedInHref: '',
  },
  {
    name: 'Mel Flores Salman',
    title: 'Event Marketing',
    company: '',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C5603AQFCt3Q902PX7Q/profile-displayphoto-shrink_800_800/0/1651697631283?e=1670457600&v=beta&t=rkzsgYT27f5SAYs63ONUFRzfv1iLEEUbpXgOVwUPcco',
    twitterHref: 'https://twitter.com/NorthBayMel',
    linkedInHref: 'https://www.linkedin.com/in/melaniesalman/',
  },
  {
    name: 'Jesse Colligan',
    title: 'Software Engineer',
    company: 'Tesla',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/D5603AQGCLudZL18j5A/profile-displayphoto-shrink_400_400/0/1665109044914?e=1671062400&v=beta&t=PSlDi2su2g6lxV8c5Kg5GwB6dVwMUaTGr5tFCjBXmP4',
    twitterHref: 'https://twitter.com/jcolla_holla',
    linkedInHref: 'https://www.linkedin.com/in/jessecolligan/',
  },

  {
    name: 'Zuleika Tesei',
    title: '',
    company: '',
    imgSrc:
      'https://media-exp1.licdn.com/dms/image/C5603AQGS1vjTEDrnZQ/profile-displayphoto-shrink_800_800/0/1657608430559?e=1670457600&v=beta&t=kWxCDnpEp5N2HmS3_PqCve8jVVHzRqyuneUh-hJSySw',
    twitterHref: '',
    linkedInHref: 'https://www.linkedin.com/in/zuleika-tesei/',
  },
];

const About: NextPage = () => {
  return (
    <>
      <Heading as="h2" pt={vertPadding}>
        Who Are We?
      </Heading>
      <SimpleGrid pt={vertPadding} spacing="24px" columns={{ base: 1, md: 4 }}>
        {faceCardList.map((faceCardInfo) => (
          <FaceCard {...faceCardInfo} key={faceCardInfo.name} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default About;
