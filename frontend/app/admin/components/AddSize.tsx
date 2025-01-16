import { CloseIcon, AddIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  IconButton,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const AddSize = () => {
  const [sizes, setSizes] = useState([{ size: '', quantity: '' }]);

  const handleSizeChange = (index: number, field: string, value: string) => {
    const updatedSizes = sizes.map((s, i) =>
      i === index ? { ...s, [field]: value } : s
    );
    setSizes(updatedSizes);
  };

  const addSizeField = () => {
    setSizes([...sizes, { size: '', quantity: '' }]);
  };

  const removeSizeField = (index: number) => {
    setSizes(sizes.filter((_, i) => i !== index));
  };
  return (
    <>
      <FormControl id='sizes'>
        <FormLabel>Sizes and Quantities</FormLabel>
        {sizes.map((size, index) => (
          <HStack key={index} spacing={4} mb={2}>
            <Input
              placeholder='Size'
              value={size.size}
              onChange={(e) => handleSizeChange(index, 'size', e.target.value)}
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
      </FormControl>
    </>
  );
};
