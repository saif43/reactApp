import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./ComentDetail";
import ApprovalCard from "./ApprovalCard";
import Service from "./Service";

const App = () => {
  return (
    <div className="ui container comments">
      <PlaceholderSegment>
        <ApprovalCard>
          <CommentDetail
            name="Sam"
            postingTime="Today at 4.30pm"
            comment="Good Job !!"
            image={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name="Alex"
            postingTime="Yesterday at 4.30pm"
            comment="Best of luck."
            image={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name="Jane"
            postingTime="3 days ago"
            comment="Hope to see you soon."
            image={faker.image.avatar()}
          />
        </ApprovalCard>
      </PlaceholderSegment>

      <PlaceholderSegment>
        <Service />
      </PlaceholderSegment>
    </div>
  );
};

const PlaceholderSegment = props => {
  return <div className="ui placeholder segment">{props.children}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
