import { Alert, Anchor, Box, Button, Container, Group, TextInput, Title } from '@mantine/core';
import type { NextPage } from 'next';
import { useForm } from '@mantine/form';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import gg from '../public/images/gg.jpg';
import { useState } from 'react';

const Home: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const [formSuccess, setFormSuccess] = useState(false);

  return (
    <>
      <Container
        size={'xl'}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ zIndex: 1 }}>
          <Title order={1} size="h1" sx={{ fontSize: 64 }}>
            SF TECH WEEK
          </Title>
          <Title order={3} size="h3">
            Coming late October
          </Title>
          {formSuccess ? (
            <Alert color="green" title="You're registered!" mt="lg">
              We will be in touch soon.
            </Alert>
          ) : (
            <Box
              component="form"
              mt="lg"
              onSubmit={form.onSubmit(async (values) => {
                await fetch('/api/registration', {
                  method: 'POST',
                  body: JSON.stringify(values),
                  headers: new Headers({ 'content-type': 'application/json' }),
                });
                setFormSuccess(true);
              })}
            >
              <TextInput
                withAsterisk
                placeholder="Enter email to register"
                type="email"
                {...form.getInputProps('email')}
              />
              <Group mt="sm">
                <Button type="submit" color="goldengate">
                  Register
                </Button>
                <Link href="/contact" passHref>
                  <Anchor>Host an event</Anchor>
                </Link>
              </Group>
            </Box>
          )}
        </Box>
        <Box
          sx={(theme) => ({
            position: 'absolute',
            right: 0,
            width: '50%',
            height: '100%',
            [theme.fn.smallerThan('lg')]: {
              width: '70%',
            },
          })}
        >
          <Image
            src={gg}
            layout="fill"
            objectFit="cover"
            objectPosition="0 25%"
            alt="golden gate"
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
