import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useCart } from '../../../contexts/CartContext';
import { useThemeContext } from '../../../contexts/ThemeContext'; 
import ProductCard from './ProductCard';

const products = [
  {
    id: 10,
    name: 'Headset Wild Nature Pro',
    price: 1250.00,
    image: '/headset.webp',
    description: 'Headset gamer com som surround 7.1 e cancelamento de ruído',
    category: 'Áudio'
  },
  {
    id: 11,
    name: 'Teclado Silent Tech',
    price: 900.00,
    image: '/teclado.webp',
    description: 'Teclado mecânico com switches silenciosos e iluminação RGB',
    category: 'Periféricos'
  },
  {
    id: 12,
    name: 'Mouse Precision v1',
    price: 200.00,
    image: '/mouse.webp',
    description: 'Mouse óptico com sensor de alta precisão e design ergonômico',
    category: 'Periféricos'
  },
  {
    id: 13,
    name: 'Interface de Áudio Tech Pro',
    price: 435.00,
    image: '/interface.webp',
    description: 'Interface de áudio profissional para gravação e produção musical',
    category: 'Áudio'
  },
  {
    id: 14,
    name: 'Drum Pad Function Tech',
    price: 900.00,
    image: '/drum-pad.webp',
    description: 'Drum pad MIDI com pads sensíveis à pressão para produção musical',
    category: 'Áudio'
  },
  {
    id: 15,
    name: 'Docking Station NTA',
    price: 280.00,
    image: '/docking-station.webp',
    description: 'Docking station com múltiplas portas para laptops e dispositivos',
    category: 'Acessórios'
  },
];

interface GadgetsProductsProps {
  id?: string;
}

export default function GadgetsProducts(props: GadgetsProductsProps) {
  const { addItem } = useCart();
  const { mode } = useThemeContext(); 

  console.log('🎮 GadgetsProducts - Mode:', mode); 

  const handleAddToCart = (product: any) => {
    console.log('Adicionando produto:', product);
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  return (
    <Box
      id={props.id}
      sx={{
        width: "100%",
        py: 18,
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 4,
            pt: 4,
            color: 'text.primary',
            fontWeight: 'bold',
          }}
        >
          Periféricos e Acessórios
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            color: 'text.secondary',
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          Precisão e estilo para completar seu ambiente tech.
          <br/>
          Produtos testados e aprovados com garantia Nature Tech.
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}