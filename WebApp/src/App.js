import React, { Component } from "react";
import About from "./About";

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrayAddress: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8084/api/about")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          arrayAddress: data,
        });
        console.log(data);
      });
  }

  render() {
    const aboutComponents = this.state.arrayAddress.map((about) => (
      <About contact={about} key={about._id} />
    ));
    return (
      <div>
        Customer list:
        {aboutComponents}
      </div>
    );
  }
}

export default App;
