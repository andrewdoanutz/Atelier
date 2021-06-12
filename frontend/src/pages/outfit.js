import React, { Component } from 'react'
import NavBar from '../components/navbar'
import { Col, Row, Button, Container} from "react-bootstrap"

import UploadClothesButton from "../components/uploadClothesButton"
import OutfitMannequin from "../components/outfitMannequin"

import s1 from "../images/shirt1.jpeg"
import j1 from "../images/j1.jpeg"
import sh1 from "../images/shoe1.jpeg"


export default class Outfit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topPic: s1,
      pantsPic: j1,
      shoesPic: sh1,

    }
  }
  render() {
    return (
      <>
      <NavBar/>
      <Container style={{paddingTop:"10%"}}>
          <Row>
              <Col md={8}></Col>
              <Col>
                <OutfitMannequin topPic={this.state.topPic} pantsPic={this.state.pantsPic} shoesPic={this.state.shoesPic} />
                <UploadClothesButton/>
              </Col>
          </Row>
      </Container>
      </>
    )
  }
}
