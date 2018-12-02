import React, { Component } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import List from './components/List'

class App extends Component {
  state = {
    text: '',
    taskList: [{
      text: 'Do Homework',
      isSuccess: true
    }, {
      text: 'Watch TV',
      isSuccess: true
    }, {
      text: 'Play Game',
      isSuccess: false
    }],
  }

  onChangeText = (event) => {
    this.setState({ text: event.target.value })
  }

  addTask = () => {
    this.setState((state) => {
      if (state.text) {
        return {
          taskList: [...state.taskList, { text: state.text }],
          text: '',
        }
      }
      return {}
    })
  }

  toggle = (item) => {
    console.log('index', item)
    this.setState((state) => {
      return {
        taskList: state.taskList.map((task) => {
          if (task.text === item.text) {
            return {
              ...task,
              isSuccess: !task.isSuccess,
            }
          }
          return task
        })
      }
    })
  }

  render() {
    const success = this.state.taskList.filter((item) => item.isSuccess)
    const unsuccess = this.state.taskList.filter((item) => !item.isSuccess)
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>To Do List</h1>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <Input value={this.state.text} onChange={this.onChangeText} />
          <Button onClick={this.addTask}>Add Task</Button>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h3>To Do</h3>
            <List data={unsuccess} toggle={this.toggle} />
          </div>
          <div style={{ flex: 1 }}>
            <h3>Done</h3>
            <List data={success} toggle={this.toggle} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
