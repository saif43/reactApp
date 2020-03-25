import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (user) {
      return <div className="header">{user.name}</div>;
    }

    return <div className="header">Loading</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.find(user => user.id === ownProps.userid)
  };
};

export default connect(mapStateToProps)(UserHeader);
