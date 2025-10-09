import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Logo from './Logo';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Logo />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 28 }}>
              {/* Botão Produtos */}
              <Button
                variant="text"
                color="info"
                size="small"
                component="a"
                href="/produtos"
                rel="noopener noreferrer"
              >
                Produtos
              </Button>

              <Button
                variant="text"
                color="info"
                size="small"
                component="a"
                href="#reviews"
              >
                Reviews
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                component="a"
                href="#highlights"
              >
                Destaques
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                component="a"
                href="#ntc"
              >
                NTC
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                component="a"
                href="#faq"
              >
                Dúvidas
              </Button>
            </Box>
          </Box>

          {/* SEÇÃO DESKTOP */}  
              <Box
            sx={{
              display: { xs: 'none', md: 'flex' }, 
              gap: 1,
              alignItems: 'center',
            }}
          >
            {/* CARRINHO */}
            <Button
              variant="text"
              color="info"
              size="small"
              component="a"
              href="/meu-carrinho"
              rel="noopener noreferrer"
            >
              Carrinho
            </Button>

            {/* ENTRAR */}
            <Button color="primary" variant="contained" size="small">
              Entrar
            </Button>
            
            <ColorModeIconDropdown />
          </Box>

          {/* SEÇÃO MOBILE -*/}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: { top: 'var(--template-frame-height, 0px)' },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {/* Menu Item Produtos */}
                <MenuItem
                  component="a"
                  href="/produtos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Produtos
                </MenuItem>
                <MenuItem component="a" href="#reviews">
                  Reviews
                </MenuItem>
                <MenuItem component="a" href="#highlights">
                  Highlights
                </MenuItem>
                <MenuItem component="a" href="#ntc">
                  NTC
                </MenuItem>
                <MenuItem component="a" href="#faq">
                  FAQ
                </MenuItem>
                <Divider sx={{ my: 3 }} />

                {/* ENTRAR MOBILE */}
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Entrar
                  </Button>
                </MenuItem>


                {/* CARRINHO MOBILE */}
                <MenuItem 
                  component="a" 
                  href="/meu-carrinho"
                  onClick={toggleDrawer(false)} 
                  sx={{ p: 0 }} 
                >
                  <Button 
                    color="primary" 
                    variant="outlined" 
                    fullWidth 
                    component="span" 
                  >
                    Carrinho
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}