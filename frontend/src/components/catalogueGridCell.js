import React, { Component } from 'react'
import {Col,Row} from "react-bootstrap"

export default class CatalogueGridCell extends Component {

    constructor(props){
        super(props)
        this.state={
            pic:this.props.pic,
        }
    }

    render() {
        return (
        <div>
            <Row>
                <Col>
                    <img className="catalogueGridImage" src={this.state.pic}/>
                </Col>
            </Row>
        </div>
        )
    }
}
