import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))


    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem><a href="#about-me" style={{textDecoration:"none", color:"white", scrollBehavior:"smooth"}}>Sobre mim</a></MenuItem>
                    <MenuItem><a href="#skills" style={{textDecoration:"none", color:"white", scrollBehavior:"smooth"}}>Habilidades</a></MenuItem>
                    <MenuItem>Projetos</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar