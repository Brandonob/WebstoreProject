'use client';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import { Nav } from './components/Nav';
// import { Provider } from '@/components/ui/provider';
import { ChakraProvider } from '@chakra-ui/react';

import './styles/globals.css';
import styles from './styles/layout.module.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <section className={styles.container}>
          <StoreProvider>
            <ChakraProvider>
              <main className={styles.main}>{children}</main>
            </ChakraProvider>
          </StoreProvider>
        </section>
      </body>
    </html>
  );
}
