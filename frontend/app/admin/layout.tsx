'use client';
import type { ReactNode } from 'react';
import { StoreProvider } from '../StoreProvider';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { LeftAccordion } from './components/LeftAccordion';

import '../styles/globals.css';
import styles from '../styles/layout.module.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <section>
          <StoreProvider>
            <ChakraProvider>
              <Grid
                templateAreas={`"nav main"`}
                // gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'250px 1fr'}
                h='100vh'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
              >
                <GridItem
                  as='nav'
                  pl='2'
                  // bg='orange.300'
                  area={'nav'}
                >
                  <LeftAccordion />
                </GridItem>
                <GridItem
                  as='main'
                  minHeight='100vh'
                  pl='2'
                  //   bg='pink.300'
                  area={'main'}
                >
                  <main>{children}</main>
                </GridItem>
              </Grid>
            </ChakraProvider>
          </StoreProvider>
        </section>
      </body>
    </html>
  );
}
