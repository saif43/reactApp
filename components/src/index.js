import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./ComentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        name="Sam"
        postingTime="Today at 4.30pm"
        comment="Good Job !!"
        image={faker.image.avatar()}
      />
      <CommentDetail
        name="Alex"
        postingTime="Yesterday at 4.30pm"
        comment="Best of luck."
        image={faker.image.avatar()}
      />
      <CommentDetail
        name="Jane"
        postingTime="3 days ago"
        comment="Hope to see you soon."
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
