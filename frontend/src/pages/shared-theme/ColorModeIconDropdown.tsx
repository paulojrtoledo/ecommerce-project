import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

interface ColorModeIconDropdownProps {
  mode?: 'light' | 'dark';
  toggleColorMode?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export default function ColorModeIconDropdown({ 
  mode = 'light', 
  toggleColorMode = () => {}, 
  size = 'medium' 
}: ColorModeIconDropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLightMode = () => {
    if (mode !== 'light' && toggleColorMode) {
      toggleColorMode();
    }
    handleClose();
  };

  const handleDarkMode = () => {
    if (mode !== 'dark' && toggleColorMode) {
      toggleColorMode();
    }
    handleClose();
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        size={size}
        aria-label="Selecionar tema"
        sx={{
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <SettingsBrightnessIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
 
        <MenuItem 
          onClick={handleLightMode}
          selected={mode === 'light'}
          sx={{
            color: mode === 'light' ? 'primary.main' : 'text.primary'
          }}
        >
          <LightModeIcon sx={{ mr: 1 }} />
          Light
        </MenuItem>
        <MenuItem 
          onClick={handleDarkMode}
          selected={mode === 'dark'}
          sx={{
            color: mode === 'dark' ? 'primary.main' : 'text.primary'
          }}
        >
          <DarkModeIcon sx={{ mr: 1 }} />
          Dark
        </MenuItem>
      </Menu>
    </div>
  );
}