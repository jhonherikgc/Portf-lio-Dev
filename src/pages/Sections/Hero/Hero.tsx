import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../assets/images/avatar.png.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";


// Styled Components
const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  maxWidth: "400px", // Limita o tamanho da imagem em telas muito grandes
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  // ✅ Adicionando um estilo para telas de PC para mover a imagem para a esquerda
  [theme.breakpoints.up("md")]: {
    paddingLeft: "-100px",
    marginLeft: "-100px",
    width:"100%",
    marginTop:"-15px"
  },
}));

// Main Component
const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Foto e background*/}
          <Grid>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} alt="Avatar" />
              </Box>
            </Box>
          </Grid>

          {}
          <Grid>
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              pb={2}
              sx={{
                position: {md:"absolute"},
                marginTop: {md:"-0,01%"},
                paddingTop: {md:"10px"},
                marginLeft: {md:"-1%"}
              }}
            >
              Jhon Herik Gomes de Castro
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
              sx={{
                position: {md:"absolute"},
                marginTop: {md:"5%"},
                paddingTop: {md:"10px"},
                marginLeft: {md:"-1%"}
              }}
            >
              I'm a Future Software Engineer
            </Typography>

            {/* Botões */}
            <Grid
              container
              display="flex"
              justifyContent="center"
              spacing={3}
              pt={3}
              sx={{
                position: {md:"absolute"},
                marginTop: {md:"10%"},
                marginLeft: {md:"0"},
              }}
            >
              <Grid>
                <StyledButton onClick={() => {}}>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>

              <Grid>
                <StyledButton onClick={() => {}}>
                  <MailOutlineIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>

                <Grid>
                <StyledButton onClick={() => {}}>
                  <LinkedInIcon />
                  <Typography>Linkedin</Typography>
                </StyledButton>
              </Grid>

                <Grid>
                <StyledButton onClick={() => {}}>
                  <GitHubIcon />
                  <Typography>Github</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
