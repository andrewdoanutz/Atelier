import React, { Component } from 'react'
import {Col, Row, Container, Tab, Tabs, Card} from "react-bootstrap"

export default class OutfitDetails extends Component {
  render() {
    return (
      <Container>
            <Tabs defaultActiveKey="top" className="mb-3" style={{borderColor: "#EF9A9A"}}>
                <Tab eventKey="top" title="Top" className="shadow" tabClassName="outfitTabs">
                    <Row>
                        <Col></Col>
                        <Col>
                            <Row style={{paddingTop:"7%"}}>
                                <img className="outfitDetailsImage" src={this.props.topDetails["pic"]}/>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col md={1}></Col>
                        <Col>
                            <Row style={{paddingTop:"3.5%"}}>
                                <Card style={{width: "100%", textAlign: "left", margin:"0", borderColor: "#C4C4C4", marginBottom: "3.5%"}}>
                                    <Card.Body>
                                    <Card.Title as="h6">Details</Card.Title>
                                    <Container>
                                        <div>Category: {this.props.topDetails["details"]["category"]}</div>
                                        <div>Date Uploaded: {this.props.topDetails["details"]["dateUploaded"]}</div>
                                    </Container>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Tab>
                <Tab eventKey="pants" title="Pants" className="shadow" tabClassName="outfitTabs">
                    <Row>
                        <Col></Col>
                        <Col>
                            <Row style={{paddingTop:"7%"}}>
                                <img className="outfitDetailsImage" src={this.props.pantsDetails["pic"]}/>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col md={1}></Col>
                        <Col>
                            <Row style={{paddingTop:"3.5%"}}>
                                <Card style={{width: "100%", textAlign: "left", margin:"0", borderColor: "#C4C4C4", marginBottom: "3.5%"}}>
                                    <Card.Body>
                                    <Card.Title as="h6">Details</Card.Title>
                                    <Container>
                                        <div>Category: {this.props.pantsDetails["details"]["category"]}</div>
                                        <div>Date Uploaded: {this.props.pantsDetails["details"]["dateUploaded"]}</div>
                                    </Container>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Tab>
                <Tab eventKey="shoes" title="Shoes" className="shadow" tabClassName="outfitTabs">
                    <Row>
                        <Col></Col>
                        <Col>
                            <Row style={{paddingTop:"7%"}}>
                                <img className="outfitDetailsImage" src={this.props.shoesDetails["pic"]}/>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col md={1}></Col>
                        <Col>
                            <Row style={{paddingTop:"3.5%"}}>
                                <Card style={{width: "100%", textAlign: "left", margin:"0", borderColor: "#C4C4C4", marginBottom: "3.5%"}}>
                                    <Card.Body>
                                    <Card.Title as="h6">Details</Card.Title>
                                    <Container>
                                        <div>Category: {this.props.shoesDetails["details"]["category"]}</div>
                                        <div>Date Uploaded: {this.props.shoesDetails["details"]["dateUploaded"]}</div>
                                    </Container>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Tab>
            </Tabs>
      </Container>
    )
  }
}
