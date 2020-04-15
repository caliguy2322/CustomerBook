import React from "react";

function About(props) {
  return (
    <div>
      <h3 style={{ display: !props.contact.name && "none" }}>
        Name: {props.contact.name}
      </h3>
      <h3 style={{ display: !props.contact.balance && "none" }}>
        Balance: {props.contact.balance}
      </h3>
      <h3 style={{ display: !props.contact.phone && "none" }}>
        Phone: {props.contact.phone}
      </h3>
      <h3 style={{ color: !props.contact.phone && "#888888" }}>
        Address: {props.contact.address}
      </h3>
      <hr />
    </div>
  );
}

export default About;
