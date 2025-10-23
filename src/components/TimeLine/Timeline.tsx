// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import React from "react";
import { styled, Typography } from "@mui/material";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { Fade, Slide } from "react-awesome-reveal";


const StyledBody = styled("div")(({ theme }) => ({
  background: theme.palette.gradient.dark,
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
    height:"250vh",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
    height: "300vh",
  },
}));

const Timeline: React.FC = () => {
  return (
    <StyledBody>
        <Fade delay={400}>
        <Typography 
        variant="h3"
        textAlign="center"
        gutterBottom
        color="primary.contrastText"
        marginBottom="60px"
        > Experiência 
        </Typography>
        </Fade>
    <div className="bg-black min-h-screen text-white p-10">
        <Fade delay={400}>
      <VerticalTimeline lineColor="#fff">
        
        {/* chegada e adaptaçoes */}
        <VerticalTimelineElement
        
          className="vertical-timeline-element--education"
          contentStyle={{
              background: "#0f172a",
              color: "#fff",
              borderRadius: "1rem",
            }}
          contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          date="2023"
          iconStyle={{
              background: "linear-gradient(to bottom, #2F0743, #41295a)",
              color: "#fff",
            }}
          icon={<FlightLandIcon />}
        >
        
        <Slide direction="left">
          <h3 className="text-lg font-bold">Chegada à Portugal</h3>
          <h4 className="text-sm text-green-400">
            Adaptações, fuso horário, dificuldades
          </h4>
          <p>"O início de tudo pode parecer obscuro, mas é justamente no caos inicial que nasce a ordem." – Friedrich Nietzsche</p>
          </Slide>
        </VerticalTimelineElement>

        {/* 1 ano no colegio */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#0f172a",
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          date="2023-2024"
          iconStyle={{
            background: "linear-gradient(to bottom, #2F0743, #41295a)",
            color: "#fff",
          }}
          icon={<FaLaptopCode />}
        >
            <Slide direction="right">
          <h3 className="text-lg font-bold">1 Ano na Escola</h3>
          <h4 className="text-sm text-green-400">Matriculado no Agrup. de Escolas Afonso de Albuquerque (LICEU)</h4>
          <p>
            Optei pelo curso de Tecnico de Informática e Gestão (TIG) 
            Onde finalmente tive minha primeira
            Introdução a Programação com a linguagem C++
          </p>
          </Slide>
        </VerticalTimelineElement>

        {/* 2 ano no colegio */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#0f172a",
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          date="2024-2025"
          iconStyle={{
            background: "linear-gradient(to bottom, #2F0743, #41295a)",
            color: "#fff",
          }}
          icon={<FaLaptopCode />}
        >
          <Slide direction="right">
          <h3 className="text-lg font-bold">2 Ano na Escola</h3>
          <h4>Inicio à estudos de forma autônoma</h4>
          <p>
            Investi em cursos de programação me aprofundando mais sobre conteudos da área de programação.{" "}
            Comecei meus primeiros projetos.
          </p>
          </Slide>
        </VerticalTimelineElement>

          <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#0f172a",
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          date="2025"
          iconStyle={{
            background: "linear-gradient(to bottom, #2F0743, #41295a)",
            color: "#fff",
          }}
          icon={<FaLaptopCode />}
        >
            <Slide direction="right">
          <h3 className="text-lg font-bold">Ferias de Verão</h3>
          <h4>Aproveitei o máximo das férias de verão para poder estudar mais.</h4>
          <p>
            Introdução a LLM'S (Inteligencia Artificial),
            Docker, 
            React, 
            TypeScript, 
            Python, 
            API's
          </p>
          </Slide>
        </VerticalTimelineElement>
          {/* Formação FINALMENTE */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#0f172a",
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          date="2025/2026"
          iconStyle={{
            background: "linear-gradient(to bottom, #2F0743, #41295a)",
            color: "#fff",
          }}
          icon={<FaGraduationCap />}
        >
          <Slide direction="left">
          <h3 className="text-lg font-bold">Formação do Curso</h3>
          <h4>
            Agrup. de Escolas Afonso de Albuquerque (LICEU)
          </h4>
          <p>Ensino médio completo, hoje sigo focado na área tech buscando sempre aprender com meus próprios erros como desenvolvedor.</p>
        </Slide>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </Fade>
    </div>
    </StyledBody>
  );
};

export default Timeline;
