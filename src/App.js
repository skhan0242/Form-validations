import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const initialState = {
      name:'',
      email:'',
      nameError:'',
      emailError:''
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  validate(){
    let nameError = '';
    let emailError = '';

    if(this.state.name == ""){
      nameError = 'Name is Required';
    }
    if(!this.state.email.includes("@") || !this.state.email.includes(".")){
      emailError = 'Enter correct email'
    }

    if(nameError || emailError){
      this.setState({
        nameError,
        emailError
      })
      return false;
    }
    return true;
  }

  handleSubmit(event){
    event.preventDefault();
    let isValid = this.validate();
    if(isValid){
      console.log(this.state);
    this.setState(initialState)
    }
  }

    render() {
    return (
      <div className="App">
        <h1>Form Validations</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
            <p className="error">{this.state.nameError}</p>
          </div>
          <div>
            <label>Email:</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
            <p className="error">{this.state.emailError}</p>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
