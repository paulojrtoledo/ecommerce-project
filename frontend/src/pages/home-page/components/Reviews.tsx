import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const userReviews = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: "Rogério M.",
    review:
      "Produtos de alta qualidade e entrega rápida! Estou muito satisfeito com minha compra.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: "Tomás L.",
    review:
      "Comprei um mouse gamer e estou impressionado! Ótima performance e confortável para longas sessões.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: "Carolina F.",
    review:
      "A entrega atrasou um pouco, mas o atendimento solucionou tudo rapidamente. Produto bom.",
  },
  {
    avatar: <Avatar alt="Julia Stewart" src="/static/images/avatar/4.jpg" />,
    name: "João S.",
    review:
      "Equipe super atenciosa! Tiraram todas as minhas dúvidas antes da compra, me senti seguro.",
  },
  {
    avatar: <Avatar alt="John Smith" src="/static/images/avatar/5.jpg" />,
    name: "Júlia Z.",
    review:
      "Ótima variedade de hardware e acessórios. O site poderia carregar um pouco mais rápido, mas vale a pena.",
  },
  {
    avatar: <Avatar alt="Daniel Wolf" src="/static/images/avatar/6.jpg" />,
    name: "Daniel P",
    review:
      "O site é fácil de navegar e encontrei tudo que precisava. O suporte foi rápido quando precisei!",
  },
];

interface ReviewsProps {
  id?: string;
}

export default function Reviews(props: ReviewsProps) {
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
            Avaliações
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Veja por que nossos clientes amam nossos produtos de tecnologia. Descubra como nos destacamos em desempenho, inovação e confiabilidade. Junte-se a nós e aproveite qualidade, tecnologia de ponta e suporte dedicado.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {userReviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: "text.secondary" }}
                  >
                    {review.review}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    pb: 2,
                  }}
                >
                  <CardHeader
                    avatar={review.avatar}
                    title={review.name}
                    sx={{ p: 0 }}
                    titleTypographyProps={{
                      variant: 'subtitle2',
                      fontWeight: 'bold'
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}