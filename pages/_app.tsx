import { AppProps } from 'next/app';
import Head from 'next/head';
import { Box, ChakraProvider, extendTheme, StyleFunctionProps } from '@chakra-ui/react';

import { DefaultSeo } from 'next-seo';
import preview from '../public/images/sftw-preview.jpg';
import '../styles.css';

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
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.theme.colors.brand[900],
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'bold',
      },
    },
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

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
      <DefaultSeo
        title="SF Tech Week"
        description="Coming late October 2022"
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
        // twitter={{
        //   handle: '@sftechweek',
        //   site: '@site',
        //   cardType: 'summary_large_image',
        // }}
      />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
