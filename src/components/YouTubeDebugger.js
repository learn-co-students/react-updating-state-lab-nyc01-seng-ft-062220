import React from 'react';

class YouTubeDebugger extends React.Component{
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
    };

    bitrateHandler = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        },() => console.log(this.state))
    };

    resolutionHandler = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                ...this.state.video,
                resolution: '720p'
                }
            }
        },() => console.log(this.state))        
    };


    render(){
        return(
            <React.Fragment>
                <button onClick={this.bitrateHandler} className="bitrate">Bitrate</button>
                <button onClick={this.resolutionHandler} className="resolution">Resolution</button>
            </React.Fragment>
        )
    }



}

export default YouTubeDebugger;