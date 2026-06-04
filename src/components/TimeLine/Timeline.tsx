import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import {
  FaCertificate,
  FaGraduationCap,
  FaLaptopCode,
  FaPlaneArrival,
  FaRocket,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type TimelineEventKey =
  | "arrival"
  | "firstYear"
  | "secondYear"
  | "summer"
  | "graduation";

type TimelineEvent = {
  key: TimelineEventKey;
  icon: IconType;
};

const timelineEvents: TimelineEvent[] = [
  { key: "arrival", icon: FaPlaneArrival },
  { key: "firstYear", icon: FaLaptopCode },
  { key: "secondYear", icon: FaRocket },
  { key: "summer", icon: FaCertificate },
  { key: "graduation", icon: FaGraduationCap },
];

const Section = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background:
    radial-gradient(circle at 84% 16%, rgba(34, 197, 94, 0.14), transparent 25rem),
    radial-gradient(circle at 16% 30%, rgba(104, 9, 167, 0.24), transparent 28rem),
    linear-gradient(135deg, #030303 0%, #0d0612 48%, #180820 100%);
  color: #fff;
  padding: clamp(5rem, 9vw, 8rem) clamp(1rem, 4vw, 2rem);
`;

const Header = styled.header`
  max-width: 1040px;
  margin: 0 auto clamp(2.5rem, 5vw, 4.5rem);
`;

const Eyebrow = styled.p`
  color: #22c55e;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: clamp(2.4rem, 6vw, 4.25rem);
  line-height: 1;
  margin: 0;
`;

const Lead = styled.p`
  max-width: 680px;
  color: rgba(255, 255, 255, 0.66);
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.75;
  margin: 1rem 0 0;
`;

const TimelineList = styled.ol`
  position: relative;
  display: grid;
  gap: clamp(1.1rem, 2.5vw, 1.65rem);
  max-width: 1040px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  &::before {
    content: "";
    position: absolute;
    top: 1.5rem;
    bottom: 1.5rem;
    left: 168px;
    width: 1px;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(34, 197, 94, 0.72),
      rgba(168, 85, 247, 0.5),
      transparent
    );
  }

  @media (max-width: 760px) {
    &::before {
      left: 21px;
    }
  }
`;

const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: 136px 64px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 0.9rem;
  }
`;

const DesktopDate = styled.time`
  display: block;
  color: rgba(255, 255, 255, 0.72);
  font-family: "Courier New", monospace;
  font-size: 0.92rem;
  font-weight: 700;
  padding-top: 1.25rem;
  text-align: right;

  @media (max-width: 760px) {
    display: none;
  }
`;

const MobileDate = styled.time`
  display: none;
  color: #22c55e;
  font-family: "Courier New", monospace;
  font-size: 0.85rem;
  font-weight: 800;

  @media (max-width: 760px) {
    display: block;
  }
`;

const Marker = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(34, 197, 94, 0.35);
  border-radius: 50%;
  background: linear-gradient(135deg, #17131e, #2f0743);
  box-shadow:
    0 0 0 8px rgba(3, 3, 3, 0.84),
    0 18px 35px rgba(0, 0, 0, 0.35);

  svg {
    color: #fff;
    font-size: 1.3rem;
  }

  @media (max-width: 760px) {
    width: 44px;
    height: 44px;
    box-shadow:
      0 0 0 6px rgba(3, 3, 3, 0.84),
      0 14px 26px rgba(0, 0, 0, 0.32);

    svg {
      font-size: 1.05rem;
    }
  }
`;

const Card = styled.article`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(10, 13, 22, 0.78);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.28);
  padding: clamp(1.25rem, 3vw, 2rem);
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background 0.24s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(34, 197, 94, 0.38);
    background: rgba(13, 17, 28, 0.9);
  }
`;

const CardTopline = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
`;

const Step = styled.span`
  color: rgba(255, 255, 255, 0.45);
  font-family: "Courier New", monospace;
  font-size: 0.82rem;
  font-weight: 800;
`;

const EventTitle = styled.h3`
  color: #fff;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  line-height: 1.2;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #22c55e;
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0.35rem 0 0;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.75;
  margin: 1rem 0 0;
`;

const Timeline = () => {
  const { t } = useTranslation();

  return (
    <Section id="experience" aria-labelledby="experience-title">
      <Header>
        <Fade delay={200} triggerOnce>
          <Eyebrow>{t("timeline.eyebrow")}</Eyebrow>
          <Title id="experience-title">{t("timeline.title")}</Title>
          <Lead>{t("timeline.intro")}</Lead>
        </Fade>
      </Header>

      <TimelineList>
        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          const baseKey = `timeline.events.${event.key}`;

          return (
            <TimelineItem key={event.key}>
              <DesktopDate>{t(`${baseKey}.date`)}</DesktopDate>
              <Marker aria-hidden="true">
                <Icon />
              </Marker>
              <Fade direction="up" delay={index * 80} triggerOnce>
                <Card>
                  <CardTopline>
                    <Step>{String(index + 1).padStart(2, "0")}</Step>
                    <MobileDate>{t(`${baseKey}.date`)}</MobileDate>
                  </CardTopline>
                  <EventTitle>{t(`${baseKey}.title`)}</EventTitle>
                  <Subtitle>{t(`${baseKey}.subtitle`)}</Subtitle>
                  <Description>{t(`${baseKey}.description`)}</Description>
                </Card>
              </Fade>
            </TimelineItem>
          );
        })}
      </TimelineList>
    </Section>
  );
};

export default Timeline;
