import { isArray } from 'holderjs';
import { number } from 'prop-types';
import React from 'react';
import { Outlet } from 'react-router-dom';
import PlayButton from '../components/PlayButtonComponent';
import Video from '../components/VideoNodeComponent';
import VideoPlaceholder from '../components/VideoPlaceholder';

function QueComponent(props) {
  let childIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let childClassesOrder = ["card-front", "card-front", "card-front", "que-back", "que-mid", "que-front", "que-front", "que-mid", "que-back", "que-hidden", "que-hidden"];
  let str = props.queClassName;

  let que = "";
  if (props.queClassName != "card-front") {
    que = "que ";
  }

  return (
    <div className={que + props.queClassName}>
      {childIndexes.map(index => {
        if (childClassesOrder[index] == props.queClassName)
          return (
            <div className='card' key={index}>
              <VideoPlaceholder key={index} name={index} />
            </div>
          )
      })}
    </div>)
}

export default function Field() {
  let stackClasses = ["que-back", "que-mid", "que-front", "card-front"];
  let cardClassName = "card";
  let currClassName = "";

  return (
    <main>
      <Outlet />
      <div className='border'>
        <div className="child-slider">
          <div className='card-stack'>
            {
              stackClasses.map(cardClass => {
                return (
                  <QueComponent key={cardClass} queClassName={cardClass} />
                )
              })
            }

          </div>

        </div>
      </div>
      {/* <PlayButton className="button" /> */}
      {/* <navButton /> */}
    </main>
  );
}
