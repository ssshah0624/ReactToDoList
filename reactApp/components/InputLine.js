import React from 'react'

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


export default InputLine;
