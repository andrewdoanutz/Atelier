import React, { Component } from 'react'
import {Col, Row, Card, Container, Button, Form} from "react-bootstrap"

export default class CatalogueDetails extends Component {
  render() {
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
                                                <Form.Select id="catalogueDetailsCategory">
                                                    <option value="T-shirt/top" selected={"T-shirt/top" === this.props.details["details"]["category"] ? true : false}>T-shirt/top</option>
                                                    <option value="Trouser" selected={"Trouser" === this.props.details["details"]["category"] ? true : false}>Trouser</option>
                                                    <option value="Pullover" selected={"Pullover" === this.props.details["details"]["category"] ? true : false}>Pullover</option>
                                                    <option value="Dress" selected={"Dress" === this.props.details["details"]["category"] ? true : false}>Dress</option>
                                                    <option value="Coat" selected={"Coat" === this.props.details["details"]["category"] ? true : false}>Coat</option>
                                                    <option value="Sandal" selected={"Sandal" === this.props.details["details"]["category"] ? true : false}>Sandal</option>
                                                    <option value="Shirt" selected={"Shirt" === this.props.details["details"]["category"] ? true : false}>Shirt</option>
                                                    <option value="Sneaker" selected={"Sneaker" === this.props.details["details"]["category"] ? true : false}>Sneaker</option>
                                                    <option value="Bag" selected={"Bag" === this.props.details["details"]["category"] ? true : false}>Bag</option>
                                                    <option value="Ankle boot" selected={"Ankle boot" === this.props.details["details"]["category"] ? true : false}>Ankle boot</option>
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
                                        <Button className="saveDetailsButton">Save</Button>
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
