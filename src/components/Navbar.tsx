import { AppBar, MenuItem, Toolbar, styled, keyframes } from "@mui/material";
import { useCallback } from "react";

// Styled Toolbar
const StyledToolbar = styled(Toolbar)(() => ({
  background: "linear-gradient(to right, #000000, #2F0743)",
  display: "flex",
  justifyContent: "space-evenly",
}));

// Keyframes para animação de hover
const scaleHover = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

// Styled Link com hover animado
const StyledLink = styled("a")(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  fontWeight: 500,
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.secondary.main,
    animation: `${scaleHover} 0.5s ease-in-out forwards`,
  },
}));

const NavBar = () => {
  // Função de scroll lento
  const scrollToElement = useCallback((selector: string, duration = 1500) => {
    const target = document.querySelector(selector);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + distance * progress);
      if (timeElapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  // Handler do clique
  const handleClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault(); // evita scroll padrão rápido
    scrollToElement(targetId, 600); // 1.5s de duração
  };

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem>
          <StyledLink href="#about-me" onClick={(e) => handleClick(e, "#about-me")}>
            Sobre mim
          </StyledLink>
        </MenuItem>

        <MenuItem>
          <StyledLink href="#skills" onClick={(e) => handleClick(e, "#skills")}>
            Habilidades
          </StyledLink>
        </MenuItem>

        <MenuItem>
          <StyledLink href="#projects" onClick={(e) => handleClick(e, "#projects")}>
            Projetos
          </StyledLink>
        </MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
