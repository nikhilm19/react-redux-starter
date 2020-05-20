import React from "react";
import { selectSong } from "../actions";

import SongList from "./SongList";
import SongDetail from "./SongDetail";
function App() {
  return (
    <div className="flex flex-row ml-4 container shadow-md  border-b w-9/12">
      <SongList />
      <SongDetail />
    </div>
  );
}

export default App;
