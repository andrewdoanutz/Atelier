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
        axios.post('http://localhost:5000/api/db/getuser', {email: "test"}).then(response => {
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
          <div>{this.state.getMessage.data.user}</div>
          :
          <h3>LOADING</h3>}</div>
            
        </>
        )
    }
}
