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
  Card,
  CardContent,
  Grid,
  Divider,
  IconButton,
  TextField,
  Stack,
  alpha,
  styled,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
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

export default function CartPage(props: { disableCustomTheme?: boolean }) {
  const { items, updateQuantity, removeItem } = useCart();

  React.useEffect(() => {
    console.log('CartPage - Current items:', items);
  }, [items]);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

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
              ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)"
              : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
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
              sx={{ mb: 4 }}
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
                    <Card key={item.id} sx={{ mb: 2 }}>
                      <CardContent>
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

                          <Grid item xs={9} sm={6}>
                            <Typography variant="h6" component="h3">
                              {item.name}
                            </Typography>
                            <Typography variant="h6" color="primary">
                              R$ {item.price.toFixed(2)}
                            </Typography>
                          </Grid>

                          <Grid item xs={6} sm={2}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              <IconButton
                                size="small"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <RemoveIcon />
                              </IconButton>
                              <TextField
                                size="small"
                                value={item.quantity}
                                inputProps={{
                                  style: { textAlign: 'center', width: 40 },
                                  readOnly: true,
                                }}
                                variant="outlined"
                              />
                              <IconButton
                                size="small"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <AddIcon />
                              </IconButton>
                            </Stack>
                          </Grid>

                          <Grid item xs={6} sm={2}>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Typography variant="h6">
                                R$ {(item.price * item.quantity).toFixed(2)}
                              </Typography>
                              <IconButton
                                color="error"
                                onClick={() => removeItem(item.id)}
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
                      <Typography variant="h6" gutterBottom>
                        Resumo do Pedido
                      </Typography>

                      <Stack spacing={2}>
                        <Box display="flex" justifyContent="space-between">
                          <Typography>Subtotal</Typography>
                          <Typography>R$ {subtotal.toFixed(2)}</Typography>
                        </Box>
                        
                        <Box display="flex" justifyContent="space-between">
                          <Typography>Frete</Typography>
                          <Typography>
                            {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                          </Typography>
                        </Box>
                        
                        <Divider />
                        
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="h6">Total</Typography>
                          <Typography variant="h6">R$ {total.toFixed(2)}</Typography>
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
    </AppTheme>
  );
}