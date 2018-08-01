//rce rcont
/**
 * Before that need to install package //! react-youtube
 */
import React, { Component } from "react";
import YouTube from "react-youtube";

// https://youtu.be/5hGHdETNteE
export class Youtube extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideoAt();
    console.log(event.target);
  }
  _onPlay(event) {
    console.log(event.target.getCurrentTime());
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="nLF0n9SACd4"
        opts={opts}
        onReady={this._onReady}
        onPlay={this._onPlay}
      />
    );
  }
}

export default Youtube;
