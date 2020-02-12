import React from "react";

class SearchBar extends React.Component {
  onChangeInput(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input type="text" name="" id="" onChange={this.onChangeInput} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
