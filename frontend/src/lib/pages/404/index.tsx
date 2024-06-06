import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate('/');

  return (
    <Flex
      gap={16}
      textAlign="center"
      flexDir="column"
      justifyContent="center"
      height="100%"
    >
      <Heading>Page not Found</Heading>
      <Box>
        <Button onClick={handleBackToHome}>Let&apos;s Head Back</Button>
      </Box>
    </Flex>
  );
};

export default Page404;
