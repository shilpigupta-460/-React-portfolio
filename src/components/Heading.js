import React from "react";

function Heading(props) {
  const { message } = props;
  return (
    < div className="heading">
     <h1 style={ { margin: "3rem 1rem" } }> {message}</h1>
    </div>
  );
}

export default Heading;