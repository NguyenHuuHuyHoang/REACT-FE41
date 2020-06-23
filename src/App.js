import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './DataBinding/EventBinding';
import State from './State/State';
import ExState1 from './State/ExState1';
import ExState2 from './State/ExState2';
import RenderWithMap from './DataBinding/RenderWithMap/RenderWithMap';


class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <EventBinding /> */}
       {/* <State /> */}
       {/* <ExState1 /> */}
       {/* <ExState2 /> */}
       <RenderWithMap />
      </div>
    );
  }
}

export default App;
