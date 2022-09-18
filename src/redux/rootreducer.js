import { combineReducers } from "redux";
import cakeReducer from "./cakes/cake.reducer";

//combine reducer is a function that accepts a list of reducers as an object
export default combineReducers({
    cake: cakeReducer
})