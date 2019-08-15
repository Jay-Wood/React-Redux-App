import { 
    FETCHING_DATA, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILURE 
  } from "../actions";
  
  const initialState = {
    players: [],
    isLoading: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_DATA:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case FETCH_DATA_SUCCESS: 
        return {
          ...state, 
          isLoading: false, 
          players: action.payload, 
          error: ""
      }
      case FETCH_DATA_FAILURE: 
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  };
  