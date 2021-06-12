import React, { Component } from 'react'
import { Col, Row, Container} from "react-bootstrap"

import NavBar from '../components/navbar'
import CatalogueGrid from '../components/catalogueGrid'
import CatalogueDetails from '../components/catalogueDetails'
import UploadClothesButton from "../components/uploadClothesButton"

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
                        <UploadClothesButton />
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}
