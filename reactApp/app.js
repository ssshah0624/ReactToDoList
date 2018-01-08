import React from 'react'
import ReactDOM from 'react-dom'

let dummyData = [{ taskText: "Pick up Maria money", completed: true }, { taskText: "Text Jesse about SEO content writer", completed: true }, { taskText: "Report back on tech interview", completed: false }]

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='task'/>
        <input type='submit' value="Add todo"/>
      </form>
    )
  }
}


class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <li><button type="button">X</button>{this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}</li>
      </div>
    )
  }
}


class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
        {dummyData.map((task) => (<Todo task={task.taskText} completed={task.completed}/>))}
      </ul>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <InputLine/>
        <TodoList/>
      </div>
    )
  }
}


ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
