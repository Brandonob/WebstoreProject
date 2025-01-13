import { Product } from '@/app/types/types';
import {
  Box,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const ManageProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch products and orders from API
    // fetchProducts();
    // fetchOrders();
  }, []);

  const fetchProducts = async () => {
    // Replace with your API call
    const response = await fetch('/api/products');
    const data = await response.json();
    setProducts(data);
  };

  const handleAddOrEditProduct = () => {
    // Handle product addition or editing
    if (currentProduct) {
      console.log('Updating product:', currentProduct);
    } else {
      console.log('Adding product:', currentProduct);
    }
    onClose();
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    onOpen();
  };

  return (
    <div>
      <Box as='h2' fontSize='xl' mb={3}>
        Manage Products
      </Box>
      <Button colorScheme='blue' onClick={onOpen} mb={5}>
        Add Product
      </Button>

      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Stock</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.price}</Td>
              <Td>{product.stock}</Td>
              <Td>
                <Button size='sm' onClick={() => handleEditProduct(product)}>
                  Edit
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

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
};
