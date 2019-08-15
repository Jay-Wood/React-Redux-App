import React from "react";

const Player = props => {
  return (
    <div className="player-card">      
      <h3>{props.firstname} {props.lastname}</h3>
      <h4>Position: {props.position}</h4>
      <p>Height: {props.heightfeet}' {props.heightinches}"</p>
      <p>Weight: {props.weight}</p>
    </div>
  );
};


export default Player;