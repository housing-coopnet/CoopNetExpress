import React, { Component } from 'react';
import { Image, Container, Col, Row, Button } from 'react-bootstrap';
import CarouselSlider from "./CarouselSlider.js";
import NewsletterModal from "./NewsletterModal"
import ReactFullpage from '@fullpage/react-fullpage';
import NavHeader from './NavHeader'

const Link = require("react-router-dom").Link;

export default class Home extends Component {
     constructor(props) {
          super(props)
          this.state = {
               modalShow: false
          }
     }

     modalClose = () => this.setState({ modalShow: false })

     render() {
          return (
               <Container fluid>
                         <link rel="stylesheet" href="stylesheets/App.css" />
                         <link rel="stylesheet" href="stylesheets/Home.css" />
                         <link rel="stylesheet" href="stylesheets/Animations.css" />
                         <link rel="stylesheet" href="stylesheets/Carousel.css" />
                    <NavHeader />
                    <ReactFullpage scrollBar={true} paddingTop = "74px"
                         render={({ state, fullpageApi }) => {
                              return (
                                   <ReactFullpage.Wrapper >
                                        <Container fluid className="section" style={{ paddingBottom: "75px" }}>
                                             <CarouselSlider />
                                             <Container fluid className="horizontalBar2">
                                                  <em className = "white body" > OWN A STAKE IN A HOUSING MOVEMENT </em><br />
                                                  <Button onClick={() => this.setState({ modalShow: true })} className = "blue">Follow us</Button>
                                             </Container>
                                        </Container>

                                        <Container fluid className="section" style={{ paddingBottom: "230px" }}>

                                             <Container fluid className="section2Row">
                                                  <Row style={{ padding: "15px 0", height: "100%" }}>
                                                       <Col md className="blurbContainer">
                                                            <p className = "p-shrink">Working to create a network of diverse cooperative communities in which everyone has a place to call home.</p><br />
                                                            <Link to = "/about" style = {{textDecoration: "none"}}>
                                                                 <Button  style={{ marginTop: "30px"}}>ABOUT US</Button>
                                                            </Link>
                                                       </Col>
                                                       <Col md className="jumbo">
                                                            <Image rounded src="images/landing.jpg" />
                                                       </Col>
                                                  </Row>
                                             </Container>
 
                                             <Container fluid className="horizontalBar3">
                                                  <Row fluid className="badgeRow">
                                                       <Col xs={{ span: 4, order: 1 }} md={{ span: 1, order: 1}}>
                                                            <Image src='images/forimpact.svg' />
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 4}} md={{ span: 3, order: 2}}>
                                                            <em className = "title white" >AFFORDABLE</em>
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 2}} md={{ span: 1, order: 3}}>
                                                            <Image src='images/sustainable.svg' />
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 5}} md={{ span: 3, order: 4}}>
                                                            <em className = "title white" >SUSTAINABLE</em>
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 3}} md={{ span: 1, order: 5}}>
                                                            <Image src='images/community.svg' />
                                                       </Col>
                                                       <Col  xs = {{span: 4, order: 6}} md={{ span: 3, order: 6}}>
                                                            <em className = "title white" >COOPERATIVE</em>
                                                       </Col>
                                                  </Row>
                                             </Container>

                                             <Container  fluid className="horizontalBar4">
                                                  <Button className = 'bar hvr-rectangle-out' onClick={() => this.setState({ modalShow: true })} fluid> SIGN UP FOR OUR NEWSLETTER</Button>
                                                  <NewsletterModal modalShow={this.state.modalShow} onClickAway={this.modalClose} />
                                             </Container>
                                        </Container>

                                   </ReactFullpage.Wrapper>
                              );
                         }}
                    />
               </Container>
          )
     }
}