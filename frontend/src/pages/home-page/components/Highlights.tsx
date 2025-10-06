import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Performance e Adaptabilidade',
    description:
      'Nossa marca se ajusta facilmente às suas necessidades, aumentando a eficiência e simplificando suas tarefas',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Durabilidade Planejada',
    description:
      'Experimente uma durabilidade incomparável que vai além do investimento duradouro.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'User experience Inovadora',
    description:
      'Integre nosso produto à sua rotina com uma interface intuitiva e fácil de usar.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Inovação',
    description:
      'Fique à frente com recursos que definem novos padrões, atendendo às suas necessidades em evolução melhor do que os demais.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Suporte Confiável',
    description:
      'Conte com nosso suporte ao cliente ágil, oferecendo assistência que vai além da compra.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precisão em cada detalhe',
    description:
      'Desfrute de um produto meticulosamente elaborado, onde pequenos detalhes causam um impacto significativo na sua experiência geral.',
  },
];

interface HighlightsProps {
  id?: string;
}

export default function Highlights(props: HighlightsProps) {
  return (
    <Box
      id={props.id}
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Destaques
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Descubra por que a marca Nature Tech é lider do mercado: últimas novidades
            em produtos de tecnologia, suporte eficiente, design intuitivo e inovação.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
