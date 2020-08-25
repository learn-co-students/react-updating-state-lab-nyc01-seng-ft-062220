import React, { Component } from 'react';

class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }
    
    clickHandler = () => {
        let timesClickedPlusOne = this.state.timesClicked + 1

        this.setState({
            timesClicked: timesClickedPlusOne
        })
    }

    render() {
        return (
            <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        );
    }
}

export default DigitalClicker;
