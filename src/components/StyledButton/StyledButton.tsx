import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
}

{
  /* Lógica & espaçamento dos botões */
}
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
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    borderColor: "#6809a7",
    boxShadow: "0px 10px 20px rgba(0, 163, 255, 0.1)",
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default StyledButton;
