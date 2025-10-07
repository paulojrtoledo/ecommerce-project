import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useCart } from '../../../contexts/CartContext';
import type { CartItem } from '../../../contexts/CartContext';

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const products = [
  {
    id: 10,
    name: 'Headset Wild Nature Pro',
    price: 1250.00,
    quantity: 1,
    image: '/headset.webp',
  },
  {
    id: 11,
    name: 'Teclado Silent Tech',
    price: 900.00,
    quantity: 1,
    image: '/teclado.webp',
  },
  {
    id: 12,
    name: 'Mouse Precision v1',
    price: 200.00,
    quantity: 1,
    image: '/mouse.webp',
  },
  {
    id: 13,
    name: 'Interface de Áudio Tech Pro',
    price: 435.00,
    quantity: 1,
    image: '/interface.webp',
  },
  {
    id: 14,
    name: 'Drum Pad Function Tech',
    price: 900.00,
    quantity: 1,
    image: '/drum-pad.webp',
  },
  {
    id: 15,
    name: 'Docking Station NTA',
    price: 280.00,
    quantity: 1,
    image: '/docking-station.webp',
  },
];

interface GadgetsProductsProps {
  id?: string;
}

export default function GadgetsProducts(props: GadgetsProductsProps) {
  const { addItem } = useCart();

  const handleAddToCart = (product: CartItem) => {
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
            ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)"
            : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        py: 8,
      })}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 4 }}
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
          }}
        >
          Precisão e estilo para completar seu ambiente tech.
          <br/>
          Produtos testados e aprovados com garantia Nature Tech.
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard variant="outlined">
                <Box
                  sx={{
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    borderRadius: 2,
                    overflow: 'hidden',
                    backgroundColor: 'grey.50',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: 5,
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    color="primary" 
                    sx={{ mb: 2 }}
                  >
                    R$ {product.price.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleAddToCart(product)}
                  >
                    Adicionar ao Carrinho
                  </Button>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}