import React, { Component } from 'react'
import { Col, Row, Container} from "react-bootstrap"
import CatalogueGridCell from './catalogueGridCell'

export default class CatalogueGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
          showDetails: null,
          clothes: this.props.clothes
        }
    }
    createGrid() {
        let formattedClothes=[]
        let tempArr = []
        let count = 0
        this.state.clothes.map((pic)=>{
            console.log(tempArr.length)
            tempArr.push(pic)
            count+=1
            if (tempArr.length === 3) {
                formattedClothes.push(tempArr)
                tempArr = []
            }
            if (count === this.state.clothes.length) {
                formattedClothes.push(tempArr)
            }
            return 0
        })
        console.log(formattedClothes)
        return (
            <Col>
                {formattedClothes.map((arr)=>{
                    return ( 
                        <Row>
                        {arr.map((pic) => {
                        return (
                                <CatalogueGridCell pic={pic} />
                        )
                        })}
                        </Row>
                    )})
                }
            </Col>
        )
    }
    render() {
        return (
        <Container>
            {this.createGrid()}
        </Container>
        )
    }
}
