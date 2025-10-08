import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Computação e Hardware',
    description:
      'Sistemas e componentes de alta performance para todas as suas necessidades tecnológicas.',
    imageLight: `url("https://mui.com/static/images/templates/templates-images/dash-light.png")`,
    imageDark: `url("https://mui.com/static/images/templates/templates-images/dash-dark.png")`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Periféricos e Acessórios',
    description:
      'Conecte, jogue e produza com equipamentos da última geração.',
    imageLight: `url("https://mui.com/static/images/templates/templates-images/mobile-light.png")`,
    imageDark: `url("https://mui.com/static/images/templates/templates-images/mobile-dark.png")`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Dispositivos Inteligentes',
    description:
      'Tecnologia smart para sua casa e seu dia a dia com inovação e conforto.',
    imageLight: `url("https://mui.com/static/images/templates/templates-images/devices-light.png")`,
    imageDark: `url("https://mui.com/static/images/templates/templates-images/devices-dark.png")`,
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background: 'linear-gradient(to bottom right, #85b88e, #6ea87b)',
        color: 'black',
        borderColor:
          theme.palette.mode === 'dark'
            ? theme.palette.primary.dark
            : theme.palette.primary.light,
        '& .MuiChip-label': {
          color: 'black',
        },
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number | null;
  handleItemClick: (index: number) => void;
  selectedFeature?: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>

      {selectedItemIndex !== null && selectedFeature && (
        <Card variant="outlined">
          <Box
            sx={(theme) => ({
              mb: 2,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 280,
              backgroundImage: `url(${
                theme.palette.mode === 'dark'
                  ? selectedFeature.imageDark
                  : selectedFeature.imageLight
              })`,
            })}
          />
          <Box sx={{ px: 2, pb: 2 }}>
            <Typography
              gutterBottom
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'white' : '#fefee3',
                fontWeight: 'medium',
              }}
            >
              {selectedFeature.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'white' : '#fefee3',
                mb: 1.5,
              }}
            >
              {selectedFeature.description}
            </Typography>
          </Box>
        </Card>
      )}
    </Box>
  );
}

export default function Products() {
  const [selectedItemIndex, setSelectedItemIndex] =
    React.useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature =
    selectedItemIndex !== null ? items[selectedItemIndex] : undefined;

  return (
    <Box
      id="produtos"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          theme.palette.mode === 'dark'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(120, 60%, 20%), transparent)'
            : 'radial-gradient(ellipse 90% 80% at 50% -20%, #0a0908, transparent)',
        backgroundColor:
          theme.palette.mode === 'dark' ? 'hsl(0, 0%, 0%)' : '#98c9a3',
        py: { xs: 8, sm: 16 },
      })}
    >
      <Container>
        <Box sx={{ width: { sm: '100%', md: '60%' } }}>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'white' : '#fefee3',
            }}
          >
            Nossos Produtos
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            sx={{
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'white' : '#FFFFFF',
              mb: { xs: 2, sm: 4 },
            }}
          >
            Oferecemos uma seleção de produtos de tecnologia de alta qualidade,
            desde hardware e periféricos até dispositivos inteligentes, todos
            escolhidos para melhorar sua experiência digital. Aqui você encontra
            inovação, desempenho e confiança em cada compra.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            gap: 2,
          }}
        >
          <Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: 2,
                height: '100%',
              }}
            >
              {items.map(({ icon, title, description }, index) => (
                <Button
                  key={index}
                  onClick={() => handleItemClick(index)}
                  sx={(theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    gap: 1,
                    color:
                      selectedItemIndex === index
                        ? theme.palette.text.primary
                        : theme.palette.mode === 'dark'
                        ? 'white'
                        : '#1b2021',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                    backgroundColor:
                      selectedItemIndex === index
                        ? '#85b88e40'
                        : 'transparent',
                  })}
                >
                  {icon}
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Button>
              ))}
            </Box>

            <MobileLayout
              selectedItemIndex={selectedItemIndex}
              handleItemClick={handleItemClick}
              selectedFeature={selectedFeature}
            />
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              width: { xs: '100%', md: '70%' },
              height: 500,
            }}
          >
            {selectedFeature && (
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  width: '100%',
                  display: { xs: 'none', sm: 'flex' },
                  pointerEvents: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                <Box
                  sx={(theme) => ({
                    m: 'auto',
                    width: 420,
                    height: 500,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${
                      theme.palette.mode === 'dark'
                        ? selectedFeature.imageDark
                        : selectedFeature.imageLight
                    })`,
                  })}
                />
              </Card>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
