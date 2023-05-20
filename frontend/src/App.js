import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box position="fixed" top={0} left={0} right={0}>
          <Navbar />
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
