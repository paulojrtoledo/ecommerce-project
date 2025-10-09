import { useState } from 'react';
import { Card, CardContent, Button, Typography, Box } from '@mui/material';

// Interface compatível com ambos
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    quantity?: number; // ← Torna opcional
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(product);
    };

    const calcularParcela = (preco: number) => {
        const taxaMensal = 1.025; // 2.5% ao mês
        const totalComJuros = preco * Math.pow(taxaMensal, 8);
        return (totalComJuros / 8).toFixed(2);
    };

    return (
        <Card
            component="div"
            sx={{
                height: '100%',
                padding: '16px',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '4',
                }
            }}
        >
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

            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {product.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                </Typography>

                <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                    R$ {product.price.toFixed(2)}
                </Typography>

                <Typography variant="caption" color="text.secondary" display="block">
                    À vista no PIX
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                    ou em até 8x de: R$ {calcularParcela(product.price)}
                </Typography>
            </CardContent>

            <Button
                variant="contained"
                fullWidth
                onClick={handleAddToCart}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{ mt: 2 }}
            >
                {isHovered ? 'Comprar Agora' : 'Adquirir Produto'}
            </Button>
        </Card>
    );
}