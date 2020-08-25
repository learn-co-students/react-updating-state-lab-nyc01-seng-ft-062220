import React from "react"

class DigitalClicker extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      timesClicked: 0
    }

  }

  clickHandler = () =>{
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
