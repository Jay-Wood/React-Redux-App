import React from "react";

const Player = props => {
  return (
    <div className="player-card">      
      <h3>{props.firstname} {props.lastname}</h3>
      <h4>Position: {props.position}</h4>
      {(props.heightfeet && props.heightinches) ? (
      <p>Height: {props.heightfeet}' {props.heightinches}" </p>) :
      <p> Height not listed </p>}
      {props.weight ? ( 
        <p>Weight: {props.weight}</p>
      ) : 
      <p>Weight not listed</p>}
    </div>
  );
};


export default Player;