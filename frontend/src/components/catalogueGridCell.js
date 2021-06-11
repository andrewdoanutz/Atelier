import React, { Component } from 'react'
import {Col, Row, Card, Container} from "react-bootstrap"

export default class CatalogueGridCell extends Component {
    render() {
        return (
        <div>
            <Row>
                <Col>
                    <Card className="shadow" style={{ width: "100%", textAlign: "center", padding: "0%" }}>
                    <Card.Body>
                      <Container>
                        <Row>
                            <Col><img className="catalogueGridImage" src={this.props.pic}/></Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
        </div>
        )
    }
}
