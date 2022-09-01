import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { DefaultSeo } from 'next-seo';
import preview from '../public/images/sftw-preview.jpg';

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
              url: preview.src,
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
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          primaryColor: 'dark',
          defaultRadius: 0,
          colors: {
            goldengate: [
              '#C0362C',
              '#C0362C',
              '#C0362C',
              '#C0362C',
              '#C0362C',
              '#C0362C',
              '#C0362C',
            ],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
