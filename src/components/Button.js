import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button style={{ fontSize: '20px', backgroundColor: this.props.color }} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
