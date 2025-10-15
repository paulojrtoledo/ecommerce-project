import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeContext } from '../../contexts/ThemeContext'; 
import AppAppBar from '../home-page/components/AppAppBar';
import Footer from '../home-page/components/Footer';
import {
    Box,
    Container,
    Typography,
    Button,
    TextField,
    Divider,
    alpha,
    styled,
    Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HeaderExternal from '../components-others/HeaderExternal';

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
    const { mode } = useThemeContext(); 

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <>
            <CssBaseline enableColorScheme />
            <HeaderExternal />

            <Box
                sx={{ 
                    width: "100%",
                    py: 8,
                    minHeight: "100vh",
                    display: 'flex',
                    alignItems: 'center',
                    background: theme => theme.palette.mode === 'dark' 
                        ? 'radial-gradient(ellipse 50% 30% at 50% -8%, #98c9a3, #000000)'
                        : 'radial-gradient(ellipse 60% 35% at 50% -12%, #0a0908, #98c9a3)',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Container maxWidth="sm" sx={{ py: 8 }}>
                    <StyledContentBox>
                        <Typography
                            variant="h4"
                            component="h1"
                            textAlign="center"
                            gutterBottom
                            sx={{ mb: 3, color: 'text.primary' }} 
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
                                            color: 'text.primary', 
                                            '& fieldset': {
                                                borderColor: 'divider', 
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'primary.main', 
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'primary.main', 
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'text.secondary', 
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
                                            color: 'text.primary', 
                                            '& fieldset': {
                                                borderColor: 'divider', 
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'primary.main', 
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'primary.main', 
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'text.secondary', 
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

                        <Divider sx={{ my: 3 }} /> 

                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}> 
                                Ainda não tem uma conta?
                            </Typography>
                            <Button
                                component={Link}
                                to="/cadastro"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    borderColor: 'divider', 
                                    color: 'text.primary', 
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        backgroundColor: 'action.hover'
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
                                sx={{ color: 'error.main' }}
                            >
                                Esqueci minha senha
                            </Button>
                        </Box>
                    </StyledContentBox>
                </Container>
            </Box>

            <Footer />
        </>
    );
}