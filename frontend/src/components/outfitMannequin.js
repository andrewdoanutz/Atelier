import React, { Component } from 'react'
import {Col, Row, Card, Container, Button} from "react-bootstrap"

export default class OutfitMannequin extends Component {
  render() {
    return (
    <Container className="text-center">
        <Card className="shadow" style={{padding: "0%", position: "fixed", borderColor: "#EF9A9A"}}>
            <Card.Body>
                <Card.Title as="h2">Today's Outfit</Card.Title>
                <Container>
                <Row>
                    <Col>
                        <Row><img className="outfitMannequinPic" src={this.props.topPic}/></Row>
                        <Row style={{paddingTop:"5%"}}><img className="outfitMannequinPic" src={this.props.pantsPic}/></Row>
                        <Row style={{paddingTop:"5%"}}><img className="outfitMannequinPic" src={this.props.shoesPic}/></Row>
                        <Row style={{paddingTop:"7%"}}>
                            <Col>
                                <Button className="outfitMannequinDislikeButton">
                                    <svg className="outfitMannequinDislikeSVG" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                                    </svg>
                                </Button>
                            </Col>
                            <Col>
                                <Button className="outfitMannequinLikeButton">
                                    <svg className="outfitMannequinLikeSVG" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                                    </svg>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Container>
            </Card.Body>
        </Card>
    </Container>
    )
  }
}
