import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/VideoNodeComponent.css';

function Video(videoAdress) {
  const { nodeDepth = 0, nodeWidth = 1 } = videoAdress;
  const nodePath = `/media/hand-${nodeDepth}-${nodeWidth}.mp4`;

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={nodePath}
        width="100%"
        height="100%"
        controls
        loop
        muted
      />
    </div>
  );
}

export default Video;
