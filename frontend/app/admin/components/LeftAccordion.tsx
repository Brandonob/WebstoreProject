import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  VStack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

export const LeftAccordion = () => {
  return (
    <Box
      position='fixed'
      left={0}
      top={0}
      height='100vh'
      width='250px'
      bg='gray.800'
      color='white'
      p={4}
      boxShadow='lg'
    >
      <Text fontSize='lg' fontWeight='bold' mb={4}>
        Navigation
      </Text>
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem>
          <AccordionButton _expanded={{ bg: 'gray.700', color: 'white' }}>
            <Box flex='1' textAlign='left'>
              Products
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align='start'>
              <Link href='/products/add'>Add Product</Link>
              <Link href='/products/list'>Product List</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton _expanded={{ bg: 'gray.700', color: 'white' }}>
            <Box flex='1' textAlign='left'>
              Orders
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align='start'>
              <Link href='/orders/list'>Order List</Link>
              <Link href='/orders/details'>Order Details</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton _expanded={{ bg: 'gray.700', color: 'white' }}>
            <Box flex='1' textAlign='left'>
              Settings
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align='start'>
              <Link href='/settings/profile'>Profile</Link>
              <Link href='/settings/preferences'>Preferences</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
