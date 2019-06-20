import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
    this.props.addSmurf(event, this.state.smurf)
    this.props.history.push('/')
  }

  handleInputChange = e => {
    e.persist()
    this.setState(prevState => ({
      smurf:{
        ...prevState.smurf,
        [e.target.name]: e.target.value
         }
      }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            type='number'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            type='number'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
