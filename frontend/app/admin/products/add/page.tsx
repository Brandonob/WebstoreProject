import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
  Select,
  Switch,
} from '@chakra-ui/react';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  //   const [size, setSize] = useState('');
  const [image, setImage] = useState('');
  const [isActive, setIsActice] = useState(false);

  type FormEvent = React.FormEvent<HTMLFormElement>;

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };
  const handleSwitch = () => {
    setIsActice(!isActive);
  };

  return (
    <Box
      maxW='800px'
      mx='auto'
      mt={8}
      p={6}
      bg='white'
      boxShadow='lg'
      borderRadius='md'
    >
      <Heading as='h1' size='lg' mb={6}>
        Add New Product
      </Heading>
      <VStack spacing={4} align='stretch'>
        <form onSubmit={handleSubmit}>
          <FormControl id='product-name' isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input
              placeholder='Enter product name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id='description'>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder='Enter product description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl id='price' isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              type='number'
              placeholder='Enter product price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormControl>

          <FormControl id='stock' isRequired>
            <FormLabel>Stock Quantity</FormLabel>
            <Input
              type='number'
              placeholder='Enter stock quantity'
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </FormControl>

          {/* <FormControl id='size'>
            <FormLabel>Size</FormLabel>
            <Select placeholder='Select size'>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </Select>
          </FormControl> */}

          <FormControl id='product-image'>
            <FormLabel>Product Image URL</FormLabel>
            <Input
              type='url'
              placeholder='Enter image URL'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </FormControl>

          <FormControl display='flex' alignItems='center' id='active'>
            <FormLabel mb='0'>Active</FormLabel>
            <Switch
              colorScheme='green'
              defaultChecked={false}
              onChange={handleSwitch}
            />
          </FormControl>

          <Button colorScheme='blue' size='lg' width='full' type='submit'>
            Add Product
          </Button>
        </form>
      </VStack>
    </Box>
  );
}
