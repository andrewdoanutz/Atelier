import React, { Component } from 'react'
import { Button } from "react-bootstrap"

export default class UploadClothesButton extends Component {
  render() {
    return (
      <>
        <Button className="uploadClothesButton">
          Upload <br/> Clothes
        </Button>
      </>
    )
  }
}
