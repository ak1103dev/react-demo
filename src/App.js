import React, { Component } from 'react';
import RealTimeComp, { Hello, Hi } from './components/RealTime'

class App extends Component {
  render() {
    return (
      <div>
        <RealTimeComp />
        <Hello />
        <Hi />
      </div>
    );
  }
}

export default App;
