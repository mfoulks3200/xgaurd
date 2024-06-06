import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import Navbar from '../components/navbar/Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box margin="0 auto" maxWidth="90vw" transition="0.5s ease-out">
        <Meta />
        <Flex wrap="wrap" margin="8" minHeight="calc( 100vh - 180px)">
          <Box width="full" as="main">
            {children}
          </Box>
        </Flex>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
