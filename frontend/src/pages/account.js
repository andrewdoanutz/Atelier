import React, { Component } from 'react'
import NavBar from '../components/navbar'
import { Row, Col, Container, Button, Form, Card } from "react-bootstrap"

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "test@gmail.com",
      password: "test"
    }
  }
  render() {
    return (
      <div>
        <NavBar/>
        <Container style={{paddingTop:"10%"}}>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Card className="shadow" style={{padding: "0%", borderColor: "#EF9A9A"}}>
                  <Card.Body>
                    <Col>
                        <Row>
                          <Form>
                            <Form.Group  controlId="accountForm.emailInput">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control className="accountFormControl" type="email" placeholder="email@xyz.com" defaultValue={this.state.email} />
                            </Form.Group>
                            <Form.Group controlId="accountForm.passwordInput" style={{paddingTop:"3%"}}>
                              <Form.Label>Password</Form.Label>
                              <Form.Control className="accountFormControl" type="password" placeholder="test" defaultValue={this.state.password} />
                            </Form.Group>
                          </Form>
                        </Row>
                        <Row style={{paddingTop:"3%"}}>
                          <Col md={10}></Col>
                          <Col><Button className="accountSaveButton">Save</Button></Col>
                        </Row>
                    </Col>
                  </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
