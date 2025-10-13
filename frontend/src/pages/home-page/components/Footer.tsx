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
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/X';
import Logo from './Logo';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: '#000000', mt: 1 }}>
      {'Copyright © '}
      <Link color="#000000" href="https://mui.com/">
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
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2, color: '#000000' }}>
              Cadastre-se no nosso Canal de Notícias
            </Typography>
            <Typography variant="body2" sx={{ color: '#000000', mb: 2 }}>
              Acompanhe novidade semanais, sempre sem spam!
            </Typography>
            <InputLabel htmlFor="email-newsletter" sx={{ color: '#000000' }}>Email</InputLabel>
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
                  style: { color: '#000000' }
                }}
                sx={{ 
                  width: '250px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#000000',
                    },
                    '&:hover fieldset': {
                      borderColor: '#000000',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#000000',
                    },
                  }
                }}
              />
              <Button variant="contained" color="primary" size="small" sx={{ flexShrink: 0 }}>
                Inscreva-se
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1, color: '#000000'  }}>
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#000000' }}>
          </Typography>
          <Link color="#000000" variant="body2" href="#">
            Produtos
          </Link>
          <Link color="#000000" variant="body2" href="#">
            Reviews
          </Link>
          <Link color="#000000" variant="body2" href="#">
            Destaques
          </Link>
          <Link color="#000000" variant="body2" href="#">
            Nature Tech Cloud
          </Link>
          <Link color="#000000" variant="body2" href="#">
            Dúvidas Frequentes
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#000000' }}>
          </Typography>
          <Link color="#000000" variant="body2" href="#">
            Sobre Nós
          </Link>
          <Link color="#000000" variant="body2" href="#">
            Carreiras
          </Link>
          <Link color="#000000" variant="body2" href="#">
            Mídia
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, color: '#000000' }}>
          </Typography>
          <Link color="#000000" variant="body2" href="#">
            Termos
          </Link>
          <Link color="#000000" variant="body2" href="#">
            Privacidade
          </Link>
          <Link color="#000000" variant="body2" href="#">
            Contatos
          </Link>
        </Box>
      </Box>

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
          <Link color="#000000" variant="body2" href="#">
            Política de Privacidade
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5, color: '#000000' }}>&nbsp;•&nbsp;</Typography>
          <Link color="#000000" variant="body2" href="#">
            Termos de Serviço
          </Link>
          <Copyright />
        </Box>

        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-start', color: '#000000', gap: 1 }}>
          <IconButton
            color="inherit"
            size="small"
            href="https://youtube.com"
            aria-label="YouTube"
            sx={{ alignSelf: 'center', color: '#000000' }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://instagram.com"
            aria-label="Instagram"
            sx={{ alignSelf: 'center', color: '#000000' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center', color: '#000000' }}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}