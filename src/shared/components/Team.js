import React, { Component } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import NavHeader from "../components/NavHeader.js"
import ReactFullpage from '@fullpage/react-fullpage';

function Education(props) {
     return (
          props.education.map((ed) => (
               <Col md={{ span: 6, offset: 3 }}>
               <h2>{ed.school}</h2>
               <h3>{ed.degree + " " + ed.grad}</h3>
               <h4>{ed.info}</h4>
               </Col>
          )
          )
     )
}

function Work(props) {
     return (
          props.work.map((wrk) => (
               <Col md={{ span: 6, offset: 3 }}>
               <h2>{wrk.employer}</h2>
               <h4>{wrk.role}</h4>
               </Col>
          )
          )
     )
}

class Team extends Component {
     constructor(props) {
          super(props)
          this.state = {
               person: props.location.state.person
          }
     }
     render() {
          return (
               <Container fluid>
                    <link rel="stylesheet" href="stylesheets/App.css" />
                    <link rel="stylesheet" href="stylesheets/About.css" />
                    <NavHeader />
                    <Row style={{ paddingTop: "100px" }}>
                         <Col md={{ span: 6, offset: 3 }}>
                              <Image width="250px" height="250px" src={"images/" + this.state.person.image} />
                              <h1>{this.state.person.name}</h1>
                              <h2>{this.state.person.role}</h2>
                              <Button style={{marginBottom:"20px"}} href={this.state.person.link}>LinkedIn</Button>
                              <p>{this.state.person.description}</p>
                         </Col>
                    </Row>
                    <Education education={this.state.person.education} />
                    <Work work={this.state.person.work} />
               </Container>
          );
     }
}
export default Team;
