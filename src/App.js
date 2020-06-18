import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataBinding from './DataBinding/DataBinding';


class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <BaiTapDanLayout /> */}
       <DataBinding />
      </div>
    );
  }
}

export default App;
