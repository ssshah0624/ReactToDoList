import React from 'react'
import TodoList from './TodoList.js'
import InputLine from './InputLine.js'
import axios from 'axios'

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component{
  constructor(props){
    super(props)

    this.state={
      todos:[],
    }
  }

  componentDidMount(){

    var a = this
    axios.get(dbUrl+'/all')
      .then(function(response){
        a.setState({todos: response.data})
      })
      .catch(function(error){
        console.log("error compdidmount:", error)
      })
  }

  addTodo(todo){
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

  removeTodo(id){
    // let a = dummyData;
    // a.splice(index,1);
    // dummyData = a;
    // this.setState({
    //   todos: dummyData
    // })

    var a = this;
    axios.post(dbUrl+'/remove', {id: id})
      .then(function(response){
        let index;
        let temp = a.state.todos;
        for(var i=0; i<temp.length; i++){
          if(temp[i]._id === id){
              index = i;
          }
        }

        temp.splice(index, 1);
        a.setState({
          todos: temp
        })

      })
      .catch(function(error){
        console.log('error: ', error)
      })


  }

  toggleState(id){
    // dummyData[index].completed = !dummyData[index].completed
    // this.setState({
    //   todos: dummyData
    // })

    axios.post(dbUrl+'/toggle', {id: id})
      .then( (function(response){
        let index;
        let temp = this.state.todos;
        for(var i=0; i<temp.length; i++){
          if(temp[i]._id === id){
              index = i;
          }
        }

        temp[index].completed = !temp[index].completed

        this.setState({todos: temp})
      }).bind(this) )
      .catch(function(error){
        console.log('error: ', error)
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
