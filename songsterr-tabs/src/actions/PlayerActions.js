import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getPlayerData = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_DATA });
    axios.get("https://www.balldontlie.io/api/v1/players")
      .then(res => {
          console.log("Res", res)
          dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data});
      })
      .catch(err => {
          console.log("err", err)
        //   dispatch({ type: FETCH_DATA_FAILURE, payload: err })
      });
  }; 
};