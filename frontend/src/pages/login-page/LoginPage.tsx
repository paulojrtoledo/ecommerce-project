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
    TextField,
    Card,
    CardContent,
    Divider,
    alpha,
    styled,
    Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';

const StyledContentBox = styled(Box)(({ theme }) => ({
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    boxShadow: theme.shadows[1],
    padding: '32px',
    marginTop: '20px',
    maxWidth: '400px',
    margin: '0 auto'
}));

export default function LoginPage(props: { disableCustomTheme?: boolean }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Lógica de login aqui
        console.log('Login attempt:', { email, password });
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
                    display: 'flex',
                    alignItems: 'center',
                })}
            >
                <Container maxWidth="sm" sx={{ py: 8 }}>
                    <StyledContentBox>
                        <Typography
                            variant="h4"
                            component="h1"
                            textAlign="center"
                            gutterBottom
                            sx={{ mb: 3, color: '#000000' }}
                        >
                            Entrar na Conta
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: 'black',
                                            '& fieldset': {
                                                borderColor: 'rgba(255,255,255,0.3)',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(255,255,255,0.5)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'primary.main',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'rgba(255,255,255,0.7)',
                                        },
                                        '& .MuiInputBase-input::placeholder': {
                                            color: '#000000',
                                            opacity: 1,
                                        },
                                    }}
                                />

                                <TextField
                                    label="Senha"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: 'black',
                                            '& fieldset': {
                                                borderColor: 'rgba(255,255,255,0.3)',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'rgba(255,255,255,0.5)',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'primary.main',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'rgba(255,255,255,0.7)',
                                        },
                                        '& .MuiInputBase-input::placeholder': {
                                            color: '#000000', 
                                            opacity: 1,
                                        },
                                    }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Entrar
                                </Button>
                            </Stack>
                        </form>

                        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />

                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: '#000000', mb: 2 }}>
                                Ainda não tem uma conta?
                            </Typography>
                            <Button
                                component={Link}
                                to="/cadastro"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    borderColor: 'rgba(255,255,255,0.3)',
                                    color: 'white',
                                    backgroundColor: '#000000',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        backgroundColor: '#c43420'
                                    }
                                }}
                            >
                                Criar Conta
                            </Button>
                        </Box>

                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Button
                                component={Link}
                                to="/recuperar-senha"
                                variant="text"
                                size="small"
                                sx={{ color: '#c43420', fontWeight: 'bold' }}
                            >
                                Esqueci minha senha
                            </Button>
                        </Box>
                    </StyledContentBox>
                </Container>
            </Box>

            <Footer />
        </AppTheme>
    );
}