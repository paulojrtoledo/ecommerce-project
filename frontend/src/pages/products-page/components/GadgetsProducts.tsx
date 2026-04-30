import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useCart } from '../../../contexts/CartContext';
import ProductCard from './ProductCard';
import { getProducts } from '../../../services/productService';

interface GadgetsProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const GADGET_CATEGORIES = ['Áudio', 'Periféricos', 'Acessórios'];

interface GadgetsProductsProps {
  id?: string;
}

export default function GadgetsProducts(props: GadgetsProductsProps) {
  const { addItem } = useCart();
  const [products, setProducts] = React.useState<GadgetsProduct[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiProducts = await getProducts();
        const filteredAndMapped = apiProducts
          .filter((product) => GADGET_CATEGORIES.includes(product.category))
          .map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.imageUrl || '/headset.webp',
            description: product.description || 'Produto',
          }));

        setProducts(filteredAndMapped);
      } catch (err) {
        console.error('Erro ao buscar produtos no backend:', err);
        setError('Nao foi possivel carregar os produtos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: GadgetsProduct) => {
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
            lineHeight: 1.6,
          }}
        >
          Precisão e estilo para completar seu ambiente tech.
          <br/>
          Produtos testados e aprovados com garantia Nature Tech.
        </Typography>

        {loading && (
          <Typography align="center" sx={{ color: 'text.secondary', mb: 4 }}>
            Carregando produtos...
          </Typography>
        )}

        {error && (
          <Typography align="center" sx={{ color: 'text.secondary', mb: 4 }}>
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