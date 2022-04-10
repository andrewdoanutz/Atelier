import React, { Component } from 'react'
import NavBar from '../components/navbar'
import axios from 'axios'
import { Row, Col, Container, Button, Form, Card } from "react-bootstrap"
import Cookies from 'universal-cookie';

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "test@gmail.com",
      password: "test"
    }
    this.cookies = new Cookies();
    this.saveAccountDetailsOnClick = this.saveAccountDetailsOnClick.bind(this)
    this.onChangeAccountPassword = this.onChangeAccountPassword.bind(this)
  }
  componentDidMount(){
    axios.post('http://localhost:5000/api/db/getuser', {email: this.cookies.get("email")}, {
      withCredentials: true,
      headers: {
        "X-CSRF-TOKEN": this.cookies.get("csrf_access_token")
      }}).then(response => {
        console.log("SUCCESS", response)
        this.setState({email: response["data"]["user"][0][0], password: response["data"]["user"][0][1]})
        }).catch(error => {
            console.log(error)
        })
}

  saveAccountDetailsOnClick(){
    axios.put('http://localhost:5000/api/db/user', {email: this.state.email, password: this.state.password}, {
      withCredentials: true,
      headers: {
        "X-CSRF-TOKEN": this.cookies.get("csrf_access_token")
      }}).then(response => {
            console.log("SUCCESS", response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                window.location.reload(false);
            })
  }

  onChangeAccountPassword(event){
    this.setState({
        password: event.target.value
    })
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
                              <Form.Control type="email" disabled value={this.state.email} />
                            </Form.Group>
                            <Form.Group controlId="accountForm.passwordInput" style={{paddingTop:"3%"}}>
                              <Form.Label>Password</Form.Label>
                              <Form.Control className="accountFormControl" type="text" placeholder="test" value={this.state.password} onChange={this.onChangeAccountPassword} />
                            </Form.Group>
                          </Form>
                        </Row>
                        <Row style={{paddingTop:"3%"}}>
                          <Col md={10}></Col>
                          <Col><Button className="accountSaveButton" onClick={this.saveAccountDetailsOnClick}>Save</Button></Col>
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
