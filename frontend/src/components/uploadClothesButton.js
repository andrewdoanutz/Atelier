import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap"
import ImageUploader from 'react-images-upload';

export default class UploadClothesButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      uploadedPictures: []
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleOpen(){
    this.setState({
      showModal: true
    })
  }

  handleClose(){
    this.setState({
      showModal: false
    })
  }
  
  handleChange(pictureFiles, pictureDataURLs) {
    this.setState({
      uploadedPictures: pictureFiles
    })
  }

  render() {
    return (
      <>
        <Button className="uploadClothesButton" onClick={this.handleOpen}>
          Upload <br/> Clothes
        </Button>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Clothes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImageUploader
                fileContainerStyle={{boxShadow:"none"}}
                buttonText='Choose Images'
                buttonClassName="uploadClothesUploadButton"
                onChange={this.handleChange}
                imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
                maxFileSize={5242880}
                withPreview={true}
                withLabel={false}
                fileSizeError="Max file size is 5mb"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button className="uploadClothesModalButton" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
