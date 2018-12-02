import React, { Component } from 'react'

class Input extends Component {
  render() {
    const style = {
      fontSize: 20,
      marginRight: 10
    }
    return (
      <input style={style} {...this.props} />
    )
  }
}

export default Input
