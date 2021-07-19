import React, { Component } from 'react'
import { Col, Row, Card, Button, Container, Form, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom";

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageState: "landing",
      showPassword: false
    }
  }

  render() {
    switch (this.state.pageState) {
      case 'landing':
        return (
          <Container className="justify-content-md-center">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row></Row>
                <Row style={{ paddingTop: "25%", textAlign: "center", paddingBottom: "35%" }}>
                  <Card className="shadow" style={{ width: "100%", textAlign: "center", paddingTop: "5%" }}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Row id="gradButton" className="landingRow justify-content-md-center"><Button className="landingLoginButton" onClick={() => { this.setState({ pageState: "login" }) }} >Login</Button></Row>
                          <Row id="gradButton" className="landingRow justify-content-md-center" style={{ paddingBottom: "10%" }}><Button className="landingSignUpButton" onClick={() => { this.setState({ pageState: "signUp" }) }} >Sign Up</Button></Row>
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
        return (
          <Container className="justify-content-md-center">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row style={{ paddingTop: "25%", textAlign: "center", paddingBottom: "35%" }}>
                  <Card className="shadow" style={{ width: "100%", textAlign: "center", paddingTop: "5%" }}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Row>
                            <Col>
                              <Form>
                                <Form.Row style={{paddingBottom: "2%"}}>
                                  <Form.Control className="accountFormControl" type="email" id="login" placeholder="email@gmail.com" required></Form.Control>
                                </Form.Row>
                                <Form.Row style={{paddingBottom: "2%"}}>
                                    <Form.Control className="accountFormControl" type={this.state.showPassword ? 'text' : 'password'} placeholder="Password" required></Form.Control>
                                </Form.Row>
                                <Form.Group>
                                  <Row>
                                    <Col style={{textAlign:"right"}}>
                                    <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "forgotPassword" })}>Forgot Password?</Button>
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Form>
                            </Col>
                          </Row>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Col>
                              <Link to="/outfit">
                                <Button className="landingLoginButton">Login</Button>
                              </Link>
                            </Col>
                          </Row>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                            <small>
                              Don't have an account? <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "signUp" })}>Sign Up</Button>
                            </small>
                          </Row>
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
        return (
          <Container className="justify-content-md-center">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row style={{ paddingTop: "25%", textAlign: "center", paddingBottom: "35%" }}>
                  <Card className="shadow" style={{ width: "100%", textAlign: "center", paddingTop: "5%" }}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Form>
                            <Form.Row style={{paddingBottom: "2%"}}>
                              <Form.Control className="accountFormControl" type="email" id="email" placeholder="Email" />
                            </Form.Row>
                            <Form.Row style={{paddingBottom: "2%"}}>
                              <Form.Control className="accountFormControl" type="password" id="password" placeholder="Password" />
                            </Form.Row>
                            <Form.Row style={{paddingBottom: "2%"}}>
                              <Form.Control className="accountFormControl" type="password" id="confirmPassword" placeholder="Re-enter Password" />
                            </Form.Row>
                          </Form>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Col>
                              <Link to="/outfit">
                                <Button className="landingLoginButton">Sign Up</Button>
                              </Link>
                            </Col>
                          </Row>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                            <small>
                              Already have an account? <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "login" })}>Login</Button>
                            </small>
                          </Row>
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
      case 'forgotPassword':
        return (
          <Container className="justify-content-md-center">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row></Row>
                <Row style={{ paddingTop: "25%", textAlign: "center", paddingBottom: "50%" }}>
                  <Card className="shadow" style={{ width: "100%", textAlign: "center", paddingTop: "5%" }}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Form>
                            <Form.Row style={{paddingBottom: "2%"}}>
                              <Form.Control className="accountFormControl" type="email" id="email" placeholder="Email" />
                            </Form.Row>
                          </Form>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Col>
                                <Button className="landingLoginButton" onClick={() => this.setState({ pageState: "emailReset" })}>Reset</Button>
                            </Col>
                          </Row>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                            <small>
                              Remembered your password? <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "login" })}>Login</Button>
                            </small>
                          </Row>
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
      case 'emailReset':
        return (
          <Container className="justify-content-md-center">
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row></Row>
                <Row style={{ paddingTop: "25%", textAlign: "center", paddingBottom: "50%" }}>
                  <Card className="shadow" style={{ width: "100%", textAlign: "center", paddingTop: "5%" }}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                              <h4>An email has been sent!</h4>
                              <br/>
                              <h4>Return to  <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "login" })}>Login</Button></h4>
                          </Row>
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
        return (
          <div>pageState Error</div>
        )
    }
  }
}
