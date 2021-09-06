import React, { Component } from 'react'
import axios from 'axios'

export default class TestAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
          getMessage: "didnt work"
        }
      }
    
    componentDidMount(){
        axios.get('http://localhost:5000/flask/test').then(response => {
            console.log("SUCCESS", response)
            this.setState({getMessage: response})
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
        <>
        <p>React + Flask Tutorial</p>
        <div>{this.state.getMessage.status === 200 ? 
          <h3>{this.state.getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
            
        </>
        )
    }
}
