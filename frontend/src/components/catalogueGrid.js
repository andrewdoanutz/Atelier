import React, { Component } from 'react'
import { Col, Row, Button, Accordion} from "react-bootstrap"
import CatalogueGridCell from './catalogueGridCell'

export default class CatalogueGrid extends Component {
    constructor(props) {
        super(props)
        let clothesImages = {}
        let categoryIters = {'T-shirt/top': 0, 'Trouser': 0, 'Pullover': 0, 'Dress': 0, 'Coat': 0,
        'Sandal': 0, 'Shirt': 0, 'Sneaker': 0, 'Bag': 0, 'Ankle boot': 0}

        this.props.clothes.forEach(pic => {
            if (!(pic[1] in clothesImages)){
                clothesImages[pic[1]] = [[]]
            }
            clothesImages[pic[1]][categoryIters[pic[1]]].push(pic[0])
            if (clothesImages[pic[1]][categoryIters[pic[1]]].length === 3){
                clothesImages[pic[1]].push([])
                categoryIters[pic[1]] += 1
            }
            
        })
        this.state = {
          clothes: clothesImages
        }
    }

    formatClothesCategory(category){
        if (category === "Dress"){
            return category + "es"
        } else if (category === "T-shirt/top"){
            return "T-shirts/tops"
        } else {
            return category + "s"
        }
    }

    createGrid() {
        return(
            <Col>
            {Object.keys(this.state.clothes).map((key, clothInd)=>{
                return(
                    <Accordion.Item eventKey={clothInd.toString()}>
                        <Accordion.Header><h4>{this.formatClothesCategory(key)}</h4></Accordion.Header>
                        <Accordion.Body>
                        {this.state.clothes[key].map((arr)=>{
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
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
            </Col>
        )
    }
    
    render() {
        return (
        <Accordion defaultActiveKey="0" flush="true">
            {this.createGrid()}
        </Accordion>
        )
    }
}
