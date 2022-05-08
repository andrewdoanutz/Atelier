import React, { Component } from 'react'
import { Col, Row, Container} from "react-bootstrap"
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';

import NavBar from '../components/navbar'
import CatalogueGrid from '../components/catalogueGrid'
import CatalogueDetails from '../components/catalogueDetails'
import UploadClothesButton from "../components/uploadClothesButton"

export default class Catalogue extends Component {
    constructor(props) {
        super(props)
        this.state = {
          details: null,
          clothes: null
        }
        this.cookies = new Cookies();
        this.changeDetailsView = this.changeDetailsView.bind(this)
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/db/getimages", {
            withCredentials: true,
            headers: {
              "X-CSRF-TOKEN": this.cookies.get("csrf_access_token")
            }}).then(response => {
            if (response["data"]["images"] && response["data"]["images"].length){
                this.setState({clothes: response["data"]["images"], details: {"details": {"category": response["data"]["images"][0][1]}, "pic": response["data"]["images"][0][0]}})
            }
            }).catch(error => {
                console.log(error)
            })
    }

    changeDetailsView(pic){
        this.state.clothes.forEach(p => {
            if(pic === p[0]){
                this.setState({
                    details: {"details": {"category": p[1]}, "pic": p[0]}
                })
            }
        })

    }

    render() {
        if (this.cookies.get("csrf_access_token") === undefined)
        // return (<Redirect push to="/outfit" />)
        return (<Redirect push to="/" />)

        if (this.state.clothes === null) {
            return(
                <>
                <NavBar/>
                <Container>
                    <Col>
                        <Row style={{paddingTop:"20%", textAlign:"center"}}>
                            <h3>No photos uploaded yet!</h3>
                        </Row>
                    </Col>
                </Container>
                <UploadClothesButton />
                </>
            )
        } else{
            return (
                <>
                <NavBar/>
                <Container style={{paddingTop:"10%"}}>
                    <Row>
                        <Col><CatalogueDetails details={this.state.details}/></Col>
                        <Col md={8}>
                            <CatalogueGrid clothes={this.state.clothes} changeDetailsView={this.changeDetailsView}/>
                            <UploadClothesButton />
                        </Col>
                    </Row>
                </Container>
                </>
            )
        }
    }
}
