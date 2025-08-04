import { styled, Typography, Button, Container, Grid } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from "../../../assets/images/avatar.png.jpg";

const Hero = () => {
    
    const StyledHero = styled("section")(({ theme }) => ({
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const StyledAvatar = styled("img")(({ theme }) => ({
        width: "100%",
        maxWidth: "300px", 
        borderRadius: "50%",
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(4), 
        },
    }));

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid 
                    container 
                    spacing={4} 
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} md={4}>
                        <StyledAvatar src={Avatar} alt="Jhon Herik's Avatar" />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Typography color="primary" variant="h3" component="h1" gutterBottom>
                            Jhon Herik Gomes de Castro
                        </Typography>
                        <Typography color="primary" variant="h5" component="p" gutterBottom>
                            I'm a future Software Engineer
                        </Typography>

                        <Button 
                            variant="contained" 
                            color="primary" 
                            startIcon={<DownloadIcon />} 
                            sx={{ mr: 2, mt: 3 }}
                        >
                            Download CV
                        </Button>
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            startIcon={<EmailIcon />}
                            sx={{ mt: 3 }}
                        >
                            Contact Me
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;