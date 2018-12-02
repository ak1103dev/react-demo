import React, { Component } from 'react'
import Button from './Button'

class LifeCycle extends Component {
  state = {
    time: 0,
    isStart: false
  }

  componentDidMount() {
    console.log('did mount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('state', this.state)
    console.log('next state', nextState)
    if (!this.state.isStart && nextState.isStart) {
      return true
    }
    return false
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('did update')
    this.setState((state) => {
      return {
        time: state.time + 1
      }
    })
  }

  componentWillUnmount() {
    alert('close window')
  }

  startTime = () => {
    this.setState({ isStart: true })
  }

  render() {
    console.log('render')
    return (
      <div>
        <div>{this.state.time}</div>
        <Button color="green" onClick={this.startTime}>Start</Button>
        <Button color="red">Stop</Button>
      </div>
    )
  }
}

export default LifeCycle
