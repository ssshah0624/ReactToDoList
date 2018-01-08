import React from 'react'
import ReactDOM from 'react-dom'

let dummyData = [{ taskText: "Pick up Maria money", completed: true }, { taskText: "Text Jesse about SEO content writer", completed: true }, { taskText: "Report back on tech interview", completed: false }]

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="inputLine">
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='task'/>
          <input type='submit' value="Add todo"/>
        </form>
    </div>
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
        <li><button type="button">X</button><span className="task">{this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}</span></li>
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
        {this.props.todos.map((task) => (<Todo task={task.taskText} completed={task.completed}/>))}
      </ul>
    )
  }
}

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


ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
