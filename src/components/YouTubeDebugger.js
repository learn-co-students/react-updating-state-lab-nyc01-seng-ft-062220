// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    clickHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    clickHandler2 = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }



    render() {
        return (
            <React.Fragment>
                <button className="bitrate" onClick={this.clickHandler}>Click2</button>
                <label>{this.state.settings.bitrate}</label>
                <button className="resolution" onClick={this.clickHandler2}>Click3</button>
                <label>{this.state.settings.video.resolution}</label>
            </React.Fragment>
        )
    }
}

export default YouTubeDebugger
