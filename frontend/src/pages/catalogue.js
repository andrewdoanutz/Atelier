import React, { Component } from 'react'
import NavBar from '../components/navbar'
import CatalogueGrid from '../components/catalogueGrid'
import CatalogueDetails from '../components/catalogueDetails'
import { Col, Row, Button, Container} from "react-bootstrap"

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
          details: {"details": {"dateUploaded": "12/2/1412", "category": "shirt"}, "pic": s1},
          clothes: [s1,s2,s3,s4,s5,s6,s1,s2,s3,s4,s5,s6,s1,s2,s3,s4,s5,s6]
        }
    }

    changeDetailsView(pic){
        let tempDetails = this.state.details
        tempDetails["pic"]= pic
        this.setState({
            details: tempDetails
        })
    }

    render() {
        return (
            <>
            <NavBar/>
            <Container style={{paddingTop:"10%"}}>
                <Row>
                    <Col><CatalogueDetails details={this.state.details}/></Col>
                    <Col md={8}>
                        <CatalogueGrid clothes={this.state.clothes} changeDetailsView={this.changeDetailsView.bind(this)}/>
                        <Button className="catalogueFloatingButton">
                            <svg id="catalogueFloatingButtonImage" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}
