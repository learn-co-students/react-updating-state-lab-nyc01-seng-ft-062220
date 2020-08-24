// Code DigitalClicker Component Here
import React from 'react'
export class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }
    clickHandler = () => {
        const newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })
    }
    render() {
        return (
            <div>
               <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
export default DigitalClicker
