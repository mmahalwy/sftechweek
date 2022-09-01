import times from 'lodash/times';
import {
  Alert,
  AppShell,
  Box,
  Button,
  Checkbox,
  Container,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker, TimeInput } from '@mantine/dates';
import React, { useState } from 'react';
import Logo from '../components/Logo';
import dayjs from 'dayjs';

const isRequired = (value: string) => (value ? null : 'This field is required');

const timeInputData = times(48).map((i) =>
  dayjs()
    .startOf('day')
    .add(i * 30, 'minute')
    .format('h:mm A'),
);

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: '',
      company: '',
      email: '',
      linkedin: '',
      eventName: '',
      isEventOrganizer: true,
      eventHosts: [],
      date: '',
      startTime: '',
      endTime: '',
      eventUrl: '',
      location: '',
      capacity: 20,
      imageUrl: '',
      eventDescription: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: isRequired,
      company: isRequired,
      linkedin: isRequired,
      eventName: isRequired,
      date: isRequired,
      startTime: isRequired,
      endTime: isRequired,
      eventUrl: isRequired,
      location: isRequired,
      imageUrl: isRequired,
      eventDescription: isRequired,
    },
  });

  const [formSuccess, setFormSuccess] = useState(false);

  return (
    <AppShell>
      <Container size="sm">
        <Box sx={{ display: 'flex', justifyContent: 'center' }} mb="md">
          <Logo width={200} height={200} />
        </Box>
        {formSuccess ? (
          <Alert color="green" title="Thank you!" mt="lg">
            We will be in touch soon.
          </Alert>
        ) : (
          <Box
            component="form"
            onSubmit={form.onSubmit(async (values) => {
              await fetch('/api/host-event', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: new Headers({ 'content-type': 'application/json' }),
              });
              setFormSuccess(true);
            })}
          >
            <Stack>
              <TextInput
                withAsterisk
                placeholder="Full Name"
                label="Full Name"
                {...form.getInputProps('name')}
              />
              <TextInput
                withAsterisk
                placeholder="Company Name"
                label="Company Name"
                {...form.getInputProps('company')}
              />

              <TextInput
                withAsterisk
                placeholder="Email"
                label="Email"
                type="email"
                {...form.getInputProps('email')}
              />
              <TextInput
                withAsterisk
                placeholder="Url"
                label="LinkedIn"
                type="url"
                {...form.getInputProps('linkedin')}
              />
              <TextInput
                withAsterisk
                placeholder="Name"
                label="Event Name"
                {...form.getInputProps('eventName')}
              />
              <Textarea
                withAsterisk
                placeholder="..."
                label="Event Description"
                {...form.getInputProps('eventDescription')}
              />
              <Checkbox
                label="Are you the event organizer?"
                {...form.getInputProps('isEventOrganizer', { type: 'checkbox' })}
              />
              <DatePicker
                withAsterisk
                placeholder="Date"
                label="Event Date"
                {...form.getInputProps('date')}
              />
              <Select
                withAsterisk
                data={timeInputData}
                placeholder="Start"
                label="Start Time"
                {...form.getInputProps('startTime')}
              />
              <Select
                withAsterisk
                data={timeInputData}
                placeholder="End"
                label="End Time"
                {...form.getInputProps('endTime')}
              />
              <TextInput
                withAsterisk
                placeholder="Url"
                label="Event Url"
                description="Lu.ma preferred"
                type="url"
                {...form.getInputProps('eventUrl')}
              />
              <TextInput
                withAsterisk
                placeholder="Event Location"
                label="Event Location"
                {...form.getInputProps('location')}
              />
              <NumberInput
                withAsterisk
                placeholder="Event Capacity"
                label="Event Capacity"
                {...form.getInputProps('capacity')}
              />
              <TextInput
                withAsterisk
                placeholder="Url"
                label="Event Image Url"
                type="url"
                {...form.getInputProps('imageUrl')}
              />
              <Button type="submit" color="goldengate">
                Submit
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </AppShell>
  );
};

export default Contact;
