import React, { Component } from 'react'
import { Button, Modal, Card, Container } from "react-bootstrap"
import ImageUploading from 'react-images-uploading';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class UploadClothesButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      uploadedPictures: []
    }
    this.cookies = new Cookies();

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
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

  handleChange(imageList, addUpdateIndex) {
    this.setState({
      uploadedPictures: imageList
    })
  }

  handleSave(){
    if (this.state.uploadedPictures && this.state.uploadedPictures.length){
      var picsToPOST = []
      this.state.uploadedPictures.map(pic => {
        picsToPOST.push(pic["dataURL"])
        return true
      })
      axios.post('http://localhost:5000/api/db/saveimage', {files: picsToPOST, email: this.cookies.get("email")}, {
        withCredentials: true,
        headers: {
          "X-CSRF-TOKEN": this.cookies.get("csrf_access_token")
        }}).then(response => {
      console.log("SUCCESS", response)
      window.location.reload();
      }).catch(error => {
          console.log(error)
          this.setState({showModal: false})
      })
    }
    this.setState({showModal: false})
  }

  render() {
    return (
      <>
        <Button className="uploadClothesButton" onClick={this.handleOpen}>
          Upload <br/> Clothes
        </Button>
        
        <Modal show={this.state.showModal} onHide={this.handleClose} >
          <Modal.Header>
            <Modal.Title>Upload Clothes</Modal.Title>
            <Button variant="white" onClick={this.handleClose} style={{boxShadow:"none"}}>X</Button>
          </Modal.Header>
          <Modal.Body>
            <ImageUploading
              multiple
              value={this.state.uploadedPictures}
              onChange={this.handleChange}
              maxNumber={69}
              dataURLKey="dataURL"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
              }) => (
                <div>
                  <Button onClick={onImageUpload} className="uploadClothesModalButton">Upload </Button>
                  &nbsp;
                  <Button className="uploadClothesSecondaryModalButton" onClick={onImageRemoveAll}>Remove all images</Button>
                  {imageList.map((image, index) => (
                    <div style={{paddingTop: "4%", display: "flex", justifyContent: "center"}}>
                      <Card key={index} className="shadow" style={{padding: "0%", maxWidth: "100%"}}>
                        <Card.Body>
                            <Container>
                                    <div><img src={image['dataURL']} style={{maxWidth: "100%"}}/></div>
                                    <div style={{paddingTop:"5%", display: "flex", justifyContent: "center"}}>
                                      <Button className="uploadClothesSecondaryModalButton" onClick={() => onImageUpdate(index)}>Replace</Button>
                                      <Button className="uploadClothesSecondaryModalButton" onClick={() => onImageRemove(index)}>Remove</Button>
                                    </div>
                            </Container>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </Modal.Body>
          <Modal.Footer>
            <Button className="uploadClothesModalButton" onClick={this.handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
