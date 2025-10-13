import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../home-page/components/AppAppBar';
import Footer from '../home-page/components/Footer';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    alpha,
    styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../contexts/FavoritesContext';
import ProductCard from '../products-page/components/ProductCard';
import { useCart } from '../../contexts/CartContext';

const StyledContentBox = styled(Box)(({ theme }) => ({
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    boxShadow: theme.shadows[1],
    padding: '24px',
    marginTop: '20px',
}));

export default function FavoritesPage(props: { disableCustomTheme?: boolean }) {
    const { favorites } = useFavorites();
    const { addItem } = useCart();

    // Função para adicionar ao carrinho
    const handleAddToCart = (product: any) => {
        console.log('Adicionando produto ao carrinho:', product);
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    };

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <AppAppBar />

            <Box
                sx={(theme) => ({
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                        theme.palette.mode === "dark"
                            ? "radial-gradient(ellipse 80% 50% at 50% -20%, #1a331a, transparent)"
                            : "radial-gradient(ellipse 90% 80% at 50% -20%, #0a0908, transparent)",
                    backgroundColor: theme.palette.mode === "dark"
                        ? "hsl(0, 0%, 0%)"
                        : "#98c9a3",
                    py: 8,
                    minHeight: "100vh",
                })}
            >
                <Container maxWidth="lg" sx={{ py: 15 }}>
                    <StyledContentBox>
                        <Typography
                            variant="h4"
                            component="h1"
                            textAlign="center"
                            gutterBottom
                            sx={{ mb: 4, color: '#FFFFFF' }}
                        >
                            Produtos Salvos
                        </Typography>

                        {favorites.length === 0 ? (
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                py={8}
                                height="300px"
                            >
                                <Typography
                                    variant="h6"
                                    color="#FFFFFF"
                                    gutterBottom
                                    textAlign="center"
                                >
                                    Nenhum produto adicionado
                                </Typography>
                                <Button
                                    variant="contained"
                                    component={Link}
                                    to="/produtos"
                                    sx={{ mt: 2 }}
                                >
                                    Encontrar Produtos
                                </Button>
                            </Box>
                        ) : (
                            <Grid container spacing={4}>
                                {favorites.map((product) => (
                                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                                        <ProductCard 
                                            product={product}
                                            onAddToCart={handleAddToCart}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </StyledContentBox>
                </Container>
            </Box>

            <Footer />
        </AppTheme>
    );
}