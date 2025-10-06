import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import Logo from './Logo';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://mui.com/">
        Nature Tech
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Logo />
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              Cadastre-se no nosso Canal de Notícias
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Acompanhe novidade semanais, sempre sem spam!
            </Typography>
            <InputLabel htmlFor="email-newsletter">Email</InputLabel>
            <Stack direction="row" spacing={1} sx={{ gap: 1 }}>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                placeholder="Seu endereço de email"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                }}
                sx={{ width: '250px' }}
              />
              <Button variant="contained" color="primary" size="small" sx={{ flexShrink: 0 }}>
                Inscreva-se
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* Product Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Produtos
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Reviews
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Destaques
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Nature Tech Cloud
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Dúvidas Frequentes
          </Link>
        </Box>

        {/* Company Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Sobre Nós
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Carreiras
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Mídia
          </Link>
        </Box>

        {/* Legal Links */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Termos
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Privacidade
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Contatos
          </Link>
        </Box>
      </Box>

      {/* Bottom Footer */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box>
          <Link color="text.secondary" variant="body2" href="#">
            Política de Privacidade
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Termos de Serviço
          </Link>
          <Copyright />
        </Box>

        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-start', color: 'text.secondary', gap: 1 }}>
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
