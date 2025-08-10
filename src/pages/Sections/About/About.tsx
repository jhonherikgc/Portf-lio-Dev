import { styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/avatar.png.jpg";

// --- Styled Components --- //


const StyledAbout = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
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
  marginBottom:"30px",
  gap: theme.spacing(8),
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  [theme.breakpoints.up("md")]: {
    maxWidth: "900px",
    width: "100%", 
    marginLeft: "50px",
    height:"350px",
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
            >
         About me
        </Typography>
        <StyledContentWrapper>
          <StyledImg src={Avatar} alt="Avatar" />
          <StyledContainer>
            Olá, me chamo Jhon Herik tenho 19 anos. Minha jornada na programação teve início aos 13 anos, quando a beleza e o mistério do código de um 'hack' de Minecraft 
            despertaram minha curiosidade. A vontade de aprender sempre esteve presente, mas foi somente 3 anos depois, 
            aos 16 anos que dei o primeiro passo para transformar essa curiosidade em habilidade.
            <br>
            </br>
            <br>
            </br>
            Hoje estou trabalhando para ser um desenvolvedor Web Full-Stack,
            aplico essa mesma dedicação para criar projetos robustos e funcionais, do front ao back-end.
            Hoje, busco sempre aplicar essa mesma dedicação e curiosidade para criar soluções digitais completas. No lado do front-end, 
            meu foco é construir experiências de usuário intuitivas e elegantes. No back-end, me dedico a desenvolver a lógica robusta e segura que sustenta a aplicação, 
            sempre buscando a melhor performance. Meu objetivo é continuar evoluindo e contribuir para o mundo digital com projetos inovadores e de alta qualidade."
            <br>
            </br>
            <br>
            </br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis repudiandae omnis aliquam dignissimos ullam atque, 
            velit at dolorum fuga quod sed doloribus repellat commodi consequatur praesentium labore, ad quibusdam sequi!
            </StyledContainer>
        </StyledContentWrapper>
      </section>
    </StyledAbout>
  );
};

export default About;