import React, { Component } from 'react';
import RealTimeComp from './components/RealTime'
import Button from './components/Button'

class App extends Component {
  state = {
    count: 0
  }

  addNum = () => {
    // this.setState({ count: this.state.count + 1 })
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  clickButton = () => {
    alert('click button')
  }

  render() {
    return (
      <div>
        <RealTimeComp />
        <Button color="green" onClick={this.clickButton}>Success</Button>
        <div>
          {this.state.count}
          <Button color="yellow" onClick={this.addNum}>Add</Button>
        </div>
      </div>
    );
  }
}

export default App;
