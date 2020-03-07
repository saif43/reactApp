import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

export class PostList extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div>Postlist</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
