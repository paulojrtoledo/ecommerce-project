import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel)
      );
    };

  return (
    <Container
      id="faq"
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
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "text.primary",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Dúvidas Frequentes
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="span" variant="subtitle2">
              Como faço para receber suporte caso esteja passando por algum problema?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Você consegue suporte nos contactando pelo e-mail&nbsp;
              <Link href="mailto:support@email.com">support@email.com</Link>
              &nbsp; Nós estamos aqui para lhe atender prontamente.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="span" variant="subtitle2">
              Posso devolver um produto caso não fique satisfeito com a aquisição?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Com certeza! Nós trabalhamos com clareza e não queremos nenhum 
              problema com nossos clientes.  Se você não está completamente
              satisfeito, pode retornar o produto dentro do prazo estipulado
              na compra, trocar por outro, ou pedir pelo reembolso total.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="span" variant="subtitle2">
              O que faz seu produto se destacar em frente de outras marcas?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Nossos produtos se destacam por sua adaptabilidade, durabilidade, 
              e inovação. <br/>Nós priorizamos a satisfaçao do usuário e seguimos
              procurando exceder as expectativas em todos os aspectos possíveis.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel4")}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="span" variant="subtitle2">
              Os produtos tem garantia? Por quanto tempo?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Sim, nossos produtos tem garantia.
              Ela cobre defeitos no material, e você pode contactar o 
              suporte
              para que saiba exatamente o tempo de garantia de um produto específico.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
