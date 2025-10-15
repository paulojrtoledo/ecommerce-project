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
  const { mode } = useThemeContext(); 

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
            lineHeight: 1.6,
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