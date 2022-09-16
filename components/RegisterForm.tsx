import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

type Render = ({
  isOpen,
  onOpen,
  onClose,
}: Pick<ReturnType<typeof useDisclosure>, 'onClose' | 'isOpen' | 'onOpen'>) => React.ReactNode;

type FieldValues = { email: string; firstName: string; lastName: string; location: string };

const RegisterHost = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>();

  const onSubmit = (values: FieldValues) => {};

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Heading my={6} fontFamily="Recoleta">
                Register to SF Tech Week
              </Heading>
              <VStack spacing={6}>
                <FormControl isInvalid={!!errors.email}>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    variant="flushed"
                    {...register('email', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.firstName}>
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    variant="flushed"
                    {...register('firstName', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.lastName}>
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    variant="flushed"
                    {...register('lastName', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.location}>
                  <Input
                    id="location"
                    placeholder="Location"
                    variant="flushed"
                    {...register('location', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.location && errors.location.message}</FormErrorMessage>
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button
                mt={4}
                colorScheme="blackAlpha"
                bg="black"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterHost;
