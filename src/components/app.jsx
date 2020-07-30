import React, { Component } from "react";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";
import giphy from "giphy-api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "LCdPNT81vlv3y",
    };
  }

  search = (query) => {
    giphy("skeXRmbZubbXYOSobwx8menQnCfw65bz").search(
      {
        q: query,
        rating: "g",
        limit: 20,
      },
      (error, result) => {
        this.setState({
          gifs: result.data,
        });
      }
    );
  };

  selectGif = (id) => {
    this.setState({
      selectedGif: id,
    });
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
