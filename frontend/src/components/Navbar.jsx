import {
  Box,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
      color={colorMode === 'light' ? 'gray.900' : 'gray.50'}
    >
      <Flex align="center" mr={5}>
        <Box p={2}>
          <Text fontWeight="bold" fontSize="xl">
            Emporium
          </Text>
        </Box>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Box>

      <Box
        display={{ base: 'block', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mr={4}
      >
        <Spacer />
        <Flex align="center" justify="flex-end">
          <Link to="/">
            <Text mr={4} fontWeight="bold">
              Home
            </Text>
          </Link>
          <Link to="/products">
            <Text fontWeight="bold">Products</Text>
          </Link>
        </Flex>
      </Box>

      <Box
        display={{ base: 'block', md: 'flex' }}
        mt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
