import React, { Component } from 'react';
import './firebase'
import Featured from './featured'
import firebase from 'firebase'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            home:''
        }
        firebase.database().ref('home')
        .on('value', (snapshot) => {
          this.setState({home: snapshot.val()})
      })

    } 

    componentDidMount(){

    }

    render(){
        return (
          <Featured slides={this.state.home.slider}/>
        )
    }
}

export default Home