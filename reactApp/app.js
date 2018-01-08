import React from 'react'
import ReactDOM from 'react-dom'

let dummyData = ["Pick up Maria money", "Text Jesse about SEO content writer", "Report back on tech interview"]


class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <li><button type="button">X</button>{this.props.task}</li>
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
        {dummyData.map((task) => (<Todo task={task}/>))}
      </ul>
    )
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
