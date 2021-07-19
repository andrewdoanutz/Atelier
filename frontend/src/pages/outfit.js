import React, { Component } from 'react'
import NavBar from '../components/navbar'
import { Col, Row, Container} from "react-bootstrap"

import UploadClothesButton from "../components/uploadClothesButton"
import OutfitMannequin from "../components/outfitMannequin"
import OutfitDetails from "../components/outfitDetails"

import s1 from "../images/shirt1.jpeg"
import j1 from "../images/j1.jpeg"
import sh1 from "../images/shoe1.jpeg"


export default class Outfit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topDetails: {"details": {"dateUploaded": "12/2/1412", "category": "shirt"}, "pic": s1},
      pantsDetails: {"details": {"dateUploaded": "12/2/1412", "category": "shirt"}, "pic": j1},
      shoesDetails: {"details": {"dateUploaded": "12/2/1412", "category": "shirt"}, "pic": sh1}
    }
  }
  render() {
    return (
      <>
      <NavBar/>
      <Container style={{paddingTop:"10%"}}>
          <Row>
              <Col>
                <OutfitMannequin topPic={this.state.topDetails["pic"]} pantsPic={this.state.pantsDetails["pic"]} shoesPic={this.state.shoesDetails["pic"]} />
                <UploadClothesButton/>
              </Col>
              <Col md={8}>
                <OutfitDetails topDetails={this.state.topDetails} pantsDetails={this.state.pantsDetails} shoesDetails={this.state.shoesDetails} />
              </Col>
              <Col md={1}></Col>
          </Row>
      </Container>
      </>
    )
  }
}
