import { Box, Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';

const StatBox = () => {
  return (
    <Box boxShadow='base' p='6' rounded='md' flexBasis="100%">
      <Stat>
        <StatLabel>Sent</StatLabel>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          23.36%
        </StatHelpText>
      </Stat>
    </Box>
  );
}

const Home = () => {
  return (
    <Flex
      flexDir="column"
      gap="16px"
    >
      <Flex
        flexDir="row"
        justifyContent="space-between"
        flexGrow={1}
        gap="16px"
      >
        <StatBox />
        <StatBox />
        <StatBox />
        <StatBox />
      </Flex>

      <Box boxShadow='base' p='6' rounded='md' flexBasis="100%" minHeight="300px">
      </Box>
    </Flex>
  );
};

export default Home;
