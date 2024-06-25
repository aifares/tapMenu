import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, description, imageUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <>
      <Box onClick={onOpen} cursor="pointer">
        <Flex justifyContent="space-between" alignItems="center" p={4}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">{name}</Text>
            <Text fontSize="md" color="gray.500">{price}</Text>
          </Box>
          <Image src={imageUrl} boxSize="100px" borderRadius="md" objectFit="cover" />
        </Flex>
        <Divider />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={imageUrl} boxSize="300px" borderRadius="md" objectFit="cover" mb={4} />
            <Text fontSize="lg">{description}</Text>
            <Text fontSize="2xl" mt={4} fontWeight="bold">{price}</Text>
          </ModalBody>
          <ModalFooter>
            <Flex alignItems="center" mr={4}>
              <Button size="sm" onClick={decrement}>-</Button>
              <Text mx={2} w={8} textAlign="center">{quantity}</Text>
              <Button size="sm" onClick={increment}>+</Button>
            </Flex>
            <Button colorScheme="teal" onClick={() => console.log(`${quantity} ${name}(s) added to cart`)}>Add to Cart</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuItem;
