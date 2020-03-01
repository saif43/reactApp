import { combineReducers } from "redux";

// reducers

export const songListReducer = () => {
  return [
    { title: "A123", duration: 1.12 },
    { title: "B123", duration: 2.14 },
    { title: "C123", duration: 3.52 },
    { title: "D123", duration: 4.12 }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  selectedSong: selectedSongReducer,
  songList: songListReducer
});
