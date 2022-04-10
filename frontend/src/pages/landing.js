import React, { Component } from 'react'
import { Col, Row, Card, Button, Container, Form } from "react-bootstrap"
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageState: "landing",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    }
    this.cookies = new Cookies();
    this.verifyAccount = this.verifyAccount.bind(this)
    this.signUp = this.signUp.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
  }

  verifyAccount() {
    axios.post('http://localhost:5000/api/db/verifyuser', {email: this.state.email, password: this.state.password}, {
      withCredentials: true,
      headers: {
        "X-CSRF-TOKEN": this.cookies.get("csrf_access_token")
      }}).then(response => {
      if (response.status === 200)
        this.setState({pageState: "loggedIn"})
    }).catch(() => {
        this.setState({error: "Wrong email or password!"})
    })
  }

  signUp() {
    if (this.state.password !== this.state.confirmPassword){
      this.setState({error: "Passwords don't match!"})
    } else {
      axios.post('http://localhost:5000/api/db/user', {email: this.state.email, password: this.state.password}, {
        withCredentials: true,
        headers: {
          "X-CSRF-TOKEN": this.cookies.get("csrf_access_token")
        }}).then(response => {
        if (response.status === 200)
          this.setState({pageState: "loggedIn"})
      }).catch(() => {
          this.setState({error: "Email is already registered! Forgot your password?"})
      })
    }
    
  }

  resetPassword() {
    axios.post('http://localhost:5000/api/db/forgotpassword', {email: this.state.email}, {
      withCredentials: true,
      headers: {
        "X-CSRF-TOKEN": this.cookies.get("csrf_access_token")
      }}).then(response => {
      if (response.status === 200)
      console.log(response)
        this.setState({pageState: "emailReset", error: ""})
    }).catch(() => {
        this.setState({error: "Email is not registered!"})
    })
  }

  render() {
    if (this.cookies.get("csrf_access_token") !== undefined)
      // return (<Redirect push to="/outfit" />)
      return (<Redirect push to="/catalogue" />)
      
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
                      <div className="landingError text-danger">{this.state.error}</div>
                      <Container>
                        <Col>
                          <Row>
                            <Col>
                              <Form>
                                <Form.Group style={{paddingBottom: "2%"}}>
                                  <Form.Control className="accountFormControl" type="email" value={this.state.email} onChange={text => this.setState({ email: text.target.value })} placeholder="email@gmail.com" required></Form.Control>
                                </Form.Group>
                                <Form.Group style={{paddingBottom: "2%"}}>
                                    <Form.Control className="accountFormControl" type="password" value={this.state.password} onChange={text => this.setState({ password: text.target.value })}  placeholder="Password" required></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                  <Row>
                                    <Col style={{textAlign:"right"}}>
                                    <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "forgotPassword", error: "" })}>Forgot Password?</Button>
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Form>
                            </Col>
                          </Row>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Col>
                              <Button className="landingLoginButton" onClick={this.verifyAccount}>Login</Button>
                            </Col>
                          </Row>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                            <small>
                              Don't have an account? <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "signUp", error: "" })}>Sign Up</Button>
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
                      <div className="landingError text-danger">{this.state.error}</div>
                      <Container>
                        <Col>
                          <Form>
                            <Form.Group style={{paddingBottom: "2%"}}>
                              <Form.Control className="accountFormControl" type="email" value={this.state.email} onChange={text => this.setState({ email: text.target.value })} placeholder="Email" />
                            </Form.Group>
                            <Form.Group style={{paddingBottom: "2%"}}>
                              <Form.Control className="accountFormControl" type="password" value={this.state.password} onChange={text => this.setState({ password: text.target.value })} placeholder="Password" />
                            </Form.Group>
                            <Form.Group style={{paddingBottom: "2%"}}>
                              <Form.Control className="accountFormControl" type="password" value={this.state.confirmPassword} onChange={text => this.setState({ confirmPassword: text.target.value })} placeholder="Re-enter Password" />
                            </Form.Group>
                          </Form>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Col>
                              <Button className="landingLoginButton" onClick={this.signUp}>Sign Up</Button>
                            </Col>
                          </Row>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                            <small>
                              Already have an account? <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "login", error: "" })}>Login</Button>
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
                      <div className="landingError text-danger">{this.state.error}</div>
                      <Container>
                        <Col>
                          <Form>
                            <Form.Group style={{paddingBottom: "2%"}}>
                              <Form.Control className="accountFormControl" type="email" value={this.state.email} onChange={text => this.setState({ email: text.target.value })} placeholder="Email" />
                            </Form.Group>
                          </Form>
                          <Row id="gradButton" className="landingRow justify-content-md-center" >
                            <Col>
                                <Button className="landingLoginButton" onClick={this.resetPassword}>Reset</Button>
                            </Col>
                          </Row>
                          <Row className="d-flex justify-content-center text-muted" style={{ paddingBottom: "10%" }}>
                            <small>
                              Remember your password? <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "login", error: "" })}>Login</Button>
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
                              <h4>Return to  <Button variant="link" className="landingLinkButton" onClick={() => this.setState({ pageState: "login", error: "" })}>Login</Button></h4>
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
