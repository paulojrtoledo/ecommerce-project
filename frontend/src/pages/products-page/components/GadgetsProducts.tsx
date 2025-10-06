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
import { Theme, useTheme } from '@mui/material/styles';

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
    name: 'Headset Wild Nature Pro',
    price: 'R$ 1.250,00',
    image: '/produtos/headset.jpg', // Atualize com seu caminho
  },
  {
    name: 'Teclado Silent Tech',
    price: 'R$ 900,00',
    image: '/produtos/teclado.jpg', // Atualize com seu caminho
  },
  {
    name: 'Mouse Precision v1',
    price: 'R$ 200,00',
    image: '/produtos/mouse.jpg', // Atualize com seu caminho
  },
  {
    name: 'Interface de Áudio Tech Pro',
    price: 'R$ 435,00',
    image: '/produtos/interface.jpg', // Atualize com seu caminho
  },
  {
    name: 'Controladora MIDI Function Tech',
    price: 'R$ 900,00',
    image: '/produtos/controladora.jpg', // Atualize com seu caminho
  },
  {
    name: 'Docking Station NTA',
    price: 'R$ 280,00',
    image: '/produtos/docking-station.jpg', // Atualize com seu caminho
  },
];

export default function HardwareProducts() {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
  

  const handleAddToCart = (productName: string) => {
    // Implementar lógica do carrinho
    console.log(`Adicionado: ${productName}`);
  };

  return (
    <Box id="GadgetsProducts" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: "text.secondary" }}
      >
      </Typography>
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

        {/* 🔹 SEU TEXTO DESCRITIVO AQUI */}

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