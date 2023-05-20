import { Box, Button, Heading, Text } from '@chakra-ui/react';

const ProductDetails = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="100%"
      boxShadow="md"
      transition="all 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline" mb="2">
          <Text
            fontSize="sm"
            color="gray.500"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            {product.category}
          </Text>
        </Box>

        <Heading as="h4" size="md" mb="2">
          {product.name}
        </Heading>

        <Text fontSize="md" mb="4" noOfLines={3}>
          {product.description}
        </Text>

        <Box d="flex" alignItems="baseline">
          <Text fontWeight="semibold" fontSize="xl" mr="2">
            Rp.
          </Text>
          <Text fontWeight="semibold" fontSize="xl">
            {product.price}
          </Text>
        </Box>

        <Button colorScheme="teal" mt="4">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
