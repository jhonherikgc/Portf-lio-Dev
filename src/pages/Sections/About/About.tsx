import { styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/avatar.png.jpg";
import { Fade, Slide } from "react-awesome-reveal";
// --- Styled Components --- //

const StyledAbout = styled("section")(({ theme }) => ({
  background: theme.palette.gradient.dark,
  height: "100%",
  marginTop: "-10vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "100px",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  position: "relative",
  margin: "50px 50px",
  marginBottom: "300px",
  [theme.breakpoints.down("md")]: {
    margin: "30px auto",
    width: "200px",
    height: "200px",
  },
}));

const StyledContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    padding: "0 20px",
  },
}));

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom:"300px",
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#212529',
  color: theme.palette.common.white,
  [theme.breakpoints.up("md")]: {
    maxWidth: "900px",
    width: "100%", 
    marginLeft: "50px",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
    gap: theme.spacing(2),
  },
}));

// --- Main Component --- //

const About = () => {
  return (
    <StyledAbout>
      <section>
    <Fade delay={400}>
        <Slide direction="up"> {}
          <Typography
              color="primary.contrastText"
              variant="h3"
              textAlign="center"
              pb={2}
              sx={{
                textAlign: { xs: "center", md: "center" },
                marginLeft: {xs:"0",md:"30%"},
                marginTop: {xs:"10vh", md:"15%"},
              }}
            id="about-me">
              About me
          </Typography>
        </Slide>
    </Fade>
        <StyledContentWrapper>
          <Slide direction="left"> {}
            <StyledImg src={Avatar} alt="Avatar" />
          </Slide>
<Slide direction="right">
<Fade delay={500}>
        <StyledContainer>
            <Typography>
              Olá, me chamo Jhon Herik tenho 19 anos. Minha jornada na programação teve início aos 13 anos, quando a curiosidade de saber o que vi em código de um "Hack / Script" de Minecraft 
              despertaram em mim interesse de saber o que aquilo significava e fazia. A vontade de aprender sempre esteve presente, mas foi somente 3 anos depois, 
              aos 16 anos que foi onde eu dei o meu primeiro passo para transformar essa curiosidade em habilidade.
              <br />
              <br />
              Hoje estou trabalhando para ser um desenvolvedor Full-Stack,
              aplico essa mesma dedicação para criar projetos robustos e funcionais, do front ao back-end.
              Busco sempre aplicar essa mesma dedicação e curiosidade para criar soluções digitais completas. No lado do front-end, 
              meu foco é construir experiências de usuário intuitivas e elegantes. No back-end, me dedico a desenvolver a lógica robusta e segura que sustenta a aplicação, 
              sempre buscando a melhor performance. Meu objetivo é continuar evoluindo e contribuir para o mundo digital com projetos inovadores e de alta qualidade."
              <br />
              <br />
              ⁠<i>"Sou só um vírus, querendo escapar, dos programadores da vida." Wesley D'Amico</i>
            </Typography>
            </StyledContainer>
</Fade>
</Slide>
        </StyledContentWrapper>
      </section>
    </StyledAbout>
  );
};

export default About;