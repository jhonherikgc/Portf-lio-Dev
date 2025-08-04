import { styled, Typography } from "@mui/material"
import Avatar from "../../../assets/images/avatar.png.jpg"
import { Container, Grid} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyleHero = styled("div")(() => ({
        backgroundColor: "black",
        height:"100vh"
    }))
    const StyledImg = styled ("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))
  return (
    <>
    <StyleHero>
        <Container>
<Grid container spacing={2}>
  <Grid size={4}>
        <StyledImg src = {Avatar} />
  </Grid>
  <Grid size={8}>
    <Typography color="primary" variant="h3">Jhon Herik Gomes de Castro</Typography>
    <Typography color="primary" variant="h5">I'm a future Software Enginer</Typography>

    <button>
      <DownloadIcon/>Donwload CV</button>
    <button>
      <EmailIcon/>Contact Me</button>
  </Grid>
</Grid>
        </Container>
    </StyleHero>
    </>
  )
}

export default Hero
