import React, { Component } from 'react'
import {Col, Row, Card, Container} from "react-bootstrap"

export default class CatalogueDetails extends Component {
  render() {
    return (
      <>
        <img src={this.props.pic}/>
      </>
    )
  }
}
