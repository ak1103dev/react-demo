import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.data.map((item, index) => (
            <div key={index}>
              <input type="checkbox" checked={item.isSuccess} onChange={() => this.props.toggle(item)} />
              <div style={{ display: 'inline-block' }}>{item.text}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default List
