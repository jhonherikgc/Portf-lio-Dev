import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import siteCorinthians from '../../../assets/images/Proj_Corinthians_photo.png'
import aluraChat from '../../../assets/images/alura-chat_project.png'
import toDoList from '../../../assets/images/ToDo_list_project.png'

/** Tipagem das props de cada “linha” (card cinza) */
type ProjectRowProps = {
  imageSrc?: string;
  imageAlt?: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  imageFirst?: boolean; // true = foto à esquerda (1º card). false = foto à direita (2º card)
};

/** Uma fila de projeto (o card cinza com 2 blocos pretos dentro) */
const ProjectRow: React.FC<ProjectRowProps> = ({
  imageSrc,
  imageAlt = "Foto do projeto",
  description,
  githubUrl,
  liveUrl,
  imageFirst = true,
}) => {
  const fonts = "helvetica neue";

  // Estado para detectar largura da tela
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rowStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // queries celular
    gap: isMobile ? 12 : 24,
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    background: "#212529",
    borderRadius: 18,
    padding: 20,
    boxShadow: "0 0 0 4px #2a2a2a inset",
    width: isMobile ? "100%" : "70rem", // ocupa tela no celular
    height: isMobile ? "auto" : "300px",
    margin: "0 auto",
    marginTop: "60px",
  };

  const panelBase: React.CSSProperties = {
    flex: 1,
    minWidth: isMobile ? "100%" : 280,
    background: "#121212",
    borderRadius: 24,
    color: "#ffffff",
    padding: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts,
  };

  const imagePanel: React.CSSProperties = {
    ...panelBase,
    overflow: "hidden",
  };

  const textPanel: React.CSSProperties = {
    ...panelBase,
    fontSize: isMobile ? 20 : 28,
    fontWeight: 800,
    lineHeight: 1.2,
    textAlign: "center",
  };

  const placeholderText: React.CSSProperties = {
    fontSize: isMobile ? 22 : 32,
    fontWeight: 800,
    letterSpacing: 0.5,
  };

  const iconsBox: React.CSSProperties = {
    position: "absolute",
    bottom: 12,
    ...(imageFirst ? { right: 20 } : { left: 20 }),
    display: "flex",
    gap: 16,
    color: "#ffffff",
    opacity: 0.95,
  };

  // ordem dos painéis
  const left = imageFirst ? "image" : "text";
  const right = imageFirst ? "text" : "image";

  const Panel = ({ kind }: { kind: "image" | "text" }) => {
    const [hover, setHover] = useState(false);

    if (kind === "image") {
      return (
        <div style={imagePanel}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{
                width: isMobile ? "100%" : "830px",
                height: isMobile ? "180px" : "200px",
                objectFit: "cover",
                borderRadius: 18,
                transition: "transform 0.3s ease",
                transform: hover ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
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
          textDecoration:'none',
          background: hover ? "#333333" : "transparent",
          transform: hover ? "scale(1.2)" : "scale(1)",
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
        {githubUrl && (
          <HoverIcon href={githubUrl}>
            <GitHubIcon/>
          </HoverIcon>
        )}
        {liveUrl && (
          <HoverIcon href={liveUrl}>
            <LinkIcon />
          </HoverIcon>
        )}
      </div>
    </div>
  );
};

/** Componente com DOIS cards */
export default function Projects() {
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #000000, #2F0743)",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    fontFamily: "helvetica neue",
  };

  const titleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "32px",
    marginBottom: 4,
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
        imageSrc= {siteCorinthians}
        description="Projeto de 'Cópia' do Site do Corinthians. Desenvolvido atráves de estudos e prática após termino de um curso do Youtube! O projeto consiste em recriar
        o site do zero porém com suas ideias de forma simples."
        githubUrl="https://github.com/jhonherikgc"
        liveUrl="https://github.com/jhonherikgc/site-corinthians"
      />
      </Slide>
      <Slide direction="left" delay={400}>
      <ProjectRow
        imageFirst={false}
        imageSrc= {aluraChat}
        description="Chat-Bot Imersão Alura 2025 - Esse projeto eu desenvolvi em tecnologias de python em uma imersão competitiva de um curso gratuito promovido pela insituição de cursos
        Alura."
        githubUrl="https://github.com/jhonherikgc"
        liveUrl="https://github.com/jhonherikgc/Chat-bot-alura"
      />
    </Slide>

    <Slide direction="right" delay={400}>
      <ProjectRow
        imageFirst
        imageSrc= {toDoList}
        description="TO-DO List - Projeto realizado em tempo de estágio pela Câmara Municipal. Tem como objetivo também a prática e 
        exploração pelos design / estudos à lógica de programação em Linguagens de Script"
        githubUrl="https://github.com/jhonherikgc"
        liveUrl="https://github.com/jhonherikgc/TO-DO-LIST"
      />
    </Slide>
    </main>
    
  );
}
