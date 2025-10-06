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
    name: 'Hub Doméstico NTA',
    price: 'R$ 4.150,00',
    image: '/produtos/hub.jpg', 
  },
  {
    name: 'Smart Watch GetFree',
    price: 'R$ 890,00',
    image: '/produtos/smartwatch.jpg', 
  },
  {
    name: 'Câmera Precision Nature',
    price: 'R$ 670,00',
    image: '/produtos/camera.jpg', 
  },
  {
    name: 'Fone de Ouvido NT True',
    price: 'R$ 260,00',
    image: '/produtos/fone-de-ouvido.jpg', 
  },
  {
    name: 'Home Alarme v1',
    price: 'R$ 790,00',
    image: '/produtos/home-alarme.jpg', 
  },
  {
    name: 'Sensores Smart NTA',
    price: 'R$ 1100,00',
    image: '/produtos/sensores-smart.jpg', 
  },

];

interface SmartDevicesProps {
  id?: string;
}


export default function SmartDevicesProducts(props: SmartDevicesProps) {
  const handleAddToCart = (productName: string) => {
    // Implementar lógica do carrinho
    console.log(`Adicionado: ${productName}`);
  };

  return (
    <Box id={props.id}
      sx={{
        width: '100%',
        py: 8,
        backgroundColor: 'background.default',
      }}
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