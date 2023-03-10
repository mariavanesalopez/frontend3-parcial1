import React from "react";

const Card = ({name, lastName}) => {
  return (
    <div style={{background:"blue", fontSize:"0.7rem",borderRadius:"0.5rem", margin:"0.5rem", padding:"0.5rem"}}>
      <h4>🙂Hola!</h4>
      <h4>{name} {lastName} </h4>
    </div>
  );
};

export default Card;