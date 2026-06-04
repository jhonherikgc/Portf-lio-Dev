import { useState } from "react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";

import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiGooglegemini,
  SiVite,
  SiEjs,
  SiMongodb,
  SiFlask,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiPhp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiSass,
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
import aceleraDev from "../../../assets/images/acelera.png";

type TechIcon = {
  icon: ReactNode;
  name: string;
};

type Project = {
  id: string;
  title: string;
  imageSrc: string;
  descriptionKey: string;
  href: string;
  linkType: "code" | "live";
  stack: TechIcon[];
};

const featuredProjectCount = 3;

const projects: Project[] = [
  {
    id: "corinthians",
    title: "Corinthians Website",
    imageSrc: siteCorinthians,
    descriptionKey: "projects.project1.description",
    href: "https://github.com/jhonherikgc/site-corinthians",
    linkType: "code",
    stack: [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    id: "alura-chat",
    title: "Alura Chat Bot",
    imageSrc: aluraChat,
    descriptionKey: "projects.project2.description",
    href: "https://github.com/jhonherikgc/Chat-bot-alura",
    linkType: "code",
    stack: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiGooglegemini />, name: "Gemini" },
    ],
  },
  {
    id: "todo-list",
    title: "TO-DO List",
    imageSrc: toDoList,
    descriptionKey: "projects.project3.description",
    href: "https://github.com/jhonherikgc/TO-DO-LIST",
    linkType: "code",
    stack: [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiSass />, name: "Sass" },
    ],
  },
  {
    id: "jafetech",
    title: "Jafetech",
    imageSrc: Jafetech,
    descriptionKey: "projects.project4.description",
    href: "https://github.com/jhonherikgc/JAFETECH",
    linkType: "code",
    stack: [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiPhp />, name: "PHP" },
    ],
  },
  {
    id: "login-page",
    title: "Login Page",
    imageSrc: loginPage,
    descriptionKey: "projects.project5.description",
    href: "https://github.com/jhonherikgc/Login-Page",
    linkType: "code",
    stack: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },
  {
    id: "johnny-barbershop",
    title: "Johnny Barbershop",
    imageSrc: JohnnyBarbershop,
    descriptionKey: "projects.project6.description",
    href: "https://github.com/jhonherikgc/Johnny-Barber-Shop",
    linkType: "code",
    stack: [
      { icon: <SiEjs />, name: "EJS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <DiNodejsSmall />, name: "Node.js" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    id: "erp",
    title: "ERP",
    imageSrc: ERP,
    descriptionKey: "projects.project7.description",
    href: "https://github.com/Vexwe/ERP",
    linkType: "code",
    stack: [
      { icon: <SiReact />, name: "React" },
      { icon: <DiNodejsSmall />, name: "Node.js" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },
  {
    id: "honeepay",
    title: "HoneePay",
    imageSrc: honeepay,
    descriptionKey: "projects.project8.description",
    href: "https://honnepay.com/",
    linkType: "live",
    stack: [
      { icon: <SiEjs />, name: "EJS" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },
  {
    id: "acelera-dev",
    title: "Acelera Dev",
    imageSrc: aceleraDev,
    descriptionKey: "projects.project9.description",
    href: "https://acelera-dev.vercel.app/",
    linkType: "live",
    stack: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiCss3 />, name: "CSS" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },
];

const Section = styled.section`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to right, #000000 0%, #170222 48%, #2f0743 100%);
  color: #fff;
  margin-top: -1px;
  padding: clamp(3.5rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)
    clamp(5rem, 9vw, 8rem);
`;

const Header = styled.header`
  max-width: 1120px;
  margin: 0 auto clamp(2.5rem, 5vw, 4rem);
`;

const Eyebrow = styled.p`
  color: #b026ff;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  line-height: 1;
  margin: 0;
`;

const Lead = styled.p`
  max-width: 680px;
  color: rgba(255, 255, 255, 0.68);
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.75;
  margin: 1rem 0 0;
`;

const ProjectList = styled.div`
  display: grid;
  gap: clamp(1.25rem, 3vw, 2rem);
  max-width: 1120px;
  margin: 0 auto;
`;

const ProjectCard = styled.article<{ $isReversed: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  grid-template-areas: ${(props) =>
    props.$isReversed ? '"content media"' : '"media content"'};
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(8, 10, 18, 0.78);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.32);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(120deg, rgba(176, 38, 255, 0.16), transparent 34%);
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "media"
      "content";
  }
`;

const ProjectMedia = styled.a`
  grid-area: media;
  position: relative;
  min-height: 340px;
  overflow: hidden;
  background: #080808;
  color: inherit;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 45%, rgba(0, 0, 0, 0.45));
  }

  &:focus-visible {
    outline: 2px solid #b026ff;
    outline-offset: -4px;
  }

  @media (max-width: 640px) {
    min-height: 240px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  display: block;
  transform: scale(1.01);
  transition: transform 0.35s ease, filter 0.35s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.045);
    filter: saturate(1.08) contrast(1.04);
  }
`;

const ProjectContent = styled.div`
  grid-area: content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.35rem;
  padding: clamp(1.5rem, 4vw, 3rem);
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
`;

const Index = styled.span`
  color: #b026ff;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  font-weight: 700;
`;

const Badge = styled.span`
  border: 1px solid rgba(176, 38, 255, 0.4);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.74);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.35rem 0.65rem;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.65rem, 3vw, 2.4rem);
  line-height: 1.1;
  margin: 0;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 1rem;
  line-height: 1.75;
  margin: 0;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const TechItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 2.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.045);
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.88rem;
  padding: 0.45rem 0.7rem;

  svg {
    color: #b026ff;
    font-size: 1.05rem;
    flex-shrink: 0;
  }
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-items: center;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 2.75rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 6px;
  background: #f7f7f7;
  color: #09090b;
  font-size: 0.95rem;
  font-weight: 800;
  padding: 0.7rem 1rem;
  text-decoration: none;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;

  &:hover {
    background: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #b026ff;
    outline-offset: 3px;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1120px;
  margin: clamp(2rem, 5vw, 3.5rem) auto 0;
`;

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 2.75rem;
  border: 1px solid rgba(168, 85, 247, 0.55);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  cursor: pointer;
  font-size: 0.98rem;
  font-weight: 800;
  padding: 0.75rem 1.15rem;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;

  &:hover {
    background: rgba(168, 85, 247, 0.12);
    border-color: rgba(176, 38, 255, 0.72);
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid #b026ff;
    outline-offset: 3px;
  }
`;

export default function Projects() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, featuredProjectCount);

  return (
    <Section id="projects" aria-labelledby="projects-title">
      <Header>
        <Eyebrow>{t("projects.eyebrow")}</Eyebrow>
        <Title id="projects-title">{t("projects.title")}</Title>
        <Lead>{t("projects.intro")}</Lead>
      </Header>

      <ProjectList>
        {visibleProjects.map((project, index) => {
          const actionLabel =
            project.linkType === "code"
              ? t("projects.sourceCode")
              : t("projects.viewProject");
          const ActionIcon = project.linkType === "code" ? Github : ExternalLink;

          return (
            <ProjectCard
              key={project.id}
              $isReversed={index % 2 === 1}
              aria-labelledby={`${project.id}-title`}
            >
              <ProjectMedia
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${actionLabel}: ${project.title}`}
              >
                <ProjectImage src={project.imageSrc} alt={project.title} />
              </ProjectMedia>

              <ProjectContent>
                <ProjectMeta>
                  <Index>{String(index + 1).padStart(2, "0")}</Index>
                  {index < featuredProjectCount && (
                    <Badge>{t("projects.featured")}</Badge>
                  )}
                </ProjectMeta>

                <ProjectTitle id={`${project.id}-title`}>
                  {project.title}
                </ProjectTitle>

                <Description>{t(project.descriptionKey)}</Description>

                <TechList aria-label={`${project.title} stack`}>
                  {project.stack.map((tech) => (
                    <TechItem key={tech.name} title={tech.name}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </TechItem>
                  ))}
                </TechList>

                <ActionRow>
                  <ActionLink
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${actionLabel}: ${project.title}`}
                  >
                    <ActionIcon size={18} aria-hidden="true" />
                    {actionLabel}
                  </ActionLink>
                </ActionRow>
              </ProjectContent>
            </ProjectCard>
          );
        })}
      </ProjectList>

      <ToggleWrapper>
        <ToggleButton
          type="button"
          aria-expanded={showAll}
          onClick={() => setShowAll((current) => !current)}
        >
          {showAll ? t("projects.showLess") : t("projects.showMore")}
          {showAll ? (
            <ChevronUp size={18} aria-hidden="true" />
          ) : (
            <ChevronDown size={18} aria-hidden="true" />
          )}
        </ToggleButton>
      </ToggleWrapper>
    </Section>
  );
}
