// Code YouTubeDebugger Component Here
import React from 'react'


export class YouTubeDebugger extends React.Component {
    
    constructor(){
        super()
        this.state={
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    bitrateClickHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    };

    resolutionClickHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
        }
     });
    } 

    render() {
        return (
            <div>
              <button onClick={this.bitrateClickHandler} className="bitrate">Bitrate</button>
              <button onClick={this.resolutionClickHandler}className="resolution">Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger
