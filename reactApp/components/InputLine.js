import React from 'react'

class InputLine extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      typedText:'',
    }
  }

  handleTyping(event){
    this.setState({
      typedText: event.target.value,
    });
  }

  handleSubmit(){
    this.props.submit(this.state.typedText);
    this.setState({
      typedText:'',
    })
  }

  render(){
    return(
      <div className="inputLine">
          <input type='text' placeholder='task' onChange={(event) => this.handleTyping(event)} val={this.state.typedText}/>
          <button type='submit' onClick={() => this.handleSubmit()}>Add todo</button>
      </div>
    )
  }
}


export default InputLine;
