import React from "react";

const LoadSpinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
  );
};

LoadSpinner.defaultProps = {
    message : "Loading..."
}

export default LoadSpinner;
