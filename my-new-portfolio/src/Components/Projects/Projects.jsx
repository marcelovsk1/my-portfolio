import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectsCard.jsx';
import TrackVisibility from 'react-visibility-sensor';

import './Projects.css';

// iOS
import airmaxone from "../../img/airmaxone.png";
import netflixapp from "../../img/netflixapp.png";
import weatherApp from "../../img/weatherapp.png";
import newsapp from "../../img/newsapp.png";
import guessgame from "../../img/guessgame.png";
import mensagerapp from "../../img/mensagerapp.png";
import socialmedia from "../../img/socialmedia.png";
import interfaceImg from "../../img/3d_interface.png";
// Fullstack
import gameofcodesImg from "../../img/game_of_codes.png";
import adidasoriginals from "../../img/adidas.png";
import scraper from "../../img/scraper.png";
import portfolio from "../../img/myportfolio.png";
import game_portfolio from "../../img/game_dev.png";
// Games
import boxrumble from "../../img/box.png"
import world from "../../img/BEAUTIFUL_3D_WORLD1.png"

const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const iosProjects = [
    {
      title: "Shoes App",
      description: "A shoes app store",
      imgUrl: airmaxone,
      link: "https://github.com/marcelovsk1/netflix-app-clone"
    },
    {
      title: "Netflix Clone",
      description: "A clone of Netflix in Objective-C that had movie and TV shows",
      imgUrl: netflixapp,
      link: "https://github.com/marcelovsk1/netflix-app-clone"
    },
    {
      title: "3D Content in iOS",
      description: "Integrate stunning 3D content into iOS & tvOS apps effortlessly with Spline.",
      imgUrl: interfaceImg,
      link: "https://github.com/marcelovsk1/3d_graphics/blob/master/3d_content/ContentView.swift"
    },
    {
      title: "News App",
      description: "Firebase and an API are being used in the development of a news application written in Swift.",
      imgUrl: newsapp,
      link: "https://github.com/marcelovsk1/NewsApp"
    },
    {
      title: "Mensager App",
      description: "A messaging platform in Swift, that allows users to send and receive messages instantly",
      imgUrl: mensagerapp,
      link: "https://github.com/marcelovsk1/message-app1/tree/master"
    },
    {
      title: "Social Media App",
      description: "Swift application that replicates the core features of an existing platform for photos",
      imgUrl: socialmedia,
      link: "https://github.com/marcelovsk1/SocialMediaClone"
    },
    {
      title: "Weather App",
      description: "Weather App in Swift, that fetches weather data from an API and presents it to users",
      imgUrl: weatherApp,
      link: "https://github.com/marcelovsk1/SwiftWeatherApp"
    }
  ];

  const fullStackProjects = [
    {
      title: "Scraper Bot",
      description: "An application that automates web data collection through scraping techniques",
      imgUrl: scraper,
      link: "https://github.com/marcelovsk1/scraper-demo"
    },
    {
      title: "Game of Codes",
      description: "A PvP game in Rails and JS, to introduce coding to beginners",
      imgUrl: gameofcodesImg,
      link: "https://github.com/KittySou/game-of-codes"
    },
    {
      title: "Landing Page",
      description: "A concept landing page for Adidas Originals",
      imgUrl: adidasoriginals,
      link: "https://github.com/marcelovsk1/rct-4"
    },
    {
      title: "My Portfolio",
      description: "My portfolio, constructed using React.Js",
      imgUrl: portfolio,
      link: "https://github.com/marcelovsk1/my-new-portfolio"
    },
    {
      title: "Game Dev Portfolio",
      description: "My Game portfolio, built in React.Js",
      imgUrl: game_portfolio,
      link: "https://github.com/marcelovsk1/portfolio-games"
    }
  ];

  const gamesProjects = [
    {
      title: "Cube Rumble",
      description: "My first game project in Unity, just for fun",
      imgUrl: boxrumble,
      link: "https://github.com/marcelovsk1/BoxRumble"
    },
    {
      title: "3D Open World",
      description: "A beautiful 3D open world, made using Unity Engine",
      imgUrl: world,
      link: "https://github.com/marcelovsk1/BoxRumble"
    },
    {
      title: "Guess PvP Game",
      description: "A multiplayer guessing game where players compete to correctly identify doodles",
      imgUrl: guessgame,
      link: "https://github.com/marcelovsk1/guess-multiplayer-game"
    },
    {
      title: "Game of Codes",
      description: "A PvP game in Rails and JS, to introduce coding to beginners",
      imgUrl: gameofcodesImg,
      link: "https://github.com/KittySou/game-of-codes"
    }
  ];

  const renderProjects = () => {
    switch (activeTab) {
      case "first":
        return iosProjects;
      case "second":
        return fullStackProjects;
      case "third":
        return gamesProjects;
      default:
        return iosProjects;
    }
  };

  return (
  <div className='container'>
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My <span>Projects</span></h2>
                  <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                    <Nav className="i-buttons-container">
                      <Nav.Item>
                        <Nav.Link eventKey="first" as="button" className="button i-button">iOS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" as="button" className="button i-button">FullStack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" as="button" className="button i-button">Games</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row className='wrapper'>
                          {renderProjects().map((project, index) => (
                            <Col key={index} sm={6} md={4}>
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
  );
}

export default Projects;
