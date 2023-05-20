import { Container } from '@chakra-ui/react';
import ProductDetails from '../components/ProductDetails';

const Product = product => {
  return (
    <Container maxW={'container.lg'}>
      <ProductDetails />
    </Container>
  );
};

export default Product;
