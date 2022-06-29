import React from "react"
import ContentLoader from "react-content-loader"



function VideoPlaceholder(props) {
  let placeholderWidth = 16 * props.scale;
  let placeholderHeight = 9 * props.scale;

  return (
    <>
      <ContentLoader
        className="loader"
        speed={1}
        width={placeholderWidth}
        height={placeholderHeight}
        viewBox="0 0 {placeholderWidth} {placeholderHeight}"
        backgroundColor="#80e5b9"
        foregroundColor="#34a8b7"
        title={props.name}
        
        {...props}>

        <rect 
        x="0" y="0" rx="4" ry="4" 
        width={placeholderWidth} 
        height={placeholderHeight}
        />

      </ContentLoader>
      
    </>
  )
}

VideoPlaceholder.defaultProps = {
  scale: "18"
}

export default VideoPlaceholder