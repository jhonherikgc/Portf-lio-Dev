// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import React from "react";
import { styled, Typography } from "@mui/material";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";


const StyledBody = styled("div")(({ theme }) => ({
  background: theme.palette.gradient.dark,
  height: "140vh",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
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
        
        {/* High School */}
        <VerticalTimelineElement
        
          className="vertical-timeline-element--education"
          contentStyle={{
              background: "#0f172a",
              color: "#fff",
              borderRadius: "1rem",
            }}
          contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          date="2021"
          iconStyle={{
              background: "linear-gradient(to bottom, #2F0743, #41295a)",
              color: "#fff",
            }}
          icon={<FaGraduationCap />}
        >
        
        <Slide direction="left">
          <h3 className="text-lg font-bold">11th & 12th Grade Educations</h3>
          <h4 className="text-sm text-green-400">
            Juban National High School (JNHS)
          </h4>
          <p>Completed higher primary education with focus on IT</p>
          </Slide>
        </VerticalTimelineElement>

        {/* 1st Year College */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#0f172a",
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          date="2022"
          iconStyle={{
            background: "linear-gradient(to bottom, #2F0743, #41295a)",
            color: "#fff",
          }}
          icon={<FaLaptopCode />}
        >
            <Slide direction="right">
          <h3 className="text-lg font-bold">1st Year College</h3>
          <h4 className="text-sm text-green-400">CCDI - Sorsogon City</h4>
          <p>
            Started learning Java & Python. Built projects and problem-solving
            skills.
          </p>
          </Slide>
        </VerticalTimelineElement>

        {/* 2nd Year College */}
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
          <h3 className="text-lg font-bold">2nd Year College</h3>
          <h4 className="text-sm text-green-400">CCDI - Sorsogon City</h4>
          <p>
            Mastered full-stack web & app dev with Supabase, React.js, Node.js.{" "}
            Built projects including my portfolio.
          </p>
        </VerticalTimelineElement>

                <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#0f172a",
            color: "#fff",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0f172a" }}
          date="2021"
          iconStyle={{
            background: "linear-gradient(to bottom, #2F0743, #41295a)",
            color: "#fff",
          }}
          icon={<FaGraduationCap />}
        >
          <h3 className="text-lg font-bold">11th & 12th Grade Educations</h3>
          <h4 className="text-sm text-green-400">
            Juban National High School (JNHS)
          </h4>
          <p>Completed higher primary education with focus on IT</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </Fade>
    </div>
    </StyledBody>
  );
};

export default Timeline;
