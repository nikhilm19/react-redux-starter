import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log(props);
  return (
    <div>
      {props.song !== null ? (
        <div>
          <h2 className="text-5xl text-blue-700">Song Details 🎵</h2>
          Title:<h1 className="text-4xl text-blue-600">{props.song.title}</h1>
          <br></br>
          Duration ⏱️:{" "}
          <p className="text-2xl text-blue-500">{props.song.duration}</p>
        </div>
      ) : (
        "Please select a song 🖱️"
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong, //from reducer
  };
};
export default connect(mapStateToProps)(SongDetail);
