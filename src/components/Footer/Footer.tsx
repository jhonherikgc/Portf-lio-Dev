
import { Box, Container, Divider, Link, Stack, Typography, styled } from "@mui/material";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import Icon from "../../assets/images/FavIcon.png"

const StyledFooter = styled(Box)(({ theme }) => ({
  background: theme.palette.footer.dark,
  color: "white",
  padding: theme.spacing(4, 0),
  marginTop: 'auto',
  height:"200px"
}));

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // @ts-ignore
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Stack
          paddingTop="20px"
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={Icon} alt="Icon" style={{ height: '50px', width: '50px', borderRadius: '50%'}} />
            <Typography variant="h6" color="white">
              Portfolio Dev
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Link href="https://www.instagram.com/jhonherikgc" target="_blank" rel="noopener noreferrer" color="inherit">
              <Instagram />
            </Link>
            <Link href="https://github.com/jhonherikgc" target="_blank" rel="noopener noreferrer" color="inherit">
              <GitHub />
            </Link>
            <Link href="https://www.linkedin.com/in/jhonherikgc/" target="_blank" rel="noopener noreferrer" color="inherit">
              <LinkedIn />
            </Link>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="white" align="center">
          {'Copyright © '}
        Jhon Herik Gomes de Castro {' '}
          {currentYear}.
        </Typography>
      </Container>
    </StyledFooter>
  );
}
