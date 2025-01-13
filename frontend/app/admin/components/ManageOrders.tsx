import { Order } from '@/app/types/types';
import { Box, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const ManageOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch products and orders from API
    // fetchProducts();
    // fetchOrders();
  }, []);

  const fetchOrders = async () => {
    // Replace with your API call
    const response = await fetch('/api/orders');
    const data = await response.json();
    setOrders(data);
  };
  return (
    <div>
      {/* <Box p={5}> */}
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
      {/* </Box> */}
    </div>
  );
};
