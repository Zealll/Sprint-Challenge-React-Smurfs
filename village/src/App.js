import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error:'',
    };
  }

  componentDidMount(){
    Axios
    .get('http://localhost:3333/smurfs')
    .then(res => {this.setState({smurfs: res.data})})
    .catch(err => {this.setState({error: err})})
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className='top'>
        <h1>Welcome to Number One Smurf Page on the Web</h1>
          <nav>
            <NavLink className='a' to='/smurf-form'>Add a Smurf</NavLink>
            <NavLink className='a' to='/'>Home</NavLink>

          </nav>
        </div>
        <Route path='/smurf-form' render={() => <SmurfForm />}/>
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
