import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useCart } from '../../../contexts/CartContext';
import ProductCard from './ProductCard';
import { getProducts } from '../../../services/productService';

interface HardwareProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface HardwareProductsProps {
  id?: string;
}

export default function HardwareProducts(props: HardwareProductsProps) {
  const { addItem } = useCart();
  const [products, setProducts] = React.useState<HardwareProduct[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiProducts = await getProducts();
        const mappedProducts: HardwareProduct[] = apiProducts.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.imageUrl && product.imageUrl.trim() !== '' ? product.imageUrl : '/placadevideo-nt.webp',
          description: product.description || 'Produto',
        }));
        setProducts(mappedProducts);
      } catch (err) {
        console.error('Erro ao buscar produtos no backend:', err);
        setError('Nao foi possivel carregar os produtos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: HardwareProduct) => {
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
            color: theme => theme.palette.mode === "dark" ? "white" : "#98c9a3",
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
            color: '#FFFFFF',
            fontSize: '1.1rem',
          }}
        >
          Descubra os melhores componentes para montar seu setup dos sonhos.
          <br />
          Produtos testados e aprovados com garantia Nature Tech.
        </Typography>

        {loading && (
          <Typography align="center" sx={{ color: '#FFFFFF', mb: 4 }}>
            Carregando produtos...
          </Typography>
        )}

        {error && (
          <Typography align="center" sx={{ color: '#FFFFFF', mb: 4 }}>
            {error}
          </Typography>
        )}

        {!loading && !error && (
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
        )}
      </Container>
    </Box>
  );
}