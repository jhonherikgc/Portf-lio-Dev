import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import ScrollDown from "../../../components/KeyboardArrowDown/ArrowDown";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";
import TextType from "../../../components/Typing/TextType";
import cvFile from "../../../assets/images/jhon_cv.pdf";
import Avatar from "../../../assets/images/avatar.png.jpg";

const RECIPIENT_EMAIL = "jhonherik006@gmail.com";
const EMAIL_BODY = "Olá, como podemos criar juntos?";

const StyledHero = styled("section")(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  background: theme.palette.gradient.dark,
  padding: "clamp(6.25rem, 8vw, 7.25rem) 0 clamp(3.5rem, 5vw, 4.5rem)",
}));

const HeroLayout = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(240px, 0.85fr) minmax(0, 1fr)",
  alignItems: "center",
  gap: theme.spacing(5),
  minHeight: "calc(100vh - 10.75rem)",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
    minHeight: "auto",
    textAlign: "center",
  },
}));

const VisualColumn = styled("div")(({ theme }) => ({
  position: "relative",
  display: "grid",
  placeItems: "center",
  minHeight: 360,

  [theme.breakpoints.down("md")]: {
    minHeight: 270,
  },
}));

const BackgroundWrap = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "min(480px, 82vw)",
  inset: "50% auto auto 50%",
  transform: "translate(-50%, -50%)",
  opacity: 0.92,
  pointerEvents: "none",

  [theme.breakpoints.down("md")]: {
    width: "min(360px, 86vw)",
  },
}));

const PortraitFrame = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  width: "clamp(210px, 22vw, 290px)",
  aspectRatio: "1",
  borderRadius: "50%",
  padding: 6,
  border: "1px solid rgba(255, 255, 255, 0.45)",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(104,9,167,0.22))",
  boxShadow:
    "0 26px 80px rgba(0, 0, 0, 0.4), 0 0 70px rgba(104, 9, 167, 0.22)",

  [theme.breakpoints.down("sm")]: {
    width: "min(220px, 64vw)",
  },
}));

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: "50%",
});

const ContentColumn = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  maxWidth: 640,

  [theme.breakpoints.down("md")]: {
    justifySelf: "center",
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "clamp(2.25rem, 4.2vw, 3.55rem)",
  fontWeight: 800,
  lineHeight: 1.04,
  letterSpacing: 0,
  marginBottom: theme.spacing(2),
}));

const RoleLine = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: "0.35rem",
  fontSize: "clamp(1.05rem, 2vw, 1.55rem)",
  lineHeight: 1.25,
  minHeight: "2.35rem",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const RoleText = styled("span")({
  color: "#b026ff",
  textShadow: "0 0 18px rgba(176, 38, 255, 0.28)",
});

const ActionRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const ActionButton = styled("button")(({ theme }) => ({
  minHeight: 44,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: 6,
  background: "#f7f7f7",
  color: "#09090b",
  cursor: "pointer",
  fontSize: "0.95rem",
  fontWeight: 800,
  padding: "0.7rem 1rem",
  transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease",

  "&:hover": {
    background: "#ffffff",
    transform: "translateY(-3px)",
    boxShadow: "0 16px 38px rgba(255, 255, 255, 0.08)",
  },

  "&:focus-visible": {
    outline: "2px solid #b026ff",
    outlineOffset: 3,
  },
}));

const ActionLink = styled("a")(({ theme }) => ({
  minHeight: 44,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  border: "1px solid rgba(168, 85, 247, 0.45)",
  borderRadius: 6,
  background: "rgba(255, 255, 255, 0.045)",
  color: theme.palette.primary.contrastText,
  fontSize: "0.95rem",
  fontWeight: 800,
  padding: "0.7rem 1rem",
  textDecoration: "none",
  transition: "transform 0.22s ease, border-color 0.22s ease, background 0.22s ease",

  "&:hover": {
    background: "rgba(168, 85, 247, 0.14)",
    borderColor: "rgba(176, 38, 255, 0.72)",
    transform: "translateY(-3px)",
  },

  "&:focus-visible": {
    outline: "2px solid #b026ff",
    outlineOffset: 3,
  },
}));

const Hero = () => {
  const { t } = useTranslation();
  const prefixText = t("hero.prefix");
  const roles = Array.isArray(t("hero.roles", { returnObjects: true }))
    ? (t("hero.roles", { returnObjects: true }) as string[])
    : [
        "um Eng. de Software em formação",
        "um Desenvolvedor Full Stack",
        "um Entusiasta da Tecnologia",
      ];

  const emailSubject = t("hero.contact");
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(EMAIL_BODY)}`;

  const handleDownloadCv = useCallback(() => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "jhon_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <HeroLayout>
          <VisualColumn>
            <BackgroundWrap>
              <AnimatedBackground />
            </BackgroundWrap>
            <PortraitFrame>
              <StyledImg src={Avatar} alt="Jhon Herik Gomes de Castro" />
            </PortraitFrame>
          </VisualColumn>

          <ContentColumn>
            <HeroTitle variant="h1">{t("hero.greeting")}</HeroTitle>

            <RoleLine variant="h2">
              <Box component="span">{prefixText}</Box>
              <RoleText>
                <TextType
                  as="span"
                  text={roles}
                  typingSpeed={40}
                  deletingSpeed={30}
                />
              </RoleText>
            </RoleLine>

            <ActionRow>
              <ActionButton type="button" onClick={handleDownloadCv}>
                <DownloadIcon fontSize="small" />
                {t("hero.downloadCV")}
              </ActionButton>
              <ActionLink
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailOutlineIcon fontSize="small" />
                {t("hero.contact")}
              </ActionLink>
              <ActionLink
                href="https://www.linkedin.com/in/jhonherikgc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="small" />
                {t("hero.linkedin")}
              </ActionLink>
              <ActionLink
                href="https://github.com/jhonherikgc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="small" />
                {t("hero.github")}
              </ActionLink>
            </ActionRow>
          </ContentColumn>
        </HeroLayout>
      </Container>
      <ScrollDown targetId="#about-me" />
    </StyledHero>
  );
};

export default Hero;
