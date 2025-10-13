import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useCart } from '../../../contexts/CartContext';
import ProductCard from './ProductCard';

const products = [
  {
    id: 16,
    name: 'Hub Doméstico NTA',
    price: 4150.00,
    image: '/hub.jpeg',
    description: 'Hub central para automação residencial e controle de dispositivos smart',
    category: 'Casa Inteligente'
  },
  {
    id: 17,
    name: 'Smart Watch GetFree',
    price: 890.00,
    image: '/smart-watch.jpeg',
    description: 'Relógio inteligente com monitoramento de saúde e notificações',
    category: 'Wearables'
  },
  {
    id: 18,
    name: 'Câmera Precision Nature',
    price: 670.00,
    image: '/camera.jpeg',
    description: 'Câmera de segurança com visão noturna e detecção de movimento',
    category: 'Segurança'
  },
  {
    id: 19,
    name: 'Fone de Ouvido NT True',
    price: 260.00,
    image: '/fone-de-ouvido.jpeg',
    description: 'Fones wireless com cancelamento de ruído e som de alta qualidade',
    category: 'Áudio'
  },
  {
    id: 20,
    name: 'Home Alarm v1',
    price: 790.00,
    image: '/home-alarm.jpeg',
    description: 'Sistema de alarme residencial com sensores e controle remoto',
    category: 'Segurança'
  },
  {
    id: 21,
    name: 'Sensor Smart NTA',
    price: 1100.00,
    image: '/smart-sensor.jpeg',
    description: 'Sensor multipropósito para monitoramento ambiental e de presença',
    category: 'Casa Inteligente'
  },
];

interface SmartDevicesProps {
  id?: string;
}

export default function SmartDevicesProducts(props: SmartDevicesProps) {
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
          Dispositivos Inteligentes
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
          Soluções smart que transformam sua rotina e seu ambiente.
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