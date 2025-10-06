import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LogoProducts() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {/* Ícone PNG */}
      <img
        src="/icons/nature-tech-icon.png"
        alt="Nature Tech logo"
        style={{ width: 32, height: 32 }}
      />

      {/* Nome do site */}
      <Typography
        component={Link}
        to="/"
        variant="body1"
        sx={{ 
          fontWeight: "bold", 
          color: "text.primary",
          textDecoration: "none",
          fontSize: "1rem", // Tamanho original
          lineHeight: 1.5, // Altura de linha original
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