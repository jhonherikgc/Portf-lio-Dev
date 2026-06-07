import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Container, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import ScrollDown from "../../../components/KeyboardArrowDown/ArrowDown";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";
import TextType from "../../../components/Typing/TextType";
import cvFile from "../../../assets/images/jhon_cv.pdf";
import Avatar from "../../../assets/images/avatar.jpg";

const RECIPIENT_EMAIL = "jhonherik006@gmail.com";
const EMAIL_BODY = "Olá, como podemos criar juntos?";
const FALLBACK_ROLES = [
  "um Eng. de Software em formação",
  "um Desenvolvedor Full Stack",
  "um Entusiasta da Tecnologia",
];

const StyledHero = styled("section")(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  background: theme.palette.gradient.dark,
  padding: "clamp(6.25rem, 9vw, 7.5rem) 0 clamp(3.75rem, 6vw, 5rem)",
}));

const HeroLayout = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.08fr) minmax(280px, 0.72fr)",
  alignItems: "center",
  gap: theme.spacing(7),
  minHeight: "calc(100vh - 12rem)",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
    minHeight: "auto",
  },
}));

const ContentColumn = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  maxWidth: 680,

  [theme.breakpoints.down("md")]: {
    order: 2,
    textAlign: "center",
    justifySelf: "center",
  },
}));

const HeroTitle = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontFamily:
    '"Inter", "Segoe UI", "Helvetica Neue", Arial, ui-sans-serif, sans-serif',
  fontSize: "clamp(2.65rem, 5vw, 4.65rem)",
  fontWeight: 850,
  lineHeight: 1,
  letterSpacing: 0,
  margin: 0,
  textWrap: "balance",

  [theme.breakpoints.down("sm")]: {
    fontSize: "clamp(2.1rem, 10vw, 2.9rem)",
  },
}));

const RoleLine = styled("p")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: "0.45rem",
  color: "rgba(255, 255, 255, 0.78)",
  fontFamily:
    '"Inter", "Segoe UI", "Helvetica Neue", Arial, ui-sans-serif, sans-serif',
  fontSize: "clamp(1.25rem, 2.4vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1.25,
  margin: "1.15rem 0 0",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.08rem",
  },
}));

const RoleValue = styled("span")({
  display: "inline-block",
  color: "#b026ff",
  fontWeight: 800,
  minHeight: "1.2em",
  minWidth: "min(100%, 28ch)",
  textShadow: "0 0 22px rgba(176, 38, 255, 0.25)",

  "& .hero-role-cursor": {
    color: "#d68cff",
    fontWeight: 600,
    textShadow: "0 0 18px rgba(176, 38, 255, 0.45)",
  },
});

const ActionRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.25),
  marginTop: theme.spacing(3.5),

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const actionBase = {
  minHeight: 44,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.55rem",
  borderRadius: 6,
  cursor: "pointer",
  fontFamily:
    '"Inter", "Segoe UI", "Helvetica Neue", Arial, ui-sans-serif, sans-serif',
  fontSize: "0.92rem",
  fontWeight: 800,
  padding: "0.7rem 1rem",
  textDecoration: "none",
  transition:
    "transform 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease",
};

const ActionButton = styled("button")({
  ...actionBase,
  border: "1px solid rgba(255, 255, 255, 0.2)",
  background: "#f7f7f7",
  color: "#09090b",

  "&:hover": {
    background: "#ffffff",
    transform: "translateY(-3px)",
    boxShadow: "0 16px 38px rgba(255, 255, 255, 0.08)",
  },

  "&:focus-visible": {
    outline: "2px solid #b026ff",
    outlineOffset: 3,
  },
});

const ActionLink = styled("a")(({ theme }) => ({
  ...actionBase,
  border: "1px solid rgba(168, 85, 247, 0.45)",
  background: "rgba(255, 255, 255, 0.045)",
  color: theme.palette.primary.contrastText,

  "&:hover": {
    background: "rgba(176, 38, 255, 0.14)",
    borderColor: "rgba(176, 38, 255, 0.72)",
    transform: "translateY(-3px)",
  },

  "&:focus-visible": {
    outline: "2px solid #b026ff",
    outlineOffset: 3,
  },
}));

const VisualColumn = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "grid",
  placeItems: "center",
  minHeight: 420,

  [theme.breakpoints.down("md")]: {
    order: 1,
    minHeight: 300,
  },
}));

const BackgroundWrap = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "min(520px, 78vw)",
  inset: "50% auto auto 50%",
  transform: "translate(-50%, -50%)",
  opacity: 0.65,
  pointerEvents: "none",

  [theme.breakpoints.down("md")]: {
    width: "min(380px, 88vw)",
  },
}));

const PortraitFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: "clamp(250px, 24vw, 350px)",
  aspectRatio: "1 / 1",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "50%",
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.045)",
  boxShadow:
    "0 28px 90px rgba(0, 0, 0, 0.38), 0 0 70px rgba(176, 38, 255, 0.16)",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 8,
    zIndex: 1,
    border: "1px solid rgba(214, 140, 255, 0.34)",
    borderRadius: "50%",
    pointerEvents: "none",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 2,
    pointerEvents: "none",
    background: "linear-gradient(180deg, transparent 58%, rgba(0, 0, 0, 0.22))",
  },

  [theme.breakpoints.down("sm")]: {
    width: "min(235px, 64vw)",
  },
}));

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  objectPosition: "50% 50%",
  transform: "scale(2.05)",
  transformOrigin: "50% 50%",
});

const Hero = () => {
  const { t } = useTranslation();
  const prefixText = t("hero.prefix");
  const roles = useMemo(() => {
    const translatedRoles = t("hero.roles", { returnObjects: true });

    return Array.isArray(translatedRoles)
      ? (translatedRoles as string[])
      : FALLBACK_ROLES;
  }, [t]);

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
          <ContentColumn>
            <HeroTitle>{t("hero.greeting")}</HeroTitle>
            <RoleLine>
              <span>{prefixText}</span>
              <RoleValue>
                <TextType
                  aria-label={roles.join(", ")}
                  cursorClassName="hero-role-cursor"
                  deletingSpeed={26}
                  pauseDuration={1500}
                  text={roles}
                  typingSpeed={48}
                />
              </RoleValue>
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

          <VisualColumn>
            <BackgroundWrap>
              <AnimatedBackground />
            </BackgroundWrap>
            <PortraitFrame>
              <StyledImg src={Avatar} alt="Jhon Herik Gomes de Castro" />
            </PortraitFrame>
          </VisualColumn>
        </HeroLayout>
      </Container>
      <ScrollDown targetId="#about-me" />
    </StyledHero>
  );
};

export default Hero;
