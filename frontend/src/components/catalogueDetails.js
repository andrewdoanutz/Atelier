import React, { Component } from 'react'
import {Col, Row, Card, Container} from "react-bootstrap"

export default class CatalogueDetails extends Component {
  render() {
    return (
      <>
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
                                            <div>Category: {this.props.details["details"]["category"]}</div>
                                            <div>Date Uploaded: {this.props.details["details"]["dateUploaded"]}</div>
                                        </Container>
                                        </Card.Body>
                                    </Card>
                                </Row>
                            </Col>
                        </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </>
    )
  }
}
