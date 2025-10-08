import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; 

export default function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <img
        src="/icons/nature-tech-icon.png" 
        alt="Nature Tech logo"
        style={{ width: 32, height: 32 }}
      />

      <Typography
        component={Link} 
        to="/" 
        variant="body1"
        sx={{ 
          fontWeight: "normal", 
          color: "#000000",
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
