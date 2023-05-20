import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const product = { name, category, description, price };

    const response = await fetch('/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = response.json();

    if (response.ok) {
      setName('');
      setCategory('');
      setDescription('');
      setPrice('');
      console.log('new product added', json);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="category" isRequired>
        <FormLabel>Category</FormLabel>
        <Input
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
      </FormControl>

      <FormControl id="description" mt={4} isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </FormControl>

      <FormControl id="price" mt={4} isRequired>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit" onSubmit={handleSubmit}>
        Add Product
      </Button>
    </form>
  );
};

export default ProductForm;
