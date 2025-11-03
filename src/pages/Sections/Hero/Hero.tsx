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
    // Para telas muito grandes (como 1920px), você pode querer limitar a largura do conteúdo
    // Sem refatorar, isso é mais difícil de controlar no Container,
    // mas o Container "lg" já tem um max-width fixo no tema, o que ajuda.
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  maxWidth: "400px",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  [theme.breakpoints.up("md")]: {
    // Mantendo suas propriedades existentes, o que pode estar contribuindo para o posicionamento
    // mas não as alteraremos diretamente aqui.
    paddingLeft: "-100px",
    marginLeft: "-100px",
    width:"100%",
    marginTop:"-15px"
  },
}));

// Main Component
const Hero = () => {
  // LÓGICA DE EMAIL
  const RECIPIENT_EMAIL = 'jhonherik006@gmail.com';
  const EMAIL_SUBJECT = 'Contato via Curriculo - Dúvidas - Projetos';
  const EMAIL_BODY = 'Olá, como podemos criar juntos?';

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
        <Grid container spacing={2}>
          {/* ... Foto ... */}
          <Grid>
            <Slide direction="left">
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} alt="Avatar" />
                </Box>
              </Box>
            </Slide>
          </Grid>

          {/* Grid do Texto e Botões */}
          {/*@ts-ignore*/}
          <Grid item xs={12} md={6}>
            <Box sx={{
              position: { md: "absolute" },
              top: { md: '50%' },
              maxWidth: { xs: '100%', md: '100%' }, // Mantendo como está
              textAlign: 'center',

              // 🎯 CORREÇÃO PARA O TEXTO EM TELAS GRANDES (1920px)
              // Ajusta o 'left' e 'transform' especificamente para telas 'xl' (>= 1536px)
              // Você pode ajustar estes valores percentuais (ex: 55%, 58%, etc.)
              // e a porcentagem do translateX(-X%) para encontrar o ponto ideal em 1920px.
              // O valor ideal dependerá do tamanho da fonte e da largura do texto.
              left: { md: '60%', xl: '55%' }, // Ajusta para a esquerda em telas XL
              transform: { md: 'translate(-50%, -50%)', xl: 'translate(-40%, -50%)' }, // Ajusta o deslocamento
            }}>
              <Fade>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  textAlign="center"
                  pb={{xs: 2, md: 0}}
                  sx={{
                    whiteSpace: { xs: 'normal', md: 'nowrap' },
                    fontSize: {
                      xs: '1.9rem',
                      sm: '3rem',
                      md: '3.5rem',
                      lg: '5rem'
                    }
                  }}
                  mb={{md: -2}}
                >
                  Jhon Herik Gomes de Castro
                </Typography>
              </Fade>
              <Fade delay={500}>
                  <Typography
                    color="primary.contrastText"
                    variant="h2"
                    sx={{whiteSpace: 'nowrap'}}
                  >
                    <Box component="span"
                    sx={{
                      marginLeft: '-10px',
                      fontSize:{
                      xs: '1.9rem',
                      sm: '3rem',
                      md: '3.0rem',
                      lg: '4rem'
                    }
                    }}>I'm a&nbsp;</Box>
                    <Box component="span" sx={{
                      display: 'inline-block',
                      minWidth: { xs: '300px', sm: '700px' },
                      textAlign: 'left',
                      fontSize: {
                      xs: '1.9rem',
                      sm: '3rem',
                      md: '3.5rem',
                      lg: '4rem'
                    }
                    }}>
                      <TextType
                        textColors={["#aa7fc2ff"]}
                        as="span"
                        text={["Future Software Engineer", "Full-Stack Developer", "Enthusiast of Technology"]}
                        typingSpeed={40} deletingSpeed={30} />
                    </Box>
                  </Typography>
              </Fade>
            </Box>

            {/* Botões */}
            <Fade delay={1000}>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
                sx={{
                  position: {md:"absolute"},
                  bottom: { md: '30%', lg: '33%' },
                  maxWidth: '100%', // Adicionado para garantir que os botões não se espalhem mais do que o necessário
                  left: { md: '51%', xl: '46%' }, // Move mais para a esquerda
                  transform: { md: 'translate(-40%, 50%)', xl: 'translate(-15%, -45%)' }, // Ajusta o deslocamento
                }}
              >
                {/* Botão Download CV */}
                <Grid>
                  <StyledButton onClick={handleDownloadCv}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>

                {/* Botão Contact me */}
                <Grid>
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
                <Grid>
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
                <Grid>
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
          </Grid>
        </Grid>
      </Container>
      <ScrollDown targetId="#about-me" />
    </StyledHero>
  );
};

export default Hero;