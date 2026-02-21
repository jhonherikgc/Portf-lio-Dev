import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import GitHubIcon from "@mui/icons-material/GitHub";
import TiltedCard from "../../../components/TiltedCard/TiltedCard";
import { useTranslation } from "react-i18next";

import siteCorinthians from "../../../assets/images/Proj_Corinthians_photo.png";
import aluraChat from "../../../assets/images/alura-chat_project.png";
import toDoList from "../../../assets/images/ToDo_list_project.png";
import Jafetech from "../../../assets/images/jafetech_proj.png";
import ERP from "../../../assets/images/ERP.png";
import honeepay from "../../../assets/images/honeepay.png";
import JohnnyBarbershop from "../../../assets/images/JohnnyBarbershop.png";
import loginPage from "../../../assets/images/LoginPage.png";

type ProjectRowProps = {
  imageSrc?: string;
  imageAlt?: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  imageFirst?: boolean;
};

const ProjectRow: React.FC<ProjectRowProps> = ({
  imageSrc,
  imageAlt = "Imagem do projeto",
  description,
  githubUrl,
  imageFirst = true,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const rowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: 24,
    width: "100%",
    maxWidth: 1120,
    margin: "60px auto",
    padding: 20,
  };

  const panelBase: React.CSSProperties = {
    flex: "1 1 50%",
    background: "#0f172a71",
    color: "#fff",
    borderRadius: 24,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid rgba(255,255,255,0.25)",
    width: "100%",
    position: "relative", // Necessário para o posicionamento do botão
    minHeight: 250,
  };

  const textPanel: React.CSSProperties = {
    ...panelBase,
    fontSize: isMobile ? 16 : 20,
    fontWeight: 700,
    lineHeight: 1.5,
    textAlign: "center",
    paddingBottom: 60, // Espaço extra para o botão não sobrepor o texto
  };

  const iconsBox: React.CSSProperties = {
    position: "absolute",
    bottom: 20,
    // Se imageFirst for true, o texto está à direita -> botão à direita.
    // Se for false, o texto está à esquerda -> botão à esquerda.
    right: imageFirst ? 25 : "auto",
    left: !imageFirst ? 25 : "auto",
    display: "flex",
    gap: 14,
  };

  const ImagePanel = (
    <div style={panelBase}>
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 18,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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

  const TextPanel = (
    <div style={textPanel}>
      <span>{description}</span>
      <div style={iconsBox}>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <GitHubIcon
              sx={{
                fontSize: 32,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.3)",
                  color: "#6e5494", // Cor clássica do GitHub no hover
                },
              }}
            />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div style={rowStyle}>
      {imageFirst ? (
        <>
          {" "}
          {ImagePanel} {TextPanel}{" "}
        </>
      ) : (
        <>
          {" "}
          {TextPanel} {ImagePanel}{" "}
        </>
      )}
    </div>
  );
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <main
      style={{
        background: "linear-gradient(to right, #000000, #2F0743)",
        padding: 24,
        overflowX: "hidden",
      }}
    >
      <Fade>
        <h1
          id="projects"
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: 800,
            marginBottom: 40,
          }}
        >
          {t("projects.title")}
        </h1>
      </Fade>

      <Slide direction="right">
        <ProjectRow
          imageFirst
          imageSrc={siteCorinthians}
          description={t("projects.project1.description")}
          githubUrl="https://github.com/jhonherikgc/site-corinthians"
        />
      </Slide>

      <Slide direction="left">
        <ProjectRow
          imageFirst={false}
          imageSrc={aluraChat}
          description={t("projects.project2.description")}
          githubUrl="https://github.com/jhonherikgc/Chat-bot-alura"
        />
      </Slide>

      <Slide direction="right">
        <ProjectRow
          imageFirst
          imageSrc={toDoList}
          description={t("projects.project3.description")}
          githubUrl="https://github.com/jhonherikgc/TO-DO-LIST"
        />
      </Slide>

      <Slide direction="left">
        <ProjectRow
          imageFirst={false}
          imageSrc={Jafetech}
          description={t("projects.project4.description")}
          githubUrl="https://github.com/jhonherikgc/JAFETECH"
        />
      </Slide>

      <Slide direction="right">
        <ProjectRow
          imageFirst
          imageSrc={loginPage}
          description={t("projects.project5.description")}
          githubUrl="https://github.com/jhonherikgc/Login-Page"
        />
      </Slide>

      <Slide direction="left">
        <ProjectRow
          imageFirst={false}
          imageSrc={JohnnyBarbershop}
          description={t("projects.project6.description")}
          githubUrl="https://github.com/jhonherikgc/Johnny-Barber-Shop"
        />
      </Slide>

      <Slide direction="right">
        <ProjectRow
          imageFirst
          imageSrc={ERP}
          description={t("projects.project7.description")}
          githubUrl="https://github.com/Vexwe/ERP"
        />
      </Slide>

      <Slide direction="left">
        <ProjectRow
          imageFirst={false}
          imageSrc={honeepay}
          description={t("projects.project8.description")}
          githubUrl="https://github.com/jhonherikgc"
        />
      </Slide>
    </main>
  );
}
