import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import htmlIcon from "../../../assets/images/HTML.svg";
import cssIcon from "../../../assets/images/CSS.svg";
import bootsIcon from "../../../assets/images/Bootstrap.svg";
import jsIcon from "../../../assets/images/JavaScript.svg";
import tsIcon from "../../../assets/images/TypeScript.svg";
import reactIcon from "../../../assets/images/React-dark.svg";
import viteIcon from "../../../assets/images/Vite-Dark.svg";
import pythonIcon from "../../../assets/images/Python-Dark.svg";
import dockerIcon from "../../../assets/images/Docker.svg";
import LinuxIcon from "../../../assets/images/Linux-Dark.svg";
import gitIcon from "../../../assets/images/Git.svg";
import githubIcon from "../../../assets/images/Github-Dark.svg";
import flaskIcon from "../../../assets/images/Flask-Dark.svg";
import tailwindIcon from "../../../assets/images/Tailwind.svg";
import nodejsIcon from "../../../assets/images/NodeJS-Dark.svg";

type SkillKey =
  | "html"
  | "css"
  | "bootstrap"
  | "tailwind"
  | "javascript"
  | "nodejs"
  | "typescript"
  | "react"
  | "vite"
  | "python"
  | "flask"
  | "docker"
  | "git"
  | "github"
  | "linux";

type Skill = {
  id: string;
  image: string;
  key: SkillKey;
};

const skills: Skill[] = [
  { id: "HTML", image: htmlIcon, key: "html" },
  { id: "CSS", image: cssIcon, key: "css" },
  { id: "Bootstrap", image: bootsIcon, key: "bootstrap" },
  { id: "Tailwind", image: tailwindIcon, key: "tailwind" },
  { id: "JavaScript", image: jsIcon, key: "javascript" },
  { id: "Node.js", image: nodejsIcon, key: "nodejs" },
  { id: "TypeScript", image: tsIcon, key: "typescript" },
  { id: "React", image: reactIcon, key: "react" },
  { id: "Vite", image: viteIcon, key: "vite" },
  { id: "Python", image: pythonIcon, key: "python" },
  { id: "Flask", image: flaskIcon, key: "flask" },
  { id: "Docker", image: dockerIcon, key: "docker" },
  { id: "Git", image: gitIcon, key: "git" },
  { id: "GitHub", image: githubIcon, key: "github" },
  { id: "Linux", image: LinuxIcon, key: "linux" },
];

const Section = styled.section`
  width: 100%;
  background: linear-gradient(to right, #000000 0%, #170222 48%, #2f0743 100%);
  color: #fff;
  padding: clamp(5rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem);
`;

const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Header = styled.header`
  max-width: 760px;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
`;

const Title = styled.h2`
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1;
  margin: 0;
`;

const AccentLine = styled.span`
  display: block;
  width: 72px;
  height: 3px;
  border-radius: 99px;
  margin-top: 1rem;
  background: linear-gradient(90deg, #b026ff, rgba(176, 38, 255, 0));
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 680px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const SkillButton = styled.button<{ $active: boolean }>`
  min-height: 106px;
  border: 1px solid
    ${(props) =>
      props.$active ? "rgba(176, 38, 255, 0.75)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;
  background: ${(props) =>
    props.$active ? "rgba(176, 38, 255, 0.14)" : "rgba(255, 255, 255, 0.045)"};
  color: rgba(255, 255, 255, 0.78);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.85rem 0.55rem;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-3px);
    border-color: rgba(176, 38, 255, 0.72);
    background: rgba(176, 38, 255, 0.12);
    color: #fff;
    outline: none;
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
  }

  span {
    font-size: 0.82rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
  }

  @media (max-width: 680px) {
    min-height: 96px;
  }
`;

const DetailPanel = styled.aside`
  position: sticky;
  top: 7rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(8, 10, 18, 0.66);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.26);
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    height: 3px;
    background: linear-gradient(90deg, #b026ff, rgba(176, 38, 255, 0));
  }

  @media (max-width: 900px) {
    position: static;
  }
`;

const DetailContent = styled.div`
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  padding: clamp(1.5rem, 4vw, 2.25rem);
`;

const SelectedSkill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 800;

  img {
    width: 34px;
    height: 34px;
    object-fit: contain;
  }
`;

const Experience = styled.p`
  color: #b026ff;
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0;
`;

const TextBox = styled.p`
  color: rgba(255, 255, 255, 0.74);
  font-size: 1.02rem;
  line-height: 1.8;
  margin: 0;
`;

const SkillsSection = () => {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const detailText = selectedSkill
    ? t(`skills.items.${selectedSkill.key}.hover`)
    : t("skills.defaultText");
  const selectedExperience = selectedSkill
    ? t(`skills.items.${selectedSkill.key}.experience`)
    : "";

  return (
    <Section id="skills">
      <Wrapper>
        <Header>
          <Title>{t("skills.title")}</Title>
          <AccentLine aria-hidden="true" />
        </Header>

        <Layout>
          <SkillGrid>
            {skills.map((skill) => {
              const isActive = selectedSkill?.key === skill.key;

              return (
                <SkillButton
                  key={skill.id}
                  type="button"
                  $active={isActive}
                  aria-pressed={isActive}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  onFocus={() => setSelectedSkill(skill)}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <img src={skill.image} alt="" aria-hidden="true" />
                  <span>{skill.id}</span>
                </SkillButton>
              );
            })}
          </SkillGrid>

          <DetailPanel>
            <DetailContent>
              {selectedSkill && (
                <SelectedSkill>
                  <img src={selectedSkill.image} alt="" aria-hidden="true" />
                  {selectedSkill.id}
                </SelectedSkill>
              )}
              {selectedExperience && (
                <Experience>
                  {t("skills.experience")}: {selectedExperience}
                </Experience>
              )}
              <TextBox>{detailText}</TextBox>
            </DetailContent>
          </DetailPanel>
        </Layout>
      </Wrapper>
    </Section>
  );
};

export default SkillsSection;
