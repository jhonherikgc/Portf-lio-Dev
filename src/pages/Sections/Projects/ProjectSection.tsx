import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import GitHubIcon from "@mui/icons-material/GitHub";
import TiltedCard from "../../../components/TiltedCard/TiltedCard";
import { useTranslation } from "react-i18next";

import {
  SiTypescript, SiTailwindcss, SiMysql, SiGooglegemini, SiVite, SiEjs,
  SiMongodb, SiFlask, SiBootstrap, SiJavascript, SiReact, SiPhp,
  SiPython, SiHtml5, SiCss3, SiSass,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

import siteCorinthians from "../../../assets/images/Proj_Corinthians_photo.png";
import aluraChat from "../../../assets/images/alura-chat_project.png";
import toDoList from "../../../assets/images/ToDo_list_project.png";
import Jafetech from "../../../assets/images/jafetech_proj.png";
import ERP from "../../../assets/images/ERP.png";
import honeepay from "../../../assets/images/honeepay.png";
import JohnnyBarbershop from "../../../assets/images/JohnnyBarbershop.png";
import loginPage from "../../../assets/images/LoginPage.png";

type TechIcon = { icon: React.ReactNode; name: string; };

type ProjectRowProps = {
  imageSrc?: string;
  imageAlt?: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  imageFirst?: boolean;
  techs?: TechIcon[];
};

const ProjectRow: React.FC<ProjectRowProps> = ({
  imageSrc, imageAlt = "Imagem do projeto", description, githubUrl, imageFirst = true, techs = [],
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const panelBase: React.CSSProperties = {
    flex: "1 1 50%", background: "#0f172a71", color: "#fff", borderRadius: 24, padding: 20,
    display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid rgba(255,255,255,0.25)",
    width: "100%", position: "relative", minHeight: 250,
  };

  const textPanel: React.CSSProperties = {
    ...panelBase, fontSize: isMobile ? 16 : 20, fontWeight: 700, lineHeight: 1.5, textAlign: "center", paddingBottom: 80,
  };

  const iconsBox: React.CSSProperties = {
    position: "absolute", bottom: 20, left: 25, right: 25, display: "flex", justifyContent: "space-between", alignItems: "center",
  };

  const actionButtonBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 14,
    background: "transparent",
    color: "#fff",
  };

  const TextPanel = (
    <div style={textPanel}>
      <span>{description}</span>
      <div style={iconsBox}>
        <div style={{ display: "flex", gap: 14 }}>
          {techs.map((tech, index) => (
            <Fade key={index} delay={index * 100} triggerOnce>
              <div
                title={tech.name}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{
                  ...actionButtonBase,
                  fontSize: 28,
                  cursor: "pointer",
                  transform: hoveredTech === index ? "translateY(-8px)" : "translateY(0)",
                  color: hoveredTech === index ? "#6809a7" : "#fff",
                  boxShadow: hoveredTech === index ? "0px 10px 20px rgba(0, 163, 255, 0.1)" : "none",
                  transition: "transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {tech.icon}
              </div>
            </Fade>
          ))}
        </div>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
            style={{
              ...actionButtonBase,
              color: isGithubHovered ? "#6809a7" : "#fff",
              textDecoration: "none",
              transform: isGithubHovered ? "translateY(-8px)" : "translateY(0)",
              boxShadow: isGithubHovered ? "0px 10px 20px rgba(0, 163, 255, 0.1)" : "none",
              transition: "transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <GitHubIcon sx={{ fontSize: 32, color: "inherit" }} />
          </a>
        )}
      </div>
    </div>
  );

  const ImagePanel = (
    <div style={panelBase}>
      <div style={{ width: "100%", height: "100%", borderRadius: 18, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {imageSrc && (
          <TiltedCard
            imageSrc={imageSrc}
            altText={imageAlt}
            containerWidth="100%"
            containerHeight="100%"
            imageWidth="100%"
            imageHeight="100%"
            rotateAmplitude={isMobile ? 0 : 12}
            scaleOnHover={isMobile ? 1 : 1.05}
            showMobileWarning={false}
            showTooltip={!isMobile}
            displayOverlayContent={false}
          />
        )}
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 24, width: "100%", maxWidth: 1120, margin: "60px auto", padding: 20 }}>
      {imageFirst || isMobile ? (
        <>{ImagePanel}{TextPanel}</>
      ) : (
        <>{TextPanel}{ImagePanel}</>
      )}
    </div>
  );
};

export default function Projects() {
  const { t } = useTranslation();
  const [mostrarTudo, setMostrarTudo] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <main style={{ background: "linear-gradient(to right, #000000, #2F0743)", padding: 24, overflowX: "hidden" }}>
      <Fade>
        <h1 id="projects" style={{ color: "#fff", textAlign: "center", fontWeight: 800, marginBottom: 40 }}>
          {t("projects.title")}
        </h1>
      </Fade>

      {/* BLOCO 1: SEMPRE VISÍVEIS */}
      <Slide direction="right">
        <ProjectRow imageFirst imageSrc={siteCorinthians} description={t("projects.project1.description")} githubUrl="https://github.com/jhonherikgc/site-corinthians" techs={[{ icon: <SiHtml5 />, name: "HTML5" }, { icon: <SiCss3 />, name: "CSS3" }, { icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiBootstrap />, name: "Bootstrap" }]} />
      </Slide>

      <Slide direction="left">
        <ProjectRow imageFirst={false} imageSrc={aluraChat} description={t("projects.project2.description")} githubUrl="https://github.com/jhonherikgc/Chat-bot-alura" techs={[{ icon: <SiPython />, name: "Python" }, { icon: <SiFlask />, name: "Flask" }, { icon: <SiGooglegemini />, name: "Google Gemini" }]} />
      </Slide>

      <Slide direction="right">
        <ProjectRow imageFirst imageSrc={toDoList} description={t("projects.project3.description")} githubUrl="https://github.com/jhonherikgc/TO-DO-LIST" techs={[{ icon: <SiHtml5 />, name: "Html5" }, { icon: <SiCss3 />, name: "CSS3" }, { icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiSass />, name: "Sass" }]} />
      </Slide>

      {/* BLOCO 2: CONDICIONAL */}
      {mostrarTudo && (
        <>
          <Slide direction="left">
            <ProjectRow imageFirst={false} imageSrc={Jafetech} description={t("projects.project4.description")} githubUrl="https://github.com/jhonherikgc/JAFETECH" techs={[{ icon: <SiHtml5 />, name: "HTML5" }, { icon: <SiCss3 />, name: "CSS3" }, { icon: <SiJavascript />, name: "JavaScript" }, { icon: <SiPhp />, name: "PhP" }]} />
          </Slide>

          <Slide direction="right">
            <ProjectRow imageFirst imageSrc={loginPage} description={t("projects.project5.description")} githubUrl="https://github.com/jhonherikgc/Login-Page" techs={[{ icon: <SiTypescript />, name: "TypeScript" }, { icon: <SiReact />, name: "React" }, { icon: <SiTailwindcss />, name: "Tailwind CSS" }, { icon: <SiVite />, name: "Vite" }]} />
          </Slide>

          <Slide direction="left">
            <ProjectRow imageFirst={false} imageSrc={JohnnyBarbershop} description={t("projects.project6.description")} githubUrl="https://github.com/jhonherikgc/Johnny-Barber-Shop" techs={[{ icon: <SiEjs />, name: "EJS" }, { icon: <SiJavascript />, name: "JavaScript" }, { icon: <DiNodejsSmall />, name: "Node.js" }, { icon: <SiBootstrap />, name: "Bootstrap" }]} />
          </Slide>

          <Slide direction="right">
            <ProjectRow imageFirst imageSrc={ERP} description={t("projects.project7.description")} githubUrl="https://github.com/Vexwe/ERP" techs={[{ icon: <SiReact />, name: "React" }, { icon: <DiNodejsSmall />, name: "Node.js" }, { icon: <SiMysql />, name: "MySQL" }, { icon: <SiVite />, name: "Vite" }]} />
          </Slide>

          <Slide direction="left">
            <ProjectRow imageFirst={false} imageSrc={honeepay} description={t("projects.project8.description")} githubUrl="https://honnepay.com/" techs={[{ icon: <SiEjs />, name: "EJS" }, { icon: <SiReact />, name: "React" }, { icon: <SiMongodb />, name: "MongoDB" }, { icon: <SiVite />, name: "Vite" }]} />
          </Slide>
        </>
      )}

      {/* mostrar mais projetos */}
      <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
        <button
          onClick={() => setMostrarTudo(!mostrarTudo)}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          style={{
            background: "transparent",
            color: "#fff",
            border: "1px solid",
            borderColor: "#6809a7",
            padding: "12px 28px",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transform: isButtonHovered ? "translateY(-8px)" : "translateY(0)",
            boxShadow: isButtonHovered
              ? "0px 10px 20px rgba(0, 163, 255, 0.1)"
              : "none",
            transition:
              "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {mostrarTudo ? "Mostrar" : "Mostrar"}
          <span
            style={{
              position: "relative",
              width: 16,
              height: 16,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-hidden
          >
            <span
              style={{
                position: "absolute",
                width: 12,
                height: 2,
                borderRadius: 2,
                background: "#fff",
              }}
            />
            <span
              style={{
                position: "absolute",
                width: 12,
                height: 2,
                borderRadius: 2,
                background: "#fff",
                transform: mostrarTudo ? "rotate(90deg) scaleX(0)" : "rotate(90deg) scaleX(1)",
                transition: "transform 0.25s ease",
                transformOrigin: "center",
              }}
            />
          </span>
        </button>
      </div>
    </main>
  );
}
