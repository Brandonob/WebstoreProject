import { Box, Text, Image, Stack, Badge, Button } from '@chakra-ui/react';

interface ProductCardProps {
  name: string;
  imageUrl: string;
  size: string;
  stock: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  size,
  stock,
}) => {
  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='md'
      bg='white'
      p={4}
    >
      <Image src={imageUrl} alt={name} borderRadius='md' />

      <Stack mt={4} spacing={3}>
        <Text fontSize='xl' fontWeight='semibold' lineHeight='short'>
          {name}
        </Text>

        <Badge colorScheme={stock > 0 ? 'green' : 'red'}>
          {stock > 0 ? `${stock} in stock` : 'Out of stock'}
        </Badge>

        <Text>Size: {size}</Text>

        <Button colorScheme='blue' isDisabled={stock === 0}>
          {stock > 0 ? 'Add to Order' : 'Unavailable'}
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductCard;
