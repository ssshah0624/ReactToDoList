import React from 'react'
import Todo from './Todo.js'

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
        {this.props.todos.map((task, index) => (<Todo key={task._id} task={task.task} completed={task.completed} xClick={() => this.props.todoXClick(task._id)} toggle={() => this.props.toggle(task._id)}/>))}
      </ul>
    )
  }
}

export default TodoList;
