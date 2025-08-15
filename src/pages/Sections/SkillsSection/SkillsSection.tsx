// src/components/SkillsSection.tsx
import { Fade, Slide } from "react-awesome-reveal";
import React, { useState, useRef, useEffect } from 'react';
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

interface Skill {
  id: string;
  image: string;
  hoverText: string;
  clickText: string;
}

const skillsData: Skill[] = [
  { id: 'Html', image: htmlIcon, hoverText: 'HTML: Estrutura base de todas as páginas web.', clickText: 'HTML é a linguagem de marcação padrão para a criação de páginas web e suas aplicações.' },
  { id: 'Css', image: cssIcon, hoverText: 'CSS: Estilização de componentes web.', clickText: 'CSS é uma linguagem de folhas de estilo utilizada para descrever a apresentação de um documento escrito em HTML.' },
  { id: 'Bootstrap', image: bootsIcon, hoverText: 'Bootstrap: Framework de CSS para desenvolvimento rápido.', clickText: 'Bootstrap é um framework de código aberto para desenvolver projetos responsivos, web e mobile-first no front-end.' },
  { id: 'JavaScript', image: jsIcon, hoverText: 'JavaScript: Adiciona interatividade e dinamismo.', clickText: 'JavaScript é uma linguagem de programação usada para criar interações dinâmicas em sites e aplicações web.' },
  { id: 'TypeScript', image: tsIcon, hoverText: 'TypeScript: Superconjunto de JS com tipagem estática.', clickText: 'TypeScript é uma linguagem de programação que adiciona tipagem estática opcional ao JavaScript para maior segurança no código.' },
  { id: 'ReactJs', image: reactIcon, hoverText: 'ReactJS: Biblioteca para construir interfaces de usuário.', clickText: 'ReactJS é uma biblioteca JavaScript para a criação de interfaces de usuário em aplicações de página única (SPAs).' },
  { id: 'vite', image: viteIcon, hoverText: 'Vite: Ferramenta de build frontend.', clickText: 'Vite é uma ferramenta de build que visa fornecer uma experiência de desenvolvimento frontend mais rápida e enxuta.' },
  { id: 'python', image: pythonIcon, hoverText: 'Python: Linguagem de programação versátil e poderosa.', clickText: 'Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional e forte tipagem dinâmica e estática.' },
  { id: 'Flask', image: flaskIcon, hoverText: 'Flask: Microframework web em Python.', clickText: 'Flask é um microframework para Python, usado para criar aplicações web de forma rápida e com mínimo de código.' },
  { id: 'docker', image: dockerIcon, hoverText: 'Docker: Plataforma para empacotar aplicações.', clickText: 'Docker é uma plataforma de contêineres que permite empacotar uma aplicação com todas as suas dependências em um ambiente isolado.' },
  { id: 'Git', image: gitIcon, hoverText: 'Git: Sistema de controle de versão distribuído.', clickText: 'Git é um sistema de controle de versão de código aberto, usado para gerenciar e rastrear mudanças em projetos.' },
  { id: 'Github', image: githubIcon, hoverText: 'Github: Plataforma de hospedagem de código.', clickText: 'Github é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.' },
  { id: 'linux', image: LinuxIcon, hoverText: 'Linux: Sistema operacional de código aberto.', clickText: 'Linux é uma família de sistemas operacionais de código aberto baseados no núcleo Linux.' },
];

const loopSkillsData = [...skillsData, ...skillsData];

const StyledH1 = styled.h1`
  color: white;
  margin-top: 300px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 20px;
  }
`;

const SkillsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #2c2b26;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const VerticalCarouselContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100px;
  margin-left: -50px;
  overflow-y: scroll;
  overflow-x: hidden;
  
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
  width: 860px;
  height: 400px;
  padding: 20px;
  background-color: #212529;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
  color: white;
  
  @media (max-width: 768px) {
  margin-top:30px;
    width: 350px;
    height: 100%;
  }
`;

const SkillsSection: React.FC = () => {
    const [displayText, setDisplayText] = useState<string>("Passe o mouse ou clique em uma das habilidades para saber mais!");
    const [isClicked, setIsClicked] = useState<boolean>(false);
    
    const carouselRef = useRef<HTMLDivElement>(null);

    // Efeito para criar a rolagem automática
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Timer para rolagem automática definido
        let scrollInterval: ReturnType<typeof setInterval>;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                const listHeight = skillsData.length * 120;
                
                // Se a rolagem chegar ao fim da primeira lista, volta pro topo
                if (carousel.scrollTop >= listHeight) {
                    carousel.scrollTop = 0;
                } else {
                    carousel.scrollTop += 1;
                }
            }, 30);
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };
        
        // Inicia a rolagem automática
        startAutoScroll();
        
        // Pausa a rolagem no hover
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);

        // Limpeza: remove os listeners e o timer quando o componente é desmontado
        return () => {
            stopAutoScroll();
            carousel.removeEventListener('mouseenter', stopAutoScroll);
            carousel.removeEventListener('mouseleave', startAutoScroll);
        };
    }, []);

    const handleMouseEnter = (text: string) => {
        if (!isClicked) {
          setDisplayText(text);
        }
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
          setDisplayText("Passe o mouse ou clique em uma das habilidades para saber mais!");
        }
    };

    const handleClick = (text: string) => {
        setDisplayText(text);
        setIsClicked(true);
    };

    return (
        <SkillsSectionWrapper>
          <Fade>
            <Slide direction="up">
          <StyledH1 id="skills">
            Linguagens & Ferramentas
          </StyledH1>
          </Slide>
          <SkillsContainer>
            <VerticalCarouselContainer ref={carouselRef}>
              {loopSkillsData.map((skill, index) => (
                <ImageWrapper 
                key={`${skill.id}-${index}`}
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
          </Fade>
        </SkillsSectionWrapper>
    );
};

export default SkillsSection;