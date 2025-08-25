import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        background: "linear-gradient(to right, #000000, #2F0743)",
        display: "flex",
        justifyContent: "space-evenly"
    }))


    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem><a href="#about-me" style={{textDecoration:"none", color:"white", scrollBehavior:"smooth"}}>Sobre mim</a></MenuItem>
                    <MenuItem><a href="#skills" style={{textDecoration:"none", color:"white", scrollBehavior:"smooth"}}>Habilidades</a></MenuItem>
                    <MenuItem><a href="#projects" style={{textDecoration: "none", color:"white", scrollBehavior:"smooth"}}>Projetos</a></MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar