import { styled, Typography, Button, Container, Stack, Grid } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from "../../../assets/images/avatar.png.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
    
    const StyledHero = styled("section")(() => ({
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
                    <Grid>
                        <StyledAvatar src={Avatar} alt="Jhon Herik's Avatar" />
                    </Grid>

                    <Grid>
                        <Typography color="primary" variant="h3" component="h1" gutterBottom>
                            Jhon Herik Gomes de Castro
                        </Typography>
                        <Typography color="primary" variant="h5" component="p" gutterBottom>
                            I'm a future Software Engineer
                        </Typography>
                        
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                startIcon={<DownloadIcon />} 
                            >
                                Download CV
                            </Button>
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                startIcon={<EmailIcon />}
                            >
                                Contact Me
                            </Button>
                            <Button
                                variant="outlined" 
                                color="primary" 
                                startIcon={<GitHubIcon />} 
                            >
                                GitHub
                            </Button>
                            <Button
                                variant="outlined" 
                                color="primary" 
                                startIcon={<LinkedInIcon/>} 
                            >
                                Linkedin
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;