import React, { Component } from 'react'
import { Col, Row, Card, Button, Container, Form, InputGroup } from "react-bootstrap"
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageState: "landing",
      showPassword: false,
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
                <Row style={{ paddingTop: "35%", textAlign: "center", paddingBottom: "35%" }}>
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
                <Row></Row>
                <Row style={{ paddingTop: "35%", textAlign: "center", paddingBottom: "35%" }}>
                  <Card className="shadow" style={{ width: "100%", textAlign: "center", paddingTop: "5%" }}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <Row>
                            <Col>
                              <Form>
                                <Form.Row style={{marginBottom: '15px'}}>
                                  <Form.Control type="text" id="login" placeholder="Username / Email" required></Form.Control>
                                </Form.Row>
                                <Form.Row>
                                  <InputGroup>
                                    <Form.Control type={this.state.showPassword ? 'text' : 'password'} placeholder="Password"></Form.Control>
                                    <InputGroup.Append role="button">
                                      <InputGroup.Text className={`fa ${this.state.showPassword ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => this.setState({ showPassword: !this.state.showPassword })}></InputGroup.Text>
                                    </InputGroup.Append>
                                  </InputGroup>
                                </Form.Row>
                                <Form.Group>
                                  <Row>
                                    <Col>
                                      <div className="text-left">
                                        <a className="text" href="#">Forgot password?</a>
                                      </div>
                                    </Col>
                                    <Col className="text-right">
                                      <Form.Check type="checkbox" id="rememberCheck" label="Remember Me" />
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Form>
                            </Col>
                          </Row>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Link to={{
                              pathname: '/outfit'
                            }}>
                              <Button className="landingLoginButton">Login</Button>
                            </Link>
                          </Row>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                            <small>
                              Don't have an account? <a className="text" href="#" onClick={() => this.setState({ pageState: "signUp" })}>Sign Up</a>
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
                <Row></Row>
                <Row style={{ paddingTop: "35%", textAlign: "center", paddingBottom: "35%" }}>
                  <Card className="shadow" style={{ width: "100%", textAlign: "center", paddingTop: "5%" }}>
                    <Card.Body>
                      <Card.Title as="h1" className="landingTitle">Atelier</Card.Title>
                      <Container>
                        <Col>
                          <form>
                            <div className="form-group">
                              <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" id="username" placeholder="Username" />
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter Password" />
                            </div>
                          </form>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Link to={{
                              pathname: '/outfit'
                            }}>
                              <Button className="landingLoginButton">Sign Up</Button>
                            </Link>
                          </Row>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                            <small>
                              Already have an account? <a className="text" href="#" onClick={() => (this.setState({ pageState: "login" }))}>Login</a>
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
      default:
        return (
          <div>pageState Error</div>
        )
    }
  }
}
