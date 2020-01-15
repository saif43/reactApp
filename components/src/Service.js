import React from "react";

const Service = () => {
  return (
    <div>
      <Message
        servicename="Java"
        servicedetail="Something is better than nothing"
      />
      <Message
        servicename="Kotlin"
        servicedetail="Something is better than nothing"
      />
      <Message
        servicename="Javascript"
        servicedetail="Something is better than nothing"
      />
    </div>
  );
};

const Message = props => {
  return (
    <div className="ui message">
      <div className="header">{props.servicename}</div>
      <p>{props.servicedetail}</p>
    </div>
  );
};

export default Service;
