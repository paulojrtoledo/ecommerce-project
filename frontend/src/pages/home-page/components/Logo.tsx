import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // IMPORTANTE

export default function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {/* Ícone PNG */}
      <img
        src="/icons/nature-tech-icon.png" // coloque o PNG na pasta "public/icons"
        alt="Nature Tech logo"
        style={{ width: 32, height: 32 }}
      />

      {/* Nome do site */}
      <Typography
        component={Link} // transforma em Link
        to="/" // sempre volta pra página inicial
        variant="body1"
        sx={{ 
          fontWeight: "bold", 
          color: "text.primary",
          textDecoration: "none", 
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
