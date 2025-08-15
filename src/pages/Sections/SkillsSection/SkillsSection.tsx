// src/components/SkillsSection.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import htmlIcon from '../../../assets/images/HTML.svg';
import cssIcon from '../../../assets/images/CSS.svg';
import bootsIcon from '../../../assets/images/Bootstrap.svg'
import jsIcon from '../../../assets/images/JavaScript.svg';
import tsIcon from '../../../assets/images/TypeScript.svg';
import reactIcon from '../../../assets/images/React-dark.svg'
import viteIcon from '../../../assets/images/Vite-Dark.svg'
import pythonIcon from '../../../assets/images/Python-Dark.svg'
import dockerIcon from '../../../assets/images/Docker.svg'
import LinuxIcon from '../../../assets/images/Linux-Dark.svg'
import gitIcon from '../../../assets/images/Git.svg'
import githubIcon from '../../../assets/images/Github-Dark.svg'
import flaskIcon from '../../../assets/images/Flask-Dark.svg'


// 1. typeoff skills
interface Skill {
  id: string;
  image: string;
  hoverText: string;
  clickText: string;
}

// Obj - Skills images

const skillsData: Skill[] = [
  {
    id: 'Html',
    image: htmlIcon,
    hoverText: 'Texto curto sobre a habilidade 1.',
    clickText: 'Descrição detalhada da habilidade 1 e como a utilizo.',
  },
  {
    id: 'Css',
    image: cssIcon,
    hoverText: 'Texto curto sobre a habilidade 2.',
    clickText: 'Descrição detalhada da habilidade 2 e como a utilizo.',
  },
    {
    id: 'Bootstrap',
    image: bootsIcon,
    hoverText: 'Texto curto sobre a habilidade 2.',
    clickText: 'Descrição detalhada da habilidade 2 e como a utilizo.',
  },
  
  {
    id: 'JavaScript',
    image: jsIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
    {
    id: 'TypeScript',
    image: tsIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
    {
    id: 'ReactJs',
    image: reactIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
      {
    id: 'vite',
    image: viteIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
  {
    id: 'python',
    image: pythonIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
      {
    id: 'Flask',
    image: flaskIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
      {
    id: 'docker',
    image: dockerIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
  {
    id: 'Git',
    image: gitIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
  {
    id: 'Github',
    image: githubIcon,
    hoverText: 'Texto curto sobre a habilidade 3.',
    clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
  {
  id: 'linux',
  image: LinuxIcon,
  hoverText: 'Texto curto sobre a habilidade 3.',
  clickText: 'Descrição detalhada da habilidade 3 e como a utilizo.',
  },
];

// Styled Components Containers 

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 50px;
  background-color: #2c2b26;
`;

const VerticalCarouselContainer = styled.div`
  margin-top: 550px;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  margin-top: 550px;
  width: 400px;
  height: 400px;
  padding: 20px;
  background-color: #505050;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
  color: white;
`;

const SkillsSection: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("Passe o mouse ou clique em uma das habilidades para saber mais!");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleMouseEnter = (text: string) => {
    // Se algo já foi clicado, não muda no hover
    if (!isClicked) {
      setDisplayText(text);
    }
  };

  const handleMouseLeave = () => {
    // return default text if was clicked
    if (!isClicked) {
      setDisplayText("Passe o mouse ou clique em uma das habilidades para saber mais!");
    }
  };

  const handleClick = (text: string) => {
    setDisplayText(text);
    setIsClicked(true); // if was clicked he'll show
  };

  return (
    <SkillsContainer>
      <h1 style={{color:"white", marginTop:"300px"}}>Skills & Habillities</h1>
      <VerticalCarouselContainer>
        {skillsData.map(skill => (
          <ImageWrapper 
            key={skill.id}
            onMouseEnter={() => handleMouseEnter(skill.hoverText)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(skill.clickText)}
          >
            <img src={skill.image} alt={skill.id} />
          </ImageWrapper>
        ))}
      </VerticalCarouselContainer>

      <TextContainer>
        <p>{displayText}</p>
      </TextContainer>
    </SkillsContainer>
  );
};

export default SkillsSection;