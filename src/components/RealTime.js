import React, { Component } from 'react';

class RealTime extends Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    // setInterval(() => this.setState({ date: new Date().toLocaleTimeString() }), 1000);
    const updateDate = () => this.setState({ date: new Date().toLocaleTimeString() })
    setInterval(updateDate, 1000);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
    );
  }
}

export class Hello extends Component {
  render() {
    return (
      <div>Hello Wolrd llllllll</div>
    )
  }
}

export function Hi () {
  return (
    <div>Hi</div>
  )
}

export default RealTime
