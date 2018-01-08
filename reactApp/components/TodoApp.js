import React from 'react'
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'


let dummyData = [{ taskText: "Pick up Maria money", completed: true }, { taskText: "Text Jesse about SEO content writer", completed: true }, { taskText: "Report back on tech interview", completed: false }]

class TodoApp extends React.Component{
  constructor(props){
    super(props)

    this.state={
      todos:[],
    }
  }

  componentDidMount(){
    this.setState({
      todos: dummyData,
    });
  }

  render(){
    return(
      <div>
        <InputLine/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
