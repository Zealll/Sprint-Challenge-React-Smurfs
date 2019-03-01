import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        name: '',
        age: '',
        height: ''
      
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      
        name: '',
        age: '',
        height: ''
      
    });
    this.props.addSmurf(event, this.state)
  }

  handleInputChange = e => {
    e.persist()
    this.setState(prevState => ({
      
        ...prevState,
        [e.target.name]: e.target.value
         
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
            value={this.state.name}
            name="name"
          />
          <input
            type='number'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type='number'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
