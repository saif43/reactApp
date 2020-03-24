import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "./../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.getUser(this.props.userid);
  }

  render() {
    const { user } = this.props;

    if (user) {
      return <div className="header">{user.name}</div>;
    }

    return <div className="header">Not found</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.find(user => user.id === ownProps.userid)
  };
};

export default connect(mapStateToProps, { getUser })(UserHeader);
