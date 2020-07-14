import React, { Component } from "react";
import Child from "./Child";
import Pure from "./Pure";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    console.log("Constructor");

    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate");
  }

 

  render() {
    console.log("render");
    return (
      <div>
        <h1 className="text-center">LifeCycle</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ name: "CyberSoft" })}
        >
          Click
        </button>
        <button className="btn btn-success" onClick={()=> this.forceUpdate()}>Force update</button>
        {this.state.name !== "CyberSoft" ? (
          <Child name={this.state.name} />
        ) : null}

        <Pure name="ABC"/>
      </div>
    );
  }
}
