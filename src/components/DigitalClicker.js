// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state={
            timesClicked: 0
        }
    }

    clickHandler = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        }

        )
    }

    render() {
        return (
        <React.Fragment>
            <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            <label>{this.state.timesClicked}</label>
        </React.Fragment>
        )
    }
}


export default DigitalClicker