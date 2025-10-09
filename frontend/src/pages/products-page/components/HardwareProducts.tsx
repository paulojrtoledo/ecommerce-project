import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useCart } from '../../../contexts/CartContext';
import ProductCard from './ProductCard';

const products = [
  {
    id: 14228313,
    name: 'Placa de Vídeo NT 4060',
    price: 3500,
    image: '/placadevideo-nt.webp',
    description: 'Placa de vídeo de alta performance para gamers e criadores de conteúdo',
    category: 'Hardware'
  },
  {
    id: 13228314,
    name: 'Processador Nature Tech v3',
    price: 2400,
    image: '/processador.webp',
    description: 'Processador de última geração com 8 núcleos para multitarefa intensiva',
    category: 'Hardware'
  },
  {
    id: 13228315,
    name: 'SSD Nature Tech 2TB',
    price: 720,
    image: '/ssd.webp',
    description: 'SSD NVMe ultrarrápido para carregamento instantâneo de aplicações',
    category: 'Armazenamento'
  },
  {
    id: 13228316,
    name: 'Mother Nature Placa Mãe v2',
    price: 3000,
    image: '/placamae.webp',
    description: 'Placa mãe ATX com suporte às mais recentes tecnologias e expansibilidade',
    category: 'Hardware'
  },
  {
    id: 13228317,
    name: 'Monitor Nature Sounds',
    price: 800,
    image: '/monitor.webp',
    description: 'Monitor 24" Full HD com cores vibrantes e taxa de atualização de 144Hz',
    category: 'Periféricos'
  },
  {
    id: 13228318,
    name: 'Gabinete Forest Black',
    price: 540,
    image: '/gabinete.webp',
    description: 'Gabinete mid-tower elegante com excelente fluxo de ar e iluminação RGB',
    category: 'Acessórios'
  },  
];

interface HardwareProductsProps {
  id?: string;
}

export default function HardwareProducts(props: HardwareProductsProps) {
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