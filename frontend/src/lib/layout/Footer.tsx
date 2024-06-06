import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
      marginBottom={8}
    >
      <Text fontSize="xs">
        {new Date().getFullYear()} -{' '}
        <Link href="https://github.com/mfoulks3200/xguard" isExternal>
          X Guard
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
