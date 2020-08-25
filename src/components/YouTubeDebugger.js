// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    bitrateHandler = () => {
        let newValue = 12
        this.setState({
            settings: {...this.state.settings, bitrate: newValue}
        }, () => console.log(this.state))
    }

    resolutionHandler = () => {
        let newValue = `720p`
        this.setState({
            settings: {...this.state.settings, video: {...this.state.settings.video, resolution: newValue}}
        }, () => console.log(this.state))
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitrateHandler}>Bitrate</button>
                <button className="resolution" onClick={this.resolutionHandler}>Res</button>
            </div>
        );
    }
}

export default YouTubeDebugger;
