import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", authenticated: "" };
  }

  callAPI = async () => {
    const response = await axios.get("http://localhost:3000/testAPI");
    console.log(response.data);

    this.setState({ apiResponse: response.data });
  };

  callAPI2 = async () => {
    const response = await axios.post("http://localhost:3000/signup", {
      email: "iluvpie@email.com",
      firstName: "Hi",
    });
    console.log(response);

    if (response.status === 200)
      this.setState({ authenticated: "authenticated" });
  };

  componentDidMount() {
    this.callAPI();
    this.callAPI2();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="Authenticated-status">{this.state.authenticated}</p>
      </div>
    );
  }
}

export default App;
