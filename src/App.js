import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Distance:0
    };

  }

  componentDidMount() {
   
    const rootRef = firebase.database().ref().child('Distance');
    const distRef = rootRef.child('Distance');
    rootRef.on('value', snap => {
      this.setState({
        Distance: snap.val()
      
      });
      
    });
    
  }

  render(){
    return(
     
      <div className="App">
      
        <h1> RealTime Distance: {this.state.Distance}cm</h1>
 
      </div>

    
  
    )
}
}

export default App;
