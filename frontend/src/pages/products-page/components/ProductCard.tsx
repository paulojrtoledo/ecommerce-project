import { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography, Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useFavorites } from '../../../contexts/FavoritesContext';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    quantity?: number;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [noCarrinho, setNoCarrinho] = useState(false);
    
    // Usando o FavoritesContext
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
    
    // Estado sincronizado com o context
    const [isFavorito, setIsFavorito] = useState(false);

    // Sincroniza o estado local com o context quando o componente monta ou o produto muda
    useEffect(() => {
        setIsFavorito(isFavorite(product.id));
    }, [product.id, isFavorite]);

    const handleAddToCart = () => {
        onAddToCart(product);
    };

    const calcularParcela = (preco: number) => {
        const taxaMensal = 1.025;
        const totalComJuros = preco * Math.pow(taxaMensal, 8);
        return (totalComJuros / 8).toFixed(2);
    };

    const handleFavorito = () => {
        if (isFavorito) {
            removeFromFavorites(product.id);
            setIsFavorito(false);
        } else {
            addToFavorites(product);
            setIsFavorito(true);
        }
    };

    const handleCarrinhoRapido = () => {
        setNoCarrinho(true);
        onAddToCart(product);
        setTimeout(() => setNoCarrinho(false), 2000);
    };

    return (
        <Card
            component="div"
            sx={{
                backgroundColor: "#f7fafc",
                height: '100%',
                padding: '16px',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '4'
                }
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'contain',
                        borderRadius: 30,
                        overflow: 'hidden',
                    }}
                />

                <Box sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    display: 'flex',
                    gap: 1
                }}>
                    <IconButton
                        size='small'
                        onClick={handleFavorito}
                        sx={{
                            color: isFavorito ? '#c43420' : 'grey.400',
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            '&:hover': { 
                                backgroundColor: isFavorito ? 'grey.300' : '#c43420',
                                color: isFavorito ? 'grey.400' : 'white'
                            }
                        }}
                    >
                        {isFavorito ? <FavoriteIcon fontSize="small"/> : <FavoriteBorderIcon fontSize='small'/>}
                    </IconButton>

                    <IconButton
                        size='small'
                        onClick={handleCarrinhoRapido}
                        sx={{
                            color: noCarrinho ? 'success.main' : 'grey.400',
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            '&:hover': { backgroundColor: '#081c15' }
                        }}
                    >
                        {noCarrinho ? <ShoppingCartCheckoutIcon fontSize='small' /> : <AddShoppingCartIcon fontSize='small' />}
                    </IconButton>
                </Box>
            </Box>

            <CardContent>
                <Typography variant="h6" gutterBottom color={"#081c15"}>
                    {product.name}
                </Typography>

                <Typography variant="body2" color="#081c15" sx={{ mb: 2 }}>
                    {product.description}
                </Typography>

                <Typography variant="h6" color="#081c15" sx={{ mb: 1 }}>
                    R$ {product.price.toFixed(2)}
                </Typography>

                <Typography variant="caption" color="#081c15" display="block">
                    À vista no PIX
                </Typography>
                <Typography variant="caption" color="#081c15" display="block">
                    ou em até 8x de: R$ {calcularParcela(product.price)}
                </Typography>
            </CardContent>

            <Button
                variant="contained"
                fullWidth
                onClick={handleAddToCart}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                component="a"
                href="/meu-carrinho"
                rel="noopener noreferrer"
                sx={{
                    mt: 2,
                    transition: 'background-color 0.1s ease',
                    backgroundColor: isHovered ? '#c43420 !important' : 'primary.main'
                }}
            >
                {isHovered ? 'Comprar Agora' : 'Adquirir Produto'}
            </Button>
        </Card>
    );
}