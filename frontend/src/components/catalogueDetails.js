import React, { Component } from 'react'
import {Col, Row, Card, Container, Button, Form} from "react-bootstrap"
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class CatalogueDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
          category: this.props.details["details"]["category"],
        }
        this.cookies = new Cookies();
        this.onChangeDetails = this.onChangeDetails.bind(this)
        this.detailsUpdateOnClick = this.detailsUpdateOnClick.bind(this)
    }
    componentDidUpdate(prevProps) {
        if (this.props.details["pic"] !== prevProps.details["pic"]) {
            this.setState({
                category: this.props.details["details"]["category"]
            })
        }
      }

    detailsUpdateOnClick(){
        axios.patch('http://localhost:5000/api/db/saveimage', {category: this.state.category, email: this.cookies.get("email"), image: this.props.details["pic"]}, {withCredentials: true}).then(response => {
            console.log("SUCCESS", response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                window.location.reload(false);
            })
    }
    
    onChangeDetails(event){
        this.setState({
            category: event.target.value
        })
    }

    render() {
        console.log(this.props.details["details"]["category"])
        return (
        <Row>
            <Col>
                <Card className="shadow" style={{padding: "0%", position: "fixed", borderColor: "#EF9A9A"}}>
                    <Card.Body>
                        <Container>
                        <Row>
                            <Col>
                                <Row><img className="catalogueDetailsImage" src={this.props.details["pic"]}/></Row>
                                <Row style={{paddingTop:"5%"}}>
                                    <Card style={{ width: "100%", textAlign: "left", margin:"0", borderColor: "#C4C4C4"}}>
                                        <Card.Body>
                                        <Card.Title as="h6">Details</Card.Title>
                                        <Container>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Select id="catalogueDetailsCategory" value={this.state.category} onChange={this.onChangeDetails}>
                                                        <option value="T-shirt/top" >T-shirt/top</option>
                                                        <option value="Trouser" >Trouser</option>
                                                        <option value="Pullover" >Pullover</option>
                                                        <option value="Dress" >Dress</option>
                                                        <option value="Coat" >Coat</option>
                                                        <option value="Sandal" >Sandal</option>
                                                        <option value="Shirt" >Shirt</option>
                                                        <option value="Sneaker" >Sneaker</option>
                                                        <option value="Bag" >Bag</option>
                                                        <option value="Ankle boot" >Ankle boot</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Form>
                                        </Container>
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row style={{paddingTop:"5%"}}>
                                    <Col md={3}>
                                    </Col>
                                    <Col md={8}>
                                        <Container>
                                            <Button className="saveDetailsButton" onClick={this.detailsUpdateOnClick}>Save</Button>
                                        </Container>
                                    </Col>
                                    <Col md={2}>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        )
    }
}
