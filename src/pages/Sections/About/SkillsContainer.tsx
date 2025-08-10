import { styled, Typography } from "@mui/material";
import { FaMousePointer, FaServer } from "react-icons/fa";

// Styled Components
const StyledSkillsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    // Para telas menores, ajusta o padding e o espaçamento
    padding: theme.spacing(1),
    gap: theme.spacing(2),
  },
}));

const StyledSkillItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  borderLeft: `4px solid ${theme.palette.secondary.main}`,
  [theme.breakpoints.down("md")]: {
    // Para telas menores, o alinhamento pode ser centralizado ou mantido
    alignItems: "center", // Alinha o texto ao centro para telas menores
    textAlign: "center",
  },
}));

const StyledSkillTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  fontWeight: "bold",
  "& svg": {
    fontSize: "1.5rem",
    color: theme.palette.secondary.main,
  },
}));

// ... (o componente em si não precisa de alterações)

const SkillsContainer = () => {
  return (
    <StyledSkillsContainer>
      <StyledSkillItem>
        <StyledSkillTitle variant="h5">
          Frontend Developer <FaMousePointer />
        </StyledSkillTitle>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eum ratione temporibus fugiat minima nisi voluptatem voluptatibus, consectetur eius perferendis blanditiis pariatur officia distinctio consequuntur. Eaque voluptatem perferendis rem fugiat!
        </Typography>
      </StyledSkillItem>

      <StyledSkillItem>
        <StyledSkillTitle variant="h5">
          Backend Developer <FaServer />
        </StyledSkillTitle>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ratione error aperiam quia nobis esse, maiores ad similique officia ipsum obcaecati commodi. Saepe vitae labore minus ratione, optio veritatis illo.
        </Typography>
      </StyledSkillItem>

      <StyledSkillItem>
        <StyledSkillTitle variant="h5">
          Designer UX/UI <FaServer />
        </StyledSkillTitle>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ratione error aperiam quia nobis esse, maiores ad similique officia ipsum obcaecati commodi. Saepe vitae labore minus ratione, optio veritatis illo.
        </Typography>
      </StyledSkillItem>
    </StyledSkillsContainer>
  );
};

export default SkillsContainer;