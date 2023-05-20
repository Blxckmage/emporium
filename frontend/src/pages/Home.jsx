import { Button, Container, Text, VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container
      maxW="100%"
      centerContent
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={8} textAlign="center">
        <Text fontSize="5xl">Welcome to My Shop</Text>
        <Text fontSize="xl" maxW="md">
          We offer a wide variety of products at great prices. Check out our
          latest arrivals below.
        </Text>
        <Button colorScheme="teal" size="lg" px={8} as="a" href="/products">
          Shop Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Home;
