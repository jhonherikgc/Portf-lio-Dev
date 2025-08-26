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
    paddingTop: "0",
  },
}));


const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  maxWidth: "400px",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
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

          {/* Texto e Botões */}
          <Grid>
            <Fade>
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
            </Fade>
            <Fade delay={500}>
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
            </Fade>

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
                    <a href="https://www.linkedin.com/in/jhonherikgc/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white'}}>
                    <Typography>Linkedin</Typography>
                    </a>
                  </StyledButton>
                </Grid>
                <Grid>
                  <StyledButton onClick={() => {}}>
                    <GitHubIcon />
                    <a href="https://github.com/jhonherikgc" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white'}}>
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