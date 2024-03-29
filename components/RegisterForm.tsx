import {
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import heart from '../public/images/heart.svg';

type FieldValues = {
  email: string;
  firstName: string;
  lastName: string;
  location: string;
  linkedin: string;
};

const RegisterHost = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formSuccess, setFormSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>();

  const onSubmit = async (values: FieldValues) => {
    await fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: new Headers({ 'content-type': 'application/json' }),
    });

    setFormSuccess(true);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          {formSuccess ? (
            <ModalBody>
              <VStack
                spacing={14}
                px={{ base: 5, md: 18 }}
                py={{ base: 12, md: 14 }}
                textAlign="center"
              >
                <Image src={heart} alt="heart" width={40} height={36} />
                <Heading my={6} fontFamily="Recoleta">
                  Thanks for registering, Please check your inbox.
                </Heading>
                <Button variant="outline" onClick={onClose} borderColor="#232325">
                  Close
                </Button>
              </VStack>
            </ModalBody>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody>
                <Heading my={6} fontFamily="Recoleta">
                  Register to SF Tech Week
                </Heading>
                <VStack spacing={6}>
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      {...register('email', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.firstName}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      {...register('firstName', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage>
                      {errors.firstName && errors.firstName.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.lastName}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      {...register('lastName', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage>
                      {errors.lastName && errors.lastName.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.location}>
                    <FormLabel>Location</FormLabel>
                    <Input
                      id="location"
                      placeholder="Location"
                      {...register('location', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage>
                      {errors.location && errors.location.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.linkedin}>
                    <FormLabel>LinkedIn</FormLabel>
                    <Input
                      id="linkedin"
                      placeholder="LinkedIn Url"
                      {...register('linkedin', {
                        required: 'This is required',
                      })}
                    />
                    <FormErrorMessage>
                      {errors.linkedin && errors.linkedin.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Text fontSize="sm" colorScheme="blackAlpha">
                    Information provided will be shared with SF Tech Week’s partners for the purpose
                    of sending event invites and other relevant information. We will not sell or
                    share this information with any third parties.
                  </Text>
                </VStack>
              </ModalBody>

              <ModalFooter>
                <HStack>
                  <Button variant="outline" onClick={onClose} borderColor="#232325">
                    Cancel
                  </Button>
                  <Button
                    colorScheme="blackAlpha"
                    bg="#232325"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </HStack>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterHost;
