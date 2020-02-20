import React from "react";
import unsplash from "../api/unsplash";
import idgenerator from "../api/idgenerator";
import Searchbar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };

  componentDidMount(){
    const response = idgenerator.get("user/profile", {
      params: {
        request_type: "All"
      }
    });

    console.log(response);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
