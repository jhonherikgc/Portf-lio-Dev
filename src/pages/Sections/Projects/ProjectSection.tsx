import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import siteCorinthians from '../../../assets/images/Proj_Corinthians_photo.png';
import aluraChat from '../../../assets/images/alura-chat_project.png';
import toDoList from '../../../assets/images/ToDo_list_project.png';
import Jafetech from '../../../assets/images/jafetech_proj.png'
import TiltedCard from '../../../components/TiltedCard/TiltedCard';

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
  imageAlt = "Foto do projeto",
  description,
  githubUrl,
  liveUrl,
  imageFirst = true,
}) => {
  const fonts = "helvetica neue";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rowStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 16 : 24,
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: 18,
    padding: isMobile ? 16 : 20,
    width: "100%",
    maxWidth: 1120,
    height: "auto",
    margin: "0 auto",
    marginTop: 60,
  };

  const panelBase: React.CSSProperties = {
    flex: isMobile ? "1 1 100%" : "1 1 45%",
    minWidth: 280,
    background: "#0f172a",
    borderBottom: "3px solid white",
    borderRadius: 24,
    color: "#ffffff",
    padding: isMobile ? 16 : 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts,
  };

  const imagePanel: React.CSSProperties = { ...panelBase, overflow: "hidden" };
  const textPanel: React.CSSProperties = {
    ...panelBase,
    fontSize: isMobile ? 16 : 20,
    fontWeight: 700,
    lineHeight: 1.4,
    textAlign: "center",
  };

  const placeholderText: React.CSSProperties = {
    fontSize: isMobile ? 18 : 28,
    fontWeight: 800,
    letterSpacing: 0.5,
  };

  const iconsBox: React.CSSProperties = {
    display: "flex",
    gap: 12,
    color: "#ffffff",
    opacity: 0.9,
    ...(isMobile
      ? { position: "relative", justifyContent: "center", bottom: "auto", marginTop: 12 }
      : imageFirst
      ? { position: "absolute", bottom: 20, right: 30 }
      : { position: "absolute", bottom: 20, left: 30 }),
  };

  const left = imageFirst ? "image" : "text";
  const right = imageFirst ? "text" : "image";

  const Panel = ({ kind }: { kind: "image" | "text" }) => {
    if (kind === "image") {
      return (
        <div style={imagePanel}>
          {imageSrc ? (
            <TiltedCard
              imageSrc={imageSrc}
              altText={imageAlt}
              containerHeight={isMobile ? "180px" : "200px"}
              containerWidth={isMobile ? "100%" : "400px"}
              imageHeight={isMobile ? "180px" : "200px"}
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          ) : (
            <span style={placeholderText}>FOTO PROJETO</span>
          )}
        </div>
      );
    }
    return (
      <div style={textPanel}>
        <span>{description || "Texto explicativo"}</span>
      </div>
    );
  };

  const HoverIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const [hover, setHover] = useState(false);

    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          boxShadow: "none",
          color: "white",
          textDecoration: 'none',
          transform: hover ? "scale(1.5)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </a>
    );
  };

  return (
    <div style={rowStyle}>
      <Panel kind={left as any} />
      <Panel kind={right as any} />
      <div style={iconsBox}>
        {githubUrl && <HoverIcon href={githubUrl}><GitHubIcon /></HoverIcon>}
        {liveUrl && <HoverIcon href={liveUrl}><LinkIcon /></HoverIcon>}
      </div>
    </div>
  );
};

export default function Projects() {
  const pageStyle: React.CSSProperties = {
    minHeight: "130em",
    height: "135em",
    background: "linear-gradient(to right, #000000, #2F0743)",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    fontFamily: "helvetica neue",
    maxWidth: "100%",
    overflow: "hidden",
  };

  const titleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "32px",
    marginBottom: -50,
    marginTop:"20%",
    opacity: 0.9,
    textAlign: "center",
    fontFamily: "helvetica neue",
  };

  return (
    <main style={pageStyle}>
      <Fade delay={400}>
        <div style={titleStyle} id="projects">Projetos</div>
      </Fade>

      <Slide direction="right" delay={400}>
        <ProjectRow
          imageFirst
          imageSrc={siteCorinthians}
          description="Projeto de 'Cópia' do Site do Corinthians. Desenvolvido atráves de estudos e prática após termino de um curso do Youtube! O projeto consiste em recriar o site do zero porém com suas ideias de forma simples."
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/site-corinthians"
        />
      </Slide>

      <Slide direction="left" delay={400}>
        <ProjectRow
          imageFirst={false}
          imageSrc={aluraChat}
          description="Chat-Bot Imersão Alura 2025 - Desenvolvido em Python durante imersão gratuita da Alura."
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/Chat-bot-alura"
        />
      </Slide>

      <Slide direction="right" delay={400}>
        <ProjectRow
          imageFirst
          imageSrc={toDoList}
          description="TO-DO List - Projeto realizado durante estágio na Câmara Municipal, focando em design e lógica de programação."
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/TO-DO-LIST"
        />
      </Slide>

      <Slide direction="left" delay={400}>
        <ProjectRow
          imageFirst={false}
          imageSrc={Jafetech}
          description="Jafetech - Sistema de Licitação - Plataforma de Gestão de Licitações."
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/JAFETECH"
        />
      </Slide>
    </main>
  );
}
