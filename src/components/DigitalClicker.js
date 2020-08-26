import React from 'react';

class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Digital Clicker</h1>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
        );
    }
}

export default DigitalClicker;
