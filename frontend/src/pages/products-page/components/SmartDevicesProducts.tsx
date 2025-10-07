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
    id: 16,
    name: 'Hub Doméstico NTA',
    price: 4150.00,
    quantity: 1,
    image: '/hub.jpeg',
  },
  {
    id: 17,
    name: 'Smart Watch GetFree',
    price: 890.00,
    quantity: 1,
    image: '/smart-watch.jpeg',
  },
  {
    id: 18,
    name: 'Câmera Precision Nature',
    price: 670.00,
    quantity: 1,
    image: '/camera.jpeg',
  },
  {
    id: 19,
    name: 'Fone de Ouvido NT True',
    price: 260.00,
    quantity: 1,
    image: '/fone-de-ouvido.jpeg',
  },
  {
    id: 20,
    name: 'Home Alarm v1',
    price: 790.00,
    quantity: 1,
    image: '/home-alarm.jpeg',
  },
  {
    id: 21,
    name: 'Sensor Smart NTA',
    price: 1100.00,
    quantity: 1,
    image: '/smart-sensor.jpeg',
  },
];

interface SmartDevicesProps {
  id?: string;
}

export default function SmartDevicesProducts(props: SmartDevicesProps) {
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
          Dispositivos Inteligentes
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
          Soluções smart que transformam sua rotina e seu ambiente.
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