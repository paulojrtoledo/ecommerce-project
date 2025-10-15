import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeContext } from '../../contexts/ThemeContext'; 
import Footer from '../home-page/components/Footer';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Divider,
  IconButton,
  Stack,
  alpha,
  styled,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import HeaderExternal from '../components-others/HeaderExternal';

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

const QuantityButton = styled(Button)(({ theme }) => ({
  minWidth: '60px',
  height: '40px',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: '4px',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function CartPage(props: { disableCustomTheme?: boolean }) {
  const { items, updateQuantity, removeItem } = useCart();
  const { mode } = useThemeContext(); 

  React.useEffect(() => {
    console.log('CartPage - Current items:', items);
  }, [items]);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <>
      <CssBaseline enableColorScheme />
      <HeaderExternal />

      <Box
        sx={(theme) => ({
          width: "100%",
          py: 8,
          minHeight: '100vh',
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(ellipse 50% 30% at 50% -10%, #98c9a3, #000000)'
            : 'radial-gradient(ellipse 60% 40% at 50% -15%, #0a0908, #98c9a3)', 
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        })}
      >
        <Container maxWidth="lg" sx={{ py: 15 }}>
          <StyledContentBox>
            <Typography
              variant="h4"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{ mb: 4, color: 'text.primary' }} 
            >
              Meu Carrinho
            </Typography>

            {items.length === 0 ? (
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
                  color="text.secondary" 
                  gutterBottom
                  textAlign="center"
                >
                  Seu carrinho está vazio
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/products"
                  sx={{ mt: 2 }}
                >
                  Continuar Comprando
                </Button>
              </Box>
            ) : (
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  {items.map((item) => (
                    <Card key={item.id} sx={{ mb: 2, overflow: 'visible' }}> 
                      <CardContent sx={{ padding: '16px', '&:last-child': { paddingBottom: '16px' } }}> 
                        <Grid container spacing={2} alignItems="center">
                    
                          <Grid item xs={3} sm={2}>
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.name}
                              sx={{
                                width: '100%',
                                height: 80,
                                objectFit: 'contain',
                              }}
                            />
                          </Grid>

                          <Grid item xs={9} sm={4}> 
                            <Typography variant="h6" component="h3" color="text.primary" noWrap> 
                              {item.name}
                            </Typography>
                            <Typography variant="h6" color="primary">
                              R$ {item.price.toFixed(2)}
                            </Typography>
                          </Grid>

                          <Grid item xs={6} sm={3}> 
                            <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
                              <IconButton
                                size="small"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                sx={{
                                  color: item.quantity <= 1 ? 'text.disabled' : 'text.primary',
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 1,
                                  width: 40,
                                  height: 40,
                                  flexShrink: 0,
                                }}
                              >
                                <RemoveIcon />
                              </IconButton>
                              
                              <QuantityButton>
                                {item.quantity}
                              </QuantityButton>
                              
                              <IconButton
                                size="small"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                sx={{
                                  color: 'text.primary',
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 1,
                                  width: 40,
                                  height: 40,
                                  flexShrink: 0,
                                }}
                              >
                                <AddIcon />
                              </IconButton>
                            </Stack>
                          </Grid>

                          <Grid item xs={6} sm={3}> 
                            <Stack 
                              direction="row" 
                              spacing={1} 
                              alignItems="center" 
                              justifyContent="flex-end"
                              sx={{ width: '100%' }}
                            >
                              <Typography 
                                variant="h6" 
                                color="text.primary"
                                sx={{ 
                                  whiteSpace: 'nowrap',
                                  minWidth: '100px',
                                  textAlign: 'right',
                                  flexShrink: 0,
                                }}
                              > 
                                R$ {(item.price * item.quantity).toFixed(2)}
                              </Typography>
                              <IconButton
                                color="error"
                                onClick={() => removeItem(item.id)}
                                sx={{
                                  border: '1px solid',
                                  borderColor: 'divider',
                                  borderRadius: 1,
                                  flexShrink: 0,
                                  width: 40,
                                  height: 40,
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Stack>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom color="text.primary"> 
                        Resumo do Pedido
                      </Typography>

                      <Stack spacing={2}>
                        <Box display="flex" justifyContent="space-between">
                          <Typography color="text.primary">Subtotal</Typography> 
                          <Typography color="text.primary">R$ {subtotal.toFixed(2)}</Typography> 
                        </Box>

                        <Box display="flex" justifyContent="space-between">
                          <Typography color="text.primary">Frete</Typography> 
                          <Typography color="text.primary"> 
                            {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                          </Typography>
                        </Box>

                        <Divider />

                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="h6" color="text.primary">Total</Typography> 
                          <Typography variant="h6" color="text.primary">R$ {total.toFixed(2)}</Typography> 
                        </Box>

                        <Button
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{ mt: 2 }}
                        >
                          Finalizar Compra
                        </Button>

                        <Button
                          component={Link}
                          to="/products"
                          variant="outlined"
                          fullWidth
                        >
                          Continuar Comprando
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
          </StyledContentBox>
        </Container>
      </Box>

      <Footer />
    </>
  );
}