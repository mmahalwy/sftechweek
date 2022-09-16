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
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

type Render = ({
  isOpen,
  onOpen,
  onClose,
}: Pick<ReturnType<typeof useDisclosure>, 'onClose' | 'isOpen' | 'onOpen'>) => React.ReactNode;

const HostForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string }>();

  const onSubmit = (values: { email: string }) => {};

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Heading my={6} fontFamily="Recoleta">
                Register to host an event
              </Heading>
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

export default HostForm;
