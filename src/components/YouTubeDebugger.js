// Code YouTubeDebugger Component Here
import React from "react"



class YouTubeDebugger extends React.Component{

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


    bitrateClicker = () =>{
    this.setState({...this.state,
        settings:{... this.state.settings,bitrate:12}
    })

    }

    resolutionClicker = () =>{
        this.setState({ ...this.state,
            settings:{... this.state.settings,
            video: {resolution: '720p'}}
        })

    }



    render(){
        return(


            <div>
                <button  className = "bitrate" onClick={this.bitrateClicker}> bitrate </button>
                <button className = "resolution" onClick = {this.resolutionClicker}> resolution </button>
            </div>

        )
    }



}

export default YouTubeDebugger