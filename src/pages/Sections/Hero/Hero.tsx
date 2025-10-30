import { useCallback } from "react";
import cvFile from "../../../assets/images/jhon_castro.pdf"
import { Box, Container, Grid, Typography, styled } from "@mui/material";

import ScrollDown from "../../../components/KeyboardArrowDown/ArrowDown";
import Avatar from "../../../assets/images/avatar.png.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";
import { Fade, Slide } from "react-awesome-reveal";
import TextType from "../../../components/Typing/TextType";

// Styled Components
const StyledHero = styled("div")(({ theme }) => ({
  background: theme.palette.gradient.dark,
  height: "100vh",
  overflow: "hidden", // Garante que nenhum conteúdo transborde
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "60px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: "25px",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  maxWidth: "400px",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  [theme.breakpoints.up("md")]: {
    width: "100%",
    maxWidth: "350px",
  },
}));

// Main Component
const Hero = () => {
  // LÓGICA DE EMAIL
  const RECIPIENT_EMAIL = 'jhonherik006@gmail.com';
  const EMAIL_SUBJECT = 'Contato via Curriculo - Dúvidas - Projetos';
  const EMAIL_BODY = 'Olá, como podemos criar juntos?';

  // URL para abrir diretamente a caixa de composição do Gmail no navegador
  const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;



  const handleDownloadCv = useCallback(() => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'jhon_castro.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Grid Item: Foto */}
          {/* @ts-expect-error Prop 'grid' não tipada.*/}
          <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
            <Slide direction="left">
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={-50}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} alt="Avatar" />
                </Box>
              </Box>
            </Slide>
          </Grid>

          {/* Grid Item: Texto e Botões */}
          {/* @ts-expect-error Prop 'grid' não tipada.*/}
          <Grid item xs={12} md={7}>
            <Box 
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              justifyContent="center"
            >
              <Fade>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  textAlign="center"
                  pb={2}
                  sx={{
                    whiteSpace: { xs: 'normal', md: 'nowrap' },
                    fontSize: {
                      xs: '2.5rem', 
                      sm: '3rem',   
                      md: '3.5rem',
                      lg: '5rem'    
                    }
                  }}
                >
                  Jhon Herik Gomes de Castro
                </Typography>
              </Fade>
              <Fade delay={500}>
                  <Typography
                    color="primary.contrastText"
                    variant="h2"
                  >
                    <Box component="span">I'm a&nbsp;</Box>
                    <Box component="span" sx={{ 
                      display: 'inline-block',
                      minWidth: {xs: '100%', sm: '450px', md: '550px' },
                      textAlign: 'left',
                    }}>
                      <TextType
                        textColors={["#aa7fc2ff"]}
                        as="span" 
                        text={["Future Software Engineer", "Full-Stack Developer", "Enthusiast of Technology"]} 
                        typingSpeed={40} deletingSpeed={30} />
                    </Box>
                  </Typography>
              </Fade>

              {/* Botões*/}
              <Fade delay={1000}>
                <Grid
                  container
                  display="flex"
                  justifyContent="center"
                  spacing={{ xs: 1, sm: 2, md: 2 }}
                  pt={3}
                  flexWrap="wrap"
                >
                  {/* Botão Download CV */}
                  {/* @ts-expect-error Prop 'grid' não tipada.*/}
                  <Grid item>
                    <StyledButton onClick={handleDownloadCv}>
                      <DownloadIcon />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  
                  {/* Botão Contact me */}
                  {/* @ts-expect-error Prop 'grid' não tipada.*/}
                  <Grid item>
                    {/* @ts-expect-error Prop 'component' não tipada. */}
                    <StyledButton component="div">
                          <a 
                              href={GMAIL_COMPOSE_URL}
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{
                                  textDecoration: 'none', 
                                  color: 'inherit', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  gap: '8px', 
                              }}
                          >
                              <MailOutlineIcon />
                              <Typography>Contact me</Typography>
                          </a>
                    </StyledButton>
                  </Grid>

                  {/* Botão Linkedin*/}
                  {/* @ts-expect-error Prop 'grid' não tipada.*/}
                  <Grid item>
                    {/* @ts-expect-error Prop 'component' não tipada.*/}
                    <StyledButton component="div">
                      <a 
                          href="https://www.linkedin.com/in/jhonherikgc/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                              textDecoration: 'none', 
                              color: 'inherit', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '8px',
                          }}
                      >
                          <LinkedInIcon />
                          <Typography>Linkedin</Typography>
                      </a>
                    </StyledButton>
                  </Grid>

                  {/* Botão Github*/}
                  {/* @ts-expect-error Prop 'grid' não tipada.*/}
                  <Grid item>
                    {/* @ts-expect-error Prop 'component' não tipada. */}
                    <StyledButton component="div">
                      <a 
                          href="https://github.com/jhonherikgc" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                              textDecoration: 'none', 
                              color: 'inherit', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '8px',
                          }}
                      >
                          <GitHubIcon />
                          <Typography>Github</Typography>
                      </a>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ScrollDown targetId="#about-me" />
    </StyledHero>
  );
};

export default Hero;