import React, { Component } from 'react'
import {Col, Row, Card, Button, Container} from "react-bootstrap"

export default class Landing extends Component {
  render() {
    return (
      <Container className="justify-content-md-center">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Row></Row>
            <Row style={{paddingTop:"35%",textAlign:"center",paddingBottom:"35%"}}>
              <Card style={{width:"100%", textAlign:"center",paddingTop:"5%", borderRadius: "30%/50%"}}>
                <Card.Body>
                  <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                  <Container>
                    <Col>
                      <Row id="gradButton" className="landingRow justify-content-md-center"><Button className="landingLoginButton">Login</Button></Row>
                      <Row id="gradButton" className="landingRow justify-content-md-center" style={{paddingBottom:"10%"}}><Button className="landingSignUpButton">Sign Up</Button></Row>
                    </Col>
                  </Container>
                </Card.Body>
              </Card>
            </Row>
            <Row></Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    )
  }
}
