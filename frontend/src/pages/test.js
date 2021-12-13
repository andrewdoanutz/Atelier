import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import s1 from "../images/shirt1.jpeg"
import s2 from "../images/shirt2.jpeg"
import s3 from "../images/shirt3.jpeg"
import s4 from "../images/shirt4.jpeg"
import s5 from "../images/shirt5.jpeg"
import s6 from "../images/shirt6.jpeg"

export default class TestAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
          getMessage: "didnt work"
        }
      }
    
    componentDidMount(){
      var cookies = new Cookies()
        axios.post('http://localhost:5000/api/db/saveimage', {email: cookies.get("email"), files: [s1, s2, s3, s4, s5, s6]}).then(response => {
            console.log("SUCCESS", response)
            this.setState({getMessage: response})
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
      var files =[s1, s2, s3, s4, s5, s6]
        return (
        <>
        <p>React + Flask Tutorial</p>
        <div>{this.state.getMessage.status === 200 ? 
          <div>{
            files.map(file =>{
              return(
                <img src={file}/>
              )
            })
            }</div>
          :
          <h3>LOADING</h3>}</div>
            
        </>
        )
    }
}
