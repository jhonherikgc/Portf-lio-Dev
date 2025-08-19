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
  { id : 'Html', image: htmlIcon, hoverText: 'HTML: Estrutura base de todas as páginas web.', clickText: 'O HTML foi a minha porta de entrada para o desenvolvimento front-end. Através dele, não só aprendi a estruturar páginas web, mas também a compreender conceitos essenciais como tags, protocolos de rede e a importância de uma base sólida para qualquer projeto.' },
  { id: 'Css', image: cssIcon, hoverText: 'CSS: Estilização de componentes web.', clickText: 'Com CSS, aprendi a transformar o visual de um projeto. Sem ele seu site simplesmente não ganha vida nem tampouco cor, estilo, interações básicas de imagens e outras coisas visuais. Aprendi técnicas avançadas como FlexBox e responsavidade com o MediaQueries, essa linguagem me permite criar designs que são não apenas bonitos, mas também funcionais e adaptáveis a qualquer tela!' },
  { id: 'Bootstrap', image: bootsIcon, hoverText: 'Bootstrap: Framework de CSS para desenvolvimento rápido.', clickText: 'Bootstrap foi a solução que encontrei para acelerar o desenvolvimento de projetos, garantindo designs responsivos de forma rápida e eficiente. Esse framework me permitiu focar na funcionalidade, sabendo que a parte visual já estaria bem estruturada, aprender a usar esse framework foi um grande passo durante meu aprendizado tornando assim mais fácil de saber a disponibilidade e usuabilidade de meu código.' },
  { id: 'JavaScript', image: jsIcon, hoverText: 'JavaScript: Adiciona interatividade e dinamismo.', clickText: 'Comecei aprender o tão famoso JS pelo youtube, principios básicos e logo após me interessar tanto comprei um curso onde lá aprendi muita das coisas que aplico hoje. O JavaScript me abriu um mundo de possibilidades, permitindo que eu adicionasse lógica e interatividade às minhas aplicações. Com essa linguagem, explorei a manipulação do DOM, a criação de funcionalidades dinâmicas e a resolução de desafios de programação, tornando-se uma base essencial para a minha evolução.' },
  { id: 'TypeScript', image: tsIcon, hoverText: 'TypeScript: Superconjunto de JS com tipagem estática.', clickText: 'O TypeScript é o JavaScript mais forte! Ele se tornou uma ferramenta indispensável para garantir a segurança e a escalabilidade dos meus projetos. Ao adicionar a tipagem estática, ele me ajuda a prever e corrigir erros, resultando em um código mais robusto, organizado e fácil de manter.' },
  { id: 'ReactJs', image: reactIcon, hoverText: 'ReactJS: Biblioteca para construir interfaces de usuário.', clickText: 'ReactJS é uma biblioteca JavaScript. Com ReactJS, aprendi a construir interfaces de usuário modernas e eficientes. A abordagem baseada em componentes me permite desenvolver aplicações de página única (SPAs) de forma modular, reutilizável e com alto desempenho, facilitando a criação de experiências interativas e complexas.' },
  { id: 'vite', image: viteIcon, hoverText: 'Vite: Ferramenta de build frontend.', clickText: 'Vite é a minha ferramenta de build de escolha para projetos front-end. Sua velocidade e otimização do ambiente de desenvolvimento me permitem ter um feedback instantâneo sobre as mudanças no código, tornando o processo de criação mais ágil e produtivo.' },
  { id: 'python', image: pythonIcon, hoverText: 'Python: Linguagem de programação versátil e poderosa.', clickText: 'Python é uma linguagem extremamente versátil que utilizo para diversas tarefas, desde a automação de scripts até o desenvolvimento de aplicações web. Sua sintaxe clara e a vasta quantidade de bibliotecas me permitem resolver problemas de forma eficiente em diferentes contextos. Python é uma linguagem bastante presente nos estudos / trabalhos de CyberSegurança que também é uma área que tenho interesse!' },
  { id: 'Flask', image: flaskIcon, hoverText: 'Flask: Microframework web em Python.', clickText: 'Flask é o microframework de Python que utilizo para criar aplicações web de forma rápida e descomplicada. Sua simplicidade me permite focar na lógica do negócio, sendo ideal para construir APIs e protótipos com um código limpo e minimalista.' },
  { id: 'docker', image: dockerIcon, hoverText: 'Docker: Plataforma para empacotar aplicações.', clickText: 'Docker é uma ferramenta essencial para garantir a consistência dos meus projetos em diferentes ambientes. Com a sua tecnologia de contêineres, posso empacotar minhas aplicações com todas as suas dependências, facilitando a implantação e a colaboração, eliminando problemas de compatibilidade. Comecei a aprender Docker porque vi que talvez mais para frente iria me ser útil, com o Docker me fez entender e resolver problemas como "Na minha máquina não funciona!"' },
  { id: 'Git', image: gitIcon, hoverText: 'Git: Sistema de controle de versão distribuído.', clickText: 'O Git é a minha principal ferramenta de controle de versão. Ele me permite rastrear mudanças no código, colaborar de forma eficiente em equipe e gerenciar o histórico de desenvolvimento dos meus projetos, garantindo que eu possa voltar a qualquer estado anterior do código. O Git é uma ferramenta que facilita muito o trabalho em equipe e o controle de projetos, é inegável que é uma das ferramentas obrigatórias para um programador que preze sua carreira. ' },
  { id: 'Github', image: githubIcon, hoverText: 'Github: Plataforma de hospedagem de código.', clickText: 'Utilizo o GitHub como a minha plataforma central para hospedagem e colaboração de código. Ele não só facilita o compartilhamento dos meus projetos, mas também me permite contribuir para a comunidade open-source e organizar meu portfólio de forma profissional.' },
  { id: 'linux', image: LinuxIcon, hoverText: 'Linux: Sistema operacional de código aberto.', clickText: 'Utilizei o Linux por pouco tempo porém me apaixonei, A sua flexibilidade, linha de comando robusta e a vasta comunidade de desenvolvedores me proporcionam um ambiente de trabalho poderoso, adaptável, rápido e leve ideal para programar e gerenciar servidores, Aprendi principios básicos de terminal e algumas distribuições Linux.' },
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
  font-size: 30px;
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