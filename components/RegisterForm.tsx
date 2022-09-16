import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input
                  id="name"
                  placeholder="name"
                  {...register('email', {
                    required: 'This is required',
                  })}
                />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>
              <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                Submit
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HostForm;
