import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';

interface ColorModeIconDropdownProps extends IconButtonOwnProps {
  onChangeMode?: (mode: 'light' | 'dark') => void;
}

export default function ColorModeIconDropdown(props: ColorModeIconDropdownProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMode = (targetMode: 'light' | 'dark') => () => {
    props.onChangeMode?.(targetMode);
    handleClose();
  };

  const icon = isDarkMode ? <DarkModeIcon /> : <LightModeIcon />;

  return (
    <React.Fragment>
      <IconButton
        data-screenshot="toggle-mode"
        onClick={handleClick}
        disableRipple
        size="small"
        aria-controls={open ? 'color-scheme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        {...props}
      >
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="color-scheme-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            variant: 'outlined',
            elevation: 0,
            sx: {
              my: '4px',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem selected={!isDarkMode} onClick={handleMode('light')}>
          Light
        </MenuItem>
        <MenuItem selected={isDarkMode} onClick={handleMode('dark')}>
          Dark
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
