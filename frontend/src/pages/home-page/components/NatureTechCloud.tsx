import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useTheme } from '@mui/material/styles';

const tiers = [
  {
    title: "Gratuito",
    price: "0",
    description: [
      "10 usuários incluídos",
      "500gb de armazenamento",
      "Acesso ao centro de suporte NTC",
      "Estilização exclusiva",
    ],
    buttonText: "Cadastre-se gratuitamente",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
  {
    title: "Profissional",
    subheader: "Recomendado",
    price: "49,90",
    description: [
      "20 usuários incluídos",
      "2tb de armazenamento",
      "Acesso ao centro de suporte NTC",
      "Estilização Exclusiva",
      "Suporte dedicado",
      "Melhores Ofertas",
    ],
    buttonText: "Comece agora",
    buttonVariant: "contained",
    buttonColor: "secondary",
  },
  {
    title: "Enpresarial",
    price: "99,90",
    description: [
      "50 usuários incluídos",
      "5tb de armazenamento",
      "Acesso ao centro de suporte NTC",
      "Estilização Exclusiva",
      "Suporte dedicado + e-mail e telefone",
      "Melhores Ofertas",
      "Bônus de compras"

    ],
    buttonText: "Fale conosco",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
];

interface NatureTechCloudProps {
  id?: string;
}

export default function NatureTechCloud(props: NatureTechCloudProps) {
  const theme = useTheme();

  return (
    <Box id={props.id}>
      <Container
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            Nature Tech Cloud
          </Typography>
          <Typography variant="body1" sx={{ color: "#081c15" }}>
            Armazene, compartilhe e proteja seus arquivos com espaço de nuvem, suporte dedicado e benefícios exclusivos para seus dispositivos Nature Tech.
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
        >
          {tiers.map((tier) => (
            <Grid
              item
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
              key={tier.title}
            >
              <Card
                sx={[
                  {
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  },
                  tier.title === "Profissional" && {
                    backgroundColor: '#000000',
                    color: 'white',
                  }
                ]}
              >
                <CardContent>
                  <Box
                    sx={[
                      {
                        mb: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                      },
                      tier.title === "Profissional" && { color: "grey.100" },
                    ]}
                  >
                    <Typography component="h3" variant="h6">
                      {tier.title}
                    </Typography>
                    {tier.title === "Profissional" && (
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label={tier.subheader}
                        sx={{ color: 'white' }}
                      />
                    )}
                  </Box>
                  <Box
                    sx={[
                      { display: "flex", alignItems: "baseline" },
                      tier.title === "Profissional" && { color: "grey.50" },
                    ]}
                  >
                    <Typography component="h3" variant="h2">
                      R${tier.price}
                    </Typography>
                    <Typography component="h3" variant="h6">
                      &nbsp; por mês
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 2, opacity: 0.8, borderColor: "divider" }} />
                  {tier.description.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={[
                          { width: 20 },
                          tier.title === "Profissional"
                            ? { color: "primary.light" }
                            : { color: "primary.main" },
                        ]}
                      />
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={[
                          tier.title === "Profissional"
                            ? { color: "grey.50" }
                            : { color: null },
                        ]}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as "outlined" | "contained"}
                    sx={
                      tier.title === "Profissional"
                        ? {
                          backgroundColor: '#0b5d1e',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#077353', 
                          }
                        }
                        : {}
                    }
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}