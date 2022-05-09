import React from 'react';
import ReactPlayer from 'react-player';
import './VideoNodeComponent.css';

function Video(videoAdress) {
  const { nodeDepth = 0, nodeWidth = 1 } = videoAdress;
  const nodePath = `/media/hand-${nodeDepth}-${nodeWidth}.mp4`;

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={nodePath}
        controls
        loop
        muted
      />
    </div>
  );
}

export default Video;
