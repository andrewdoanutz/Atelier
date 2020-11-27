import React, { Component } from 'react'
import {Col, Row, Card, Button, Container} from "react-bootstrap"

export default class Landing extends Component {
  constructor(props){
    super(props)
    this.state={
      pageState: "landing"
    }
  }

  render() {
    switch(this.state.pageState){
      case 'landing':
        return (
          <Container className="justify-content-md-center">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row></Row>
                <Row style={{paddingTop:"35%",textAlign:"center",paddingBottom:"35%"}}>
                  <Card className="shadow" style={{width:"100%", textAlign:"center",paddingTop:"5%"}}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Row id="gradButton" className="landingRow justify-content-md-center"><Button className="landingLoginButton" onClick={()=>{ this.setState({pageState:"login"})}} >Login</Button></Row>
                          <Row id="gradButton" className="landingRow justify-content-md-center" style={{paddingBottom:"10%"}}><Button className="landingSignUpButton" onClick={()=>{ this.setState({pageState:"signUp"})}} >Sign Up</Button></Row>
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
      case 'login':
        return(
          <Container className="justify-content-md-center">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row></Row>
                <Row style={{paddingTop:"35%",textAlign:"center",paddingBottom:"35%"}}>
                  <Card className="shadow" style={{width:"100%", textAlign:"center",paddingTop:"5%"}}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Row id="gradButton" className="landingRow justify-content-md-center">"login"</Row>
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
      case 'signUp':
        return(
          <Container className="justify-content-md-center">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row></Row>
                <Row style={{paddingTop:"35%",textAlign:"center",paddingBottom:"35%"}}>
                  <Card className="shadow" style={{width:"100%", textAlign:"center",paddingTop:"5%"}}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Row id="gradButton" className="landingRow justify-content-md-center">"sign up"</Row>
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
      default:
        return(
          <div>pageState Error</div>
        )
    }
  }
}
