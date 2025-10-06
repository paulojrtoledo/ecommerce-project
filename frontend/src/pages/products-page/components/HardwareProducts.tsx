import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

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
    name: 'Placa de Vídeo Nature Tech 4060',
    price: 'R$ 3.500,00',
    image: '/produtos/placa-video-4060.jpg',
  },
  {
    name: 'Processador Nature Tech v3',
    price: 'R$ 2.400,00',
    image: '/produtos/processador-v3.jpg',
  },
  {
    name: 'SSD Nature Tech 2TB',
    price: 'R$ 720,00',
    image: '/produtos/ssd-2tb.jpg',
  },
  {
    name: 'Mother Nature Placa Mãe v2',
    price: 'R$ 3.000,00',
    image: '/produtos/placa-mae.jpg',
  },
  {
    name: 'Monitor Nature Sounds',
    price: 'R$ 800,00',
    image: '/produtos/monitor.jpg',
  },
  {
    name: 'Gabinete Forest Black',
    price: 'R$ 540,00',
    image: '/produtos/gabinete.jpg',
  },
];

export default function HardwareProducts() {
  const handleAddToCart = (productName: string) => {
    console.log(`Adicionado: ${productName}`);
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          theme.palette.mode === "dark"
            ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)"
            : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
      })}
    >
      <Container maxWidth="lg">
        {/* TÍTULO PRINCIPAL ÚNICO */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ 
            mb: 4, // Reduzi a margem inferior
            pt: 24, // Adicionei padding top para afastar do header
          }}
        >
          Computação & Hardware
        </Typography>

        {/* SUBTÍTULO DESCRITIVO */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            color: 'text.secondary',
            fontSize: '1.1rem', // Tamanho levemente aumentado
          }}
        >
          Descubra os melhores componentes para montar seu setup dos sonhos.
          <br/>
          Produtos testados e aprovados com garantia Nature Tech.
        </Typography>

        {/* GRID DE PRODUTOS */}
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProductCard variant="outlined">
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleAddToCart(product.name)}
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