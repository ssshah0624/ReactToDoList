import React from 'react'

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="inputLine">
          <input type='text' placeholder='task'/>
          <input type='submit' value="Add todo" onClick={() => this.props.submit("test task")}/>
      </div>
    )
  }
}


export default InputLine;
