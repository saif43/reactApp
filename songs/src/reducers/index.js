import { combineReducers } from "redux";

export const songReducer = () => {
  return [
    { title: "A1", duration: "1.12" },
    { title: "B1", duration: "2.12" },
    { title: "C1", duration: "3.12" },
    { title: "D1", duration: "4.12" }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
