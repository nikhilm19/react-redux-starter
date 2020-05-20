import React from "react";
import { selectSong } from "../actions";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div
          className="ml-8 mt-8 item flex flex-row bg-gray-200 justify-between mb-8 items-center"
          key={song.title}
        >
          <div className="content ml-8">{song.title}</div>
          <div className="button">
            <button
              onClick={() => this.props.selectSong(song)}
              className="rounded hover:bg-blue-700 shadow text-white bg-indigo-600 p-4"
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="w-1/2 ">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
