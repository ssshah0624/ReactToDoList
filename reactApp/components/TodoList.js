import React from 'react'
import Todo from './Todo.js'

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
        {this.props.todos.map((task, index) => (<Todo task={task.taskText} completed={task.completed} xClick={() => this.props.todoXClick(index)} toggle={() => this.props.toggle(index)}/>))}
      </ul>
    )
  }
}

export default TodoList;
