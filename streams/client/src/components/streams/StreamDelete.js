import React from "react";
import Modal from "../Modal";
import history from "./../../history";

const onDismiss = () => {
  history.push("/");
};

const actions = (
  <React.Fragment>
    <button className="ui primary button">Delete</button>
    <button onClick={onDismiss} className="ui button">
      Cancel
    </button>
  </React.Fragment>
);

const StreamDelete = () => {
  return (
    <div>
      <div>StreamDelete</div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={onDismiss}
      />
    </div>
  );
};

export default StreamDelete;
