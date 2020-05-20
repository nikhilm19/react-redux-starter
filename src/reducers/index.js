import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Tum Hi Ho", duration: "4:05" },

    { title: "Pachtaoge", duration: "5:05" },

    { title: "Tum Hi Aana", duration: "3:05" },

    { title: "The hook up song", duration: "5:00" },
  ];
};

const selectedSongsReducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer,
});
