import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        background: "linear-gradient(to right, #000000, #2F0743)",
        display: "flex",
        justifyContent: "space-evenly",
    }))

const StyledLink = styled("a")(({ theme }) => ({
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    transition: "all 0.3s ease",
    "&:hover": {
    color: theme.palette.secondary.main,
    transform: "scale(1.1)",
  },
}));


    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>
                        <StyledLink href="#about-me">Sobre mim</StyledLink>
                    </MenuItem>

                    <MenuItem>
                        <StyledLink href="#skills">Habilidades</StyledLink>
                    </MenuItem>

                    <MenuItem>
                        <StyledLink href="#projects">Projetos</StyledLink>
                    </MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar