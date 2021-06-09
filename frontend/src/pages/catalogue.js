import React, { Component } from 'react'
import NavBar from '../components/navbar'
import CatalogueGrid from '../components/catalogueGrid'
import { Col, Row, Card, Button, Container} from "react-bootstrap"

import s1 from "../images/shirt1.jpeg"
import s2 from "../images/shirt2.jpeg"
import s3 from "../images/shirt3.jpeg"
import s4 from "../images/shirt4.jpeg"
import s5 from "../images/shirt5.jpeg"
import s6 from "../images/shirt6.jpeg"

export default class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
          showDetails: null,
          clothes: [s1,s2,s3,s4,s5,s6]
        }
      }
    render() {
        return (
            <>
            <NavBar/>
            <Container style={{paddingTop:"10%"}}>
                <Row>
                    <Col></Col>
                    <Col md={8}><CatalogueGrid clothes={this.state.clothes} /></Col>
                </Row>
            </Container>
            </>
        )
    }
}
