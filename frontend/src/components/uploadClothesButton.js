import React, { Component } from 'react'
import { Button, Modal, Card, Container } from "react-bootstrap"
import ImageUploading from 'react-images-uploading';
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

    this.onChange = this.onChange.bind(this)
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


  onChange(imageList, addUpdateIndex) {
    console.log(imageList, addUpdateIndex);
    this.setState({
      uploadedPictures: imageList
    })
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
            <Button variant="white" onClick={()=>{this.setState({showModal:false})}} style={{boxShadow:"none"}}>X</Button>
          </Modal.Header>
          <Modal.Body>
            {/* <ImageUploader
                fileContainerStyle={{boxShadow:"none"}}
                buttonText='Choose Images'
                buttonClassName="uploadClothesUploadButton"
                onChange={this.handleChange}
                imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
                maxFileSize={5242880}
                withPreview={true}
                withLabel={false}
                fileSizeError="Max file size is 5mb"
            /> */}
            <ImageUploading
              multiple
              value={this.state.uploadedPictures}
              onChange={this.onChange}
              maxNumber={69}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
              }) => (
                // write your building UI
                <div>
                  <Button onClick={onImageUpload} className="uploadClothesModalButton">Upload </Button>
                  &nbsp;
                  <Button className="uploadClothesSecondaryModalButton" onClick={onImageRemoveAll}>Remove all images</Button>
                  {imageList.map((image, index) => (
                    <div style={{paddingTop: "4%", display: "flex", justifyContent: "center"}}>
                      <Card key={index} className="shadow" style={{padding: "0%", maxWidth: "100%"}}>
                        <Card.Body>
                            <Container>
                                    <div><img src={image['data_url']} style={{maxWidth: "100%"}}/></div>
                                    <div style={{paddingTop:"5%", display: "flex", justifyContent: "center"}}>
                                      <Button className="uploadClothesSecondaryModalButton" onClick={() => onImageUpdate(index)}>Update</Button>
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
            <Button className="uploadClothesModalButton" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
