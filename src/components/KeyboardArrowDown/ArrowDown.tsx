import { Box, keyframes } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// animação bounce
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

type ScrollDownProps = {
  targetId: string;
};

const ScrollDown = ({ targetId }: ScrollDownProps) => {
  const handleClick = () => {
    document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        cursor: "pointer",
        color: "white",
        animation: `${bounce} 2s infinite`,
      }}
    >
      <KeyboardArrowDownIcon fontSize="large" />
    </Box>
  );
};

export default ScrollDown;
