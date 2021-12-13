import React, { Component } from 'react'
import { Col, Row, Container, Button} from "react-bootstrap"
import CatalogueGridCell from './catalogueGridCell'

export default class CatalogueGrid extends Component {
    constructor(props) {
        super(props)
        let clothesImages = []
        this.props.clothes.forEach(pic => {
            clothesImages.push(pic[0])
        })
        this.state = {
          clothes: clothesImages
        }
    }

    createGrid() {
        let formattedClothes=[]
        let tempArr = []
        let count = 0
        this.state.clothes.map((pic)=>{
            tempArr.push(pic)
            count+=1
            if (tempArr.length === 3) {
                formattedClothes.push(tempArr)
                tempArr = []
            }
            if (count === this.state.clothes.length && tempArr.length) {
                formattedClothes.push(tempArr)
            }
            return 0
        })
        return (   
            <Col>
                {formattedClothes.map((arr)=>{
                    return ( 
                        <Row style={{paddingBottom:"2%"}}>
                        {arr.map((pic, ind) => {
                        return (
                            <Col md={4} style={{paddingLeft:"1%", paddingRight:"1%"}}>
                                <Button className="catalogueGridCellButton" onClick={()=>{ this.props.changeDetailsView(pic) }}>
                                    <CatalogueGridCell id={ind} pic={pic} />
                                </Button>
                            </Col>
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
