import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap"
import ImageUploader from 'react-images-upload';
import axios from 'axios';

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
    axios.post('http://localhost:5000/api/db/saveimage', {files: pictureDataURLs}).then(response => {
            console.log("SUCCESS", response)
            this.setState({getMessage: response})
        }).catch(error => {
            console.log(error)
        })
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
          <Modal.Header>
            <Modal.Title>Upload Clothes</Modal.Title>
            <Button variant="white" onClick={()=>{this.setState({showModal:false})}} style={{boxShadow:"none"}}>X</Button>
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
