import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ProductDetails from '../components/ProductDetails';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/products');
      const data = await response.json();

      if (response.ok) {
        setProducts(data);
      }
    };

    fetchProducts();
  }, [products]);

  return (
    <Container maxW="container.xl" centerContent mt="10%">
      <Grid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: '2fr 1fr',
        }}
        gap={6}
        justifyContent="center"
        alignItems="flex-start"
      >
        <GridItem>
          <Grid
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={6}
            justifyContent="center"
            alignItems="center"
          >
            {products.map(product => (
              <GridItem key={product._id}>
                <ProductDetails product={product} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem>
          <ProductForm />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Products;
