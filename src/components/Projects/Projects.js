import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ochi Design Clone"
              description="The Ochi Design Clone project is a careful copy of the stylish and simple website design of Ochi, a well-known design studio. This project shows my ability to recreate detailed layouts and design elements, paying close attention to every detail and keeping the look and function of the original site."
              ghLink="https://github.com/realsachinr/Ochi-Design-Clone"
              demoLink="https://ochi-design-clone-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Plane with Love"
              description=" Our project is all about helping you plan your special moments with ease and joy. Whether you're organizing a wedding, a birthday party, or any other celebration, we provide the tools and inspiration you need. Our user-friendly platform offers customizable templates, checklists, and tips to make your planning stress-free and fun. Join us and make your events memorable with a touch of love and care."
              ghLink="https://github.com/realsachinr/Plan-With-Love"
              demoLink="https://plan-with-love-sand.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="Welcome to our Weather App! This app helps you stay updated with the latest weather conditions in your area. You can quickly check the temperature, humidity, wind speed, and more. It's simple to use and gives you accurate weather forecasts to help you plan your day. Whether you're heading out or staying in, our Weather App ensures you're always prepared for the weather."
              ghLink="https://github.com/realsachinr/Weather-App"
              demoLink="https://realsachinr.github.io/Weather-App/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Text To Speech Convertor"
              description="This project helps you convert written text into natural-sounding speech. It's perfect for creating audio versions of documents, articles, or any text you want to listen to instead of read."
              ghLink="https://realsachinr.github.io/Text-to-Voice-Convertor/"
              demoLink="https://text-to-voice-convertor-nine.vercel.app/"
            />
          </Col>

       
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
