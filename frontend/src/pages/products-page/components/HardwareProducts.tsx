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
    id: 14228313,
    name: 'Placa de Vídeo Nature Tech 4060',
    price: 3500,
    quantity: 1,
    image: '/placadevideo-nt.webp',
  },
  {
    id: 13228314,
    name: 'Processador Nature Tech v3',
    price: 2400,
    quantity: 1,
    image: '/processador.webp',
  },
  {
    id: 13228315,
    name: 'SSD Nature Tech 2TB',
    price: 720,
    quantity: 1,
    image: '/ssd.webp',
  },
  {
    id: 13228316,
    name: 'Mother Nature Placa Mãe v2',
    price: 3000,
    quantity: 1,
    image: '/placamae.webp',
  },
  {
    id: 13228317,
    name: 'Monitor Nature Sounds',
    price: 800,
    quantity: 1,
    image: '/monitor.webp',
  },
  {
    id: 13228318,
    name: 'Gabinete Forest Black',
    price: 540,
    quantity: 1,
    image: 'gabinete.webp',
  },
];

interface HardwareProductsProps {
  id?: string;
}

export default function HardwareProducts(props: HardwareProductsProps) {
  const { addItem } = useCart();

  const handleAddToCart = (product: CartItem) => {
    console.log('Adicionando produto:', product); // Para debug
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
        py: 18, 
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
          }}
        >
          Computação & Hardware
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
          Descubra os melhores componentes para montar seu setup dos sonhos.
          <br />
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