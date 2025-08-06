import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
}

// Renomeamos o botão estilizado para evitar conflito com o componente
const Button = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

export default StyledButton;
