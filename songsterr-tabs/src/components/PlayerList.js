import React from "react";
import { connect } from "react-redux";
import PlayerCard from "./PlayerCard";
import Loader from "react-loader-spinner";
import {getPlayerData} from "../actions";


const PlayerList = props => {
  console.log("props in playerlist", props)
    return (
        <>
            <h2>Welcome to NBA Player Stats, playa!</h2>
            <button onClick={props.getPlayerData}>
                {props.isLoading ? (
                  <Loader 
                    type="tailspin"
                    color="#00BFFF"
                    height="100"
                    width="100"
                /> ) : (
                  "Get Player Data"
                )}
            </button>
            
            <div className="player-list">
              {props.players && 
                props.players.map(player => 
                  <PlayerCard 
                    key={player.id}
                    firstname={player.first_name}
                    lastname={player.last_name}
                    heightfeet={player.height_feet}
                    heightinches={player.height_inches}
                    weight={player.weight_pounts}
                    position={player.position}  
                  />
              )}
            </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      players: state.players
    };
  };
  
  export default connect(
    mapStateToProps,
    {getPlayerData}
  )(PlayerList);