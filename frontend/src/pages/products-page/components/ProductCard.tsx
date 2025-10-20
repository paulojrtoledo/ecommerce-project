import { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography, Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useFavorites } from '../../../contexts/FavoritesContext';
import { useCart } from '../../../contexts/CartContext'; // Importe o useCart

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
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
    const { items } = useCart(); // Use o hook do carrinho
    const [isFavorito, setIsFavorito] = useState(false);

    useEffect(() => {
        setIsFavorito(isFavorite(product.id));
    }, [product.id, isFavorite]);

    // Verifica se o produto está no carrinho
    const produtoNoCarrinho = items.some(item => item.id === product.id);

    const handleAddToCart = () => {
        onAddToCart(product);
    };

    const formatPrice = (price: number): string => {
        return price.toFixed(2).replace('.', ',');
    };

    const calcularParcela = (preco: number) => {
        const taxaMensal = 1.025;
        const totalComJuros = preco * Math.pow(taxaMensal, 8);
        return totalComJuros / 8;
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
        // Remove o setTimeout para que não reset automaticamente
        // O estado agora é controlado pela verificação real do carrinho
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
                            color: (noCarrinho || produtoNoCarrinho) ? 'success.main' : 'grey.400',
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            '&:hover': { 
                                backgroundColor: (noCarrinho || produtoNoCarrinho) ? 'grey.300' : '#081c15',
                                color: (noCarrinho || produtoNoCarrinho) ? 'success.main' : 'white'
                            }
                        }}
                    >
                        {(noCarrinho || produtoNoCarrinho) ? 
                            <ShoppingCartCheckoutIcon fontSize='small' /> : 
                            <AddShoppingCartIcon fontSize='small' />
                        }
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
                    R$ {formatPrice(product.price)}
                </Typography>

                <Typography variant="caption" color="#081c15" display="block"> 
                    À vista no PIX
                </Typography>
                <Typography variant="caption" color="#081c15" display="block"> 
                    ou em até 8x de: R$ {formatPrice(calcularParcela(product.price))}
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