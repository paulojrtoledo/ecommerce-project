import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useCart } from '../../../contexts/CartContext';
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
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          theme.palette.mode === "dark"
            ? "radial-gradient(ellipse 80% 50% at 50% -20%, #1a331a, transparent)"
            : "radial-gradient(ellipse 90% 80% at 50% -20%, #1a331a, transparent)",
        py: 18,
        backgroundColor: theme.palette.mode === "dark"
          ? "hsl(0, 0%, 0%)"
          : "#98c9a3",
      })}
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
            color: theme => theme.palette.mode === "dark" ? "white" : "#98c9a3",
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
            color: '#FFFFFF',
            fontSize: '1.1rem',
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