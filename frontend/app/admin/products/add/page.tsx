'use client';
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
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { DynamicTabs } from '../../components/DynamicTabs';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  //   const [size, setSize] = useState('');
  const [image, setImage] = useState('');
  const [isActive, setIsActice] = useState(false);
  //   const [sizes, setSizes] = useState([{ size: '', quantity: '' }]);

  type FormEvent = React.FormEvent<HTMLFormElement>;

  //   const handleSizeChange = (index: number, field: string, value: string) => {
  //     const updatedSizes = sizes.map((s, i) =>
  //       i === index ? { ...s, [field]: value } : s
  //     );
  //     setSizes(updatedSizes);
  //   };

  //   const addSizeField = () => {
  //     setSizes([...sizes, { size: '', quantity: '' }]);
  //   };

  //   const removeSizeField = (index: number) => {
  //     setSizes(sizes.filter((_, i) => i !== index));
  //   };

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

          <FormControl id='variants'>
            <DynamicTabs />
          </FormControl>

          {/* <FormControl id='sizes'>
            <FormLabel>Sizes and Quantities</FormLabel>
            {sizes.map((size, index) => (
              <HStack key={index} spacing={4} mb={2}>
                <Input
                  placeholder='Size'
                  value={size.size}
                  onChange={(e) =>
                    handleSizeChange(index, 'size', e.target.value)
                  }
                />
                <Input
                  placeholder='Quantity'
                  type='number'
                  value={size.quantity}
                  onChange={(e) =>
                    handleSizeChange(index, 'quantity', e.target.value)
                  }
                />
                <IconButton
                  aria-label='Remove size'
                  icon={<CloseIcon />}
                  onClick={() => removeSizeField(index)}
                  size='sm'
                  colorScheme='red'
                />
              </HStack>
            ))}
            <Button
              leftIcon={<AddIcon />}
              onClick={addSizeField}
              size='sm'
              colorScheme='blue'
            >
              Add Size
            </Button>
          </FormControl> */}

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
