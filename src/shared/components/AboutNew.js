import React, { Component } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import NavHeader from "../components/NavHeader.js"
import ReactFullpage from '@fullpage/react-fullpage';
var teamJson = require("../components/placeholders/team.json");
const Link = require("react-router-dom").Link;

const TeamTag = (props) => {
     return (props.team.map((person) =>
          <Col style={{ alignItems: "center" }} className="teamTag">
               <Link to={{
                    pathname: "/team",
                    state: {
                         person: person
                    }
               }
               }>
                    <Image roundedCircle fluid src={'images/' + person.image} />
               </Link>
               <h6>{person.name}</h6>
               <p style={{fontSize: "12px"}}>{person.role}</p>
          </Col>
     )
     );
}

class About extends Component {
     constructor(props) {
          super(props)
     }

     render() {
          return (
               <Container fluid>
                    <link rel="stylesheet" href="/stylesheets/App.css" />
                    <link rel="stylesheet" href="/stylesheets/About.css" />
                    <NavHeader />
                    <ReactFullpage scrollBar={true}
                         render={({ state, fullpageApi }) => {
                              return (
                                   <ReactFullpage.Wrapper>

                                        {/*  OUR MISSION */}
                                        <Container fluid className="section">
                                             <Container fluid style={{ height: "100%" }} className="section2Row">
                                                  <Row style={{ height: "100%" }}>
                                                       <Col md offset={1} className="about-info-container">
                                                            <h2>The Problem</h2>
                                                            <p>Our urban communities have become inaccessible and exclusionary. The high cost of property has made home-ownership an unattainable dream for most residents. </p><br />
                                                            <Link to="/mission" style={{ textDecoration: "none" }}>
                                                                 <Button>Our Mission</Button>
                                                            </Link>
                                                       </Col>
                                                       <Col md className="jumbo">
                                                            <Image rounded src='images/problem.jpg' />
                                                       </Col>
                                                  </Row>
                                             </Container>
                                        </Container>

                                        {/* OUR VISION */}
                                        <Container fluid className="section">
                                             <Container fluid style={{ height: "100%" }} className="section2Row">
                                                  <Row style={{ height: "100%" }}>
                                                       <Col sm={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} className="jumbo">
                                                            <Image rounded src='images/vision.jpg' />
                                                       </Col>
                                                       <Col sm={{ span: 12, order: 2 }} md={{ span: 5, order: 2 }} className="about-info-container">
                                                            <h2>Our Vision</h2>
                                                            <p>We are building a platform to host a network of diverse cooperative communities in which everyone has a place to call home. </p><br />
                                                            <Link to="/vision" style={{ textDecoration: "none" }}>
                                                                 <Button>Our Vision</Button>
                                                            </Link>
                                                       </Col>
                                                  </Row>
                                             </Container>
                                        </Container>

                                        {/*  OUR MODEL */}
                                        <Container fluid className="section">
                                             <Container fluid style={{ height: "100%" }} className="section2Row">
                                                  <Row style={{ height: "100%" }}>
                                                  <Col md offset={1} className="about-info-container">
                                                            <h2>Our Model</h2>
                                                            <p>The nature of cooperatives can be difficult to understand, take a look at some frequently asked questions and get a better understanding of our goals.  </p><br />
                                                            <Link to="/model" style={{ textDecoration: "none" }}>
                                                                 <Button>Our Model</Button>
                                                            </Link>
                                                       </Col>
                                                       <Col md className="jumbo">
                                                            <Image rounded src='images/introJumboImage.jpg' />
                                                       </Col>
                                                  </Row>
                                             </Container>
                                        </Container>

                                        {/* OUR TEAM */}
                                        <Container id="team" fluid className="section">
                                             <Row style={{paddingLeft: "20px", paddingRight:"20px"}}>
                                                  <TeamTag team={teamJson.team} />
                                             </Row>
                                        </Container>

                                        {/* OUR HISTORY */}
                                        <Container fluid className="section">
                                             <Container fluid style={{ height: "100%" }} className="section2Row">
                                                  <Row style={{ height: "100%" }}>
                                                       <Col sm={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} className="jumbo">
                                                            <Image rounded src='images/oa.jpg' />
                                                       </Col>
                                                       <Col sm={{ span: 12, order: 2 }} md={{ span: 5, order: 2 }} className="about-info-container">
                                                            <h2>Our Story</h2>
                                                            <p>CoopNet began with an experience familiar to many in the Bay Area--our members moved to Berkeley and had to find somewhere to live.  </p><br />
                                                            <Link to="/history" style={{ textDecoration: "none" }}>
                                                                 <Button>Read More</Button>
                                                            </Link>
                                                       </Col>
                                                  </Row>
                                             </Container>
                                        </Container>

                                   </ReactFullpage.Wrapper>
                              );
                         }}
                    />
               </Container>
          );
     }
}


export default About;
