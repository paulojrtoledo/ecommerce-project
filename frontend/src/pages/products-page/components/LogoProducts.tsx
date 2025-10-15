import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function LogoProducts() {
  const theme = useTheme();
  
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <img
        src="/icons/nature-tech-icon.png"
        alt="Nature Tech logo"
        style={{ 
          width: 32, 
          height: 32,
          filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none'
        }}
      />

      <Typography
        component={Link}
        to="/"
        variant="body1"
        sx={{ 
          fontWeight: "bold", 
          color: theme.palette.mode === 'dark' ? '#E8F5E8' : '#000000',
          textDecoration: "none",
          fontSize: "1rem", 
          lineHeight: 1.5, 
          "&:hover": {
            opacity: 0.8,
          }, 
        }}
      >
        Nature Tech
      </Typography>
    </Box>
  );
}