import { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { Box, ChakraProvider, extendTheme, StyleFunctionProps, Container, useDisclosure } from '@chakra-ui/react';
import { GoogleAnalytics, event } from 'nextjs-google-analytics';

import { DefaultSeo } from 'next-seo';
import preview from '../public/images/sftw-preview.jpg';
import '../styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

const colors = {
  brand: {
    900: '#ECE8E1',
    800: '#ECE8E1',
    700: '#ECE8E1',
  },
};
const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Recoleta', sans-serif`,
    body: `'Suisse Intl', sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.theme.colors.brand[900],
      },
      '*': {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 700,
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: '#150E0A',
            borderColor: '#150E0A',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: '#150E0A',
          borderRadius: 'none',
          _focusVisible: {
            borderColor: '#150E0A',
            boxShadow: `0px 1px 0px 0px #150E0A`,
          },
        },
      },
      variants: {
        outline: {
          field: {
            borderRadius: 0,
            borderColor: 'rgba(0,0,0,0.2)',
            _hover: {
              borderColor: '#232325',
            },
            _focusVisible: {
              borderColor: '#232325',
              boxShadow: `0 0 0 1px #232325`,
            },
          },
        },
      },
    },
  },
});

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  event(name, {
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();


  return (
    <>
      <Head>
        <title>SF Tech Week</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics trackPageViews />}
      <DefaultSeo
        title="SF Tech Week"
        description="Happening in SF, November 1-6, 2022"
        canonical="https://sf-techweek.com"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://sf-techweek.com',
          site_name: 'SF Tech Week',

          images: [
            {
              url: `https://sf-techweek.com${preview.src}`,
              width: preview.width,
              height: preview.height,
              alt: 'SF Tech Week',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@sftechweek',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          { name: 'twitter:image', content: `https://sf-techweek.com${preview.src}` },
          { name: 'twitter:title', content: 'SF Tech Week' },
        ]}
      />

      <ChakraProvider theme={theme}>
        <Container maxW="100%" px={{ base: 4, md: 6 }} pt="6">
          <Navbar onRegisterOpen={onRegisterOpen} />
            <Component {...pageProps} onRegisterOpen={onRegisterOpen} />
          <Footer />
          <RegisterForm isOpen={isRegisterOpen} onClose={onRegisterClose} />
        </Container>
      </ChakraProvider>
    </>
  );
}
