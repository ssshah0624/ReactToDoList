import React from 'react'
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'
import axios from 'axios'

const dbUrl = "http://localhost:3000/db";

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

  addTodo(todo){
    // if(todo){
    //   dummyData = dummyData.concat({taskText: todo, completed: false})
    //   this.setState({
    //     todos: dummyData
    //   })
    // }
    var a = this
    if(todo){
      axios.post(dbUrl + "/add", {taskText: todo})
        .then(function (response) {
          // Do whatever you want with the request's response in here
          console.log("response -> ", response);
          a.setState({ todos: a.state.todos.concat(Object.assign({}, response.data, {taskText: response.data.task}))})
        })
        .catch(function (error) {
          // Do whatever you want in the event of an error in here
          console.log("error -> ", error);
        });
      }
  }

  removeTodo(index){
    let a = dummyData;
    a.splice(index,1);
    dummyData = a;
    this.setState({
      todos: dummyData
    })
  }

  toggleState(index){
    dummyData[index].completed = !dummyData[index].completed
    this.setState({
      todos: dummyData
    })
  }

  render(){
    return(
      <div>
        <InputLine submit={(i) => this.addTodo(i)}/>
        <TodoList todos={this.state.todos} todoXClick={(i) => (this.removeTodo(i))} toggle={(i) => (this.toggleState(i))}/>
      </div>
    )
  }
}

export default TodoApp;
