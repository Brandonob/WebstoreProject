// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Form, Input } from 'antd';
// import { Product, Order } from './types'; // Assuming these types are defined elsewhere

// const AdminPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [isProductModalVisible, setIsProductModalVisible] = useState(false);
//   const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     // Fetch products and orders from API
//     fetchProducts();
//     fetchOrders();
//   }, []);

//   const fetchProducts = async () => {
//     // Replace with your API call
//     const response = await fetch('/api/products');
//     const data = await response.json();
//     setProducts(data);
//   };

//   const fetchOrders = async () => {
//     // Replace with your API call
//     const response = await fetch('/api/orders');
//     const data = await response.json();
//     setOrders(data);
//   };

//   const handleAddOrEditProduct = (values: Product) => {
//     if (currentProduct) {
//       // Update product API call
//       console.log('Updating product:', values);
//     } else {
//       // Add product API call
//       console.log('Adding product:', values);
//     }
//     setIsProductModalVisible(false);
//     form.resetFields();
//   };

//   const handleEditProduct = (product: Product) => {
//     setCurrentProduct(product);
//     form.setFieldsValue(product);
//     setIsProductModalVisible(true);
//   };

//   const productColumns = [
//     { title: 'Name', dataIndex: 'name', key: 'name' },
//     { title: 'Price', dataIndex: 'price', key: 'price' },
//     { title: 'Stock', dataIndex: 'stock', key: 'stock' },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_: any, record: Product) => (
//         <Button onClick={() => handleEditProduct(record)}>Edit</Button>
//       ),
//     },
//   ];

//   const orderColumns = [
//     { title: 'Order ID', dataIndex: 'id', key: 'id' },
//     { title: 'Customer Name', dataIndex: 'customerName', key: 'customerName' },
//     { title: 'Total Amount', dataIndex: 'totalAmount', key: 'totalAmount' },
//     { title: 'Status', dataIndex: 'status', key: 'status' },
//   ];

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
// };

// export default AdminPage;
