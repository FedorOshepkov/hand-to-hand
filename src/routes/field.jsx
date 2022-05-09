import React from 'react';
import { Outlet } from 'react-router-dom';
import PlayButton from '../components/PlayButtonComponent';
import Video from '../components/VideoNodeComponent';

export default function Field() {
  return (
    <main>
      <Outlet />
      <div className="sorter">
        <Video nDepth="0" nWidth="1" />
        <Video nDepth="1" nWidth="1" />
        <Video nDepth="2" nWidth="1" />
      </div>
      <PlayButton className="button" />
      <navButton />
    </main>
  );
}
