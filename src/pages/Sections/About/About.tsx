import { styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledAbout = styled("section")(({ theme }) => ({
  background: theme.palette.gradient?.dark || "#0d0d0d",
  color: theme.palette.common.white,
  padding: "clamp(5rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)",
}));

const Inner = styled("div")({
  maxWidth: 1120,
  margin: "0 auto",
});

const Header = styled("header")({
  maxWidth: 760,
  marginBottom: "clamp(2rem, 5vw, 3.5rem)",
});

const Title = styled("h2")({
  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: 0,
  margin: 0,
});

const AccentLine = styled("span")({
  display: "block",
  width: 72,
  height: 3,
  borderRadius: 99,
  marginTop: "1rem",
  background: "linear-gradient(90deg, #b026ff, rgba(176, 38, 255, 0))",
});

const ContentGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.2fr) minmax(320px, 0.8fr)",
  gap: theme.spacing(4),
  alignItems: "stretch",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const BioPanel = styled("article")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: 8,
  background: "rgba(8, 10, 18, 0.62)",
  boxShadow: "0 24px 80px rgba(0, 0, 0, 0.26)",
  padding: theme.spacing(4),

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background:
      "linear-gradient(135deg, rgba(176, 38, 255, 0.12), transparent 42%)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2.5),
  },
}));

const BioContent = styled("div")({
  position: "relative",
  display: "grid",
  gap: "1.25rem",
});

const BioText = styled(Typography)({
  color: "rgba(255, 255, 255, 0.76)",
  fontSize: "1.02rem",
  lineHeight: 1.85,
});

const Quote = styled("blockquote")({
  margin: 0,
  borderLeft: "3px solid #b026ff",
  padding: "0.2rem 0 0.2rem 1rem",
  color: "rgba(255, 255, 255, 0.64)",
  fontStyle: "italic",
  lineHeight: 1.7,
});

const StatsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const StatCard = styled("article")(({ theme }) => ({
  minHeight: 148,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: 8,
  background: "rgba(255, 255, 255, 0.045)",
  padding: theme.spacing(2.5),
  transition:
    "transform 0.22s ease, border-color 0.22s ease, background 0.22s ease",

  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "rgba(176, 38, 255, 0.56)",
    background: "rgba(176, 38, 255, 0.1)",
  },

  "& h3": {
    margin: 0,
    color: "#b026ff",
    fontSize: "clamp(2.1rem, 4vw, 3rem)",
    lineHeight: 1,
  },

  "& p": {
    margin: 0,
    color: "rgba(255, 255, 255, 0.68)",
    fontSize: "0.95rem",
    lineHeight: 1.45,
  },
}));

const stats = [
  { value: "10+", key: "projects" },
  { value: "2+", key: "experience" },
  { value: "5k+", key: "lines" },
  { value: "∞", key: "coffee" },
] as const;

const About = () => {
  const { t } = useTranslation();

  return (
    <StyledAbout id="about-me">
      <Inner>
        <Header>
          <Title>{t("about.title")}</Title>
          <AccentLine aria-hidden="true" />
        </Header>

        <ContentGrid>
          <BioPanel>
            <BioContent>
              <BioText>{t("about.bio")}</BioText>
              <BioText>{t("about.hobbies")}</BioText>
              <Quote>{t("about.quote")}</Quote>
            </BioContent>
          </BioPanel>

          <StatsGrid>
            {stats.map((stat) => (
              <StatCard key={stat.key}>
                <h3>{stat.value}</h3>
                <p>{t(`about.stats.${stat.key}`)}</p>
              </StatCard>
            ))}
          </StatsGrid>
        </ContentGrid>
      </Inner>
    </StyledAbout>
  );
};

export default About;
