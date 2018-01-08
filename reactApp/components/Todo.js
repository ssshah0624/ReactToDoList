import React from 'react'

class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <li><button type="button">X</button><span className="task">{this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}</span></li>
      </div>
    )
  }
}

export default Todo;
