import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {data: null};
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  componentDidMount() {
    this.callBackendAPI()
    .then(res => this.setState({data: res.express}))
    .catch(err => console.log(err));
  }
  
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = response.json();

    if(response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-intro">{this.state.data}</h3>
          <h4>This msg is written in react</h4>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
