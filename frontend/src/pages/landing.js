import React, { Component } from 'react'
import { Col, Row, Card, Button, Container } from "react-bootstrap"
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageState: "landing"
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
                            <form className="col">
                              <div className="form-group row-text-left mb-15">
                                {/* <label className="form-label" htmlFor="login">Login</label> */}
                                <input className="form-control" type="text" id="login" name="login" placeholder="Username / Email" required />
                              </div>
                              <div className="form-group-row text-left">
                                {/* <label className="control-label">Password</label> */}
                                <div className="input-group">
                                  <input className="form-control" type="text" className="form-control" placeholder="Password" />
                                  <div class="input-group-append">
                                    <span class="input-group-text fa fa-eye-slash" id="show-password-addon"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group-row">
                                <div className="row">
                                  <div className="text-left col">
                                    <a className="text" href="#">Forgot password?</a>
                                  </div>
                                  <div className="form-check text-right col">
                                    <input className="form-check-input" type="checkbox" id="rememberLogin" />
                                    <label htmlFor="rememberLogin">Remember Me</label>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </Row>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Link to={{
                              pathname: '/outfit'
                            }}>
                              <Button className="landingLoginButton">Login</Button>
                            </Link>
                          </Row>
                          <Row className="d-flex justify-content-center" style={{ paddingBottom: "10%" }}>
                            <div className="text-muted">
                              <small>Don't have an account? </small>
                              <small>
                                <a className="text" href="#">Sign Up</a>
                              </small>
                            </div>
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
                          <Row id="gradButton" className="landingRow justify-content-md-center" style={{ paddingBottom: "10%" }}>
                            <Link to={{
                              pathname: '/outfit'
                            }}>
                              <Button className="landingLoginButton">Sign Up</Button>
                            </Link>
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
