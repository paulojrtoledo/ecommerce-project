import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { styled } from "@mui/material/styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const images = [
  "/nt-pic2.png",
  "/nt-pic1.png",
  "/imagem-exemplo-3.png",
];

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: "6px solid",
  outlineColor: theme.palette.mode === "dark"
    ? "hsla(120, 60%, 20%, 0.3)"
    : "hsla(0, 0%, 0%, 0.2)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  boxShadow: theme.palette.mode === "dark"
    ? "0 0 12px 8px hsla(120, 60%, 20%, 0.3)"
    : "0 0 12px 8px hsla(0, 0%, 0%, 0.2)",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          theme.palette.mode === "dark"
            ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(120, 60%, 20%), transparent)" // Verde escuro em cima
            : "radial-gradient(ellipse 90% 80% at 50% -20%, #0a0908, transparent)", // Preto em cima
        backgroundColor: theme.palette.mode === "dark"
          ? "hsl(0, 0%, 0%)" // Fundo preto no dark
          : "#98c9a3", // Fundo verde 
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* 🔹 TEXTOS E FORMULÁRIO */}
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              color: theme => theme.palette.mode === "dark" ? "white" : "#fefee3",
            }}
          >
            Novidades&nbsp;100%&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.primary.light
                    : "#98c9a3",
              })}
            >
              Nature
            </Typography>
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "white",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Fique por dentro das melhores oportunidades do mundo tech!
            <br />
            Descubra produtos e serviços de alta qualidade, com compromisso,
            confiança e garantia de satisfação. Eleve sua experiência com a
            tecnologia que você merece.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Seu endereço de e-mail"
              placeholder="Seu endereço de e-mail"
              fullWidth
              sx={{
                '& .MuiInputBase-input::placeholder': {
                  color: 'white',
                  opacity: 1,
                },
                '& .MuiOutlinedInput-root': {
                  color: 'white', // 🔹 Cor do texto digitado também branco
                  '& fieldset': {
                    borderColor: 'black', // 🔹 Borda branca
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // 🔹 Borda branca no hover
                  },
                },
              }}
              inputProps={{
                autoComplete: "off",
                "aria-label": "Seu endereço de e-mail",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                minWidth: "fit-content",
                backgroundColor: "#85b88e",
                color: "black",
                '&:hover': {
                  backgroundColor: "#85b88e", // 🔹 Cor mais escura no hover
                  color: "black",
                },
              }}
            >
              Comece Agora
            </Button>
          </Stack>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center", color: "white", }}
          >
            Clicando em &quot;Comece Agora&quot; você concorda com nossos &nbsp;
            <Link
              href="#"
              sx={{
                color: "white",
                textDecoration: "underline",
                '&:hover': {
                  color: "grey.300", // 🔹 Cinza claro no hover
                }
              }}
            >
              Termos & Condições
            </Link>
            .
          </Typography>
        </Stack>

        {/* 🔹 CARROSSEL DE IMAGENS */}
        <StyledBox id="image">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            loop
            style={{ width: "100%", height: "100%" }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={src}
                  alt={`Banner ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledBox>
      </Container>
    </Box>
  );
}