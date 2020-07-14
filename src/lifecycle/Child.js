import React, { Component } from "react";

export default class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === "Cybersoft") {
      return true;
    }
    return false;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
      console.log("UNSAFE_componentWillReceiveProps", nextProps);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
      if(nextProps.name === "Cybersoft") {
          return {
              currentName: nextProps.name
          }
      }
      return null
  }

  componentDidUpdate() {
      console.log("Child: componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
}

  render() {
    console.log("Child render");
    console.log(this.state)
    return <div>{this.props.name}</div>;
  }
}
