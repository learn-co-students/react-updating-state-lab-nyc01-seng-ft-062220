// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor(){
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
    //had to look up the solution to try to better understand spread operator and nested state
    bitrateHandler = () => {
        this.setState({settings: {...this.state.settings, bitrate:12}})

    }

    resolutionHandler = () => {
        this.setState(
            {settings: {...this.state.settings, video: {resolution: '720p'}}}
        )


    }

    render() {
        return (
        <div>
            <button className="bitrate" onClick={this.bitrateHandler}>Bitrate Button</button>
            <button className="resolution" onClick={this.resolutionHandler} >Resolution Button</button>
        </div>
        )
    }

}

export default YouTubeDebugger