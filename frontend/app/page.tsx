'use client';
import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FormControl,
  FormLabel,
  Box,
  Button,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { Product, Order } from './types/types';

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const fetchOrders = async () => {
    // Replace with your API call
    const response = await fetch('/api/orders');
    const data = await response.json();
    setOrders(data);
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
      <Box p={5}>
        <Box as='h1' fontSize='2xl' mb={5}>
          Admin Page
        </Box>

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
              <Button
                colorScheme='blue'
                mr={3}
                onClick={handleAddOrEditProduct}
              >
                Save
              </Button>
              <Button variant='ghost' onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box as='h2' fontSize='xl' mt={8} mb={3}>
          Manage Orders
        </Box>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Customer Name</Th>
              <Th>Total Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.customerName}</Td>
                <Td>{order.totalAmount}</Td>
                <Td>{order.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
}

// import type { Metadata } from 'next';
// import {
//   Box,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   FormControl,
//   FormLabel,
//   Input,
//   useDisclosure,
// } from '@chakra-ui/react';
// import { Product, Order } from './types'; // Assuming these types are defined elsewhere

// export default function IndexPage() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Admin Page</h1>
//       <h2>Manage Products</h2>
//       <Button type='primary' onClick={() => setIsProductModalVisible(true)}>
//         Add Product
//       </Button>
//       <Table
//         dataSource={products}
//         columns={productColumns}
//         rowKey='id'
//         style={{ marginTop: '20px' }}
//       />

//       <Modal
//         title={currentProduct ? 'Edit Product' : 'Add Product'}
//         visible={isProductModalVisible}
//         onCancel={() => setIsProductModalVisible(false)}
//         onOk={() => form.submit()}
//       >
//         <Form form={form} layout='vertical' onFinish={handleAddOrEditProduct}>
//           <Form.Item
//             name='name'
//             label='Product Name'
//             rules={[
//               { required: true, message: 'Please enter the product name' },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name='price'
//             label='Price'
//             rules={[{ required: true, message: 'Please enter the price' }]}
//           >
//             <Input type='number' />
//           </Form.Item>
//           <Form.Item
//             name='stock'
//             label='Stock'
//             rules={[
//               { required: true, message: 'Please enter the stock quantity' },
//             ]}
//           >
//             <Input type='number' />
//           </Form.Item>
//         </Form>
//       </Modal>

//       <h2>Manage Orders</h2>
//       <Table
//         dataSource={orders}
//         columns={orderColumns}
//         rowKey='id'
//         style={{ marginTop: '20px' }}
//       />
//     </div>
//   );
// }

// export const metadata: Metadata = {
//   title: 'Redux Toolkit',
// };
