import React from "react";
import axios from "axios";
import Searchbar from "./SearchBar";
class App extends React.Component {
  async onSearchSubmit(term){
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers : {
        Authorization: 'Client-ID 673f4cb9d1f284f6b56cbaffdafd1de413b44a3a0d82cca07a79d74bbf3eacb0'
      },
    });

    console.log(response.data.results);
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
