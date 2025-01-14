'use client';
import {
  Button,
  FormControl,
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
import ProductCard from '../components/ProductCard';
import { Product } from '@/app/types/types';
import { useState } from 'react';

export default function ProductsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const handleAddOrEditProduct = () => {
    // Handle product addition or editing
    if (currentProduct) {
      console.log('Updating product:', currentProduct);
    } else {
      console.log('Adding product:', currentProduct);
    }
    onClose();
  };
  return (
    <div>
      ProductsPage
      <Button colorScheme='blue' onClick={onOpen} mb={5}>
        Add Product
      </Button>
      <ProductCard name='Chrome Hearts Hoodie' imageUrl='' size='M' stock={5} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {currentProduct ? 'Edit Product' : 'Add Product'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id='name' mb={4}>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder='Enter product name'
                value={currentProduct?.name || ''}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct!,
                    name: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl id='price' mb={4}>
              <FormLabel>Price</FormLabel>
              <Input
                type='number'
                placeholder='Enter product price'
                value={currentProduct?.price || ''}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct!,
                    price: +e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl id='stock' mb={4}>
              <FormLabel>Stock</FormLabel>
              <Input
                type='number'
                placeholder='Enter stock quantity'
                value={currentProduct?.stock || ''}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct!,
                    stock: +e.target.value,
                  })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleAddOrEditProduct}>
              Save
            </Button>
            <Button variant='ghost' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
