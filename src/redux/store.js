import { createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootreducer from "./rootreducer";

//middlewares: an array of all needed middlewares
const middlewares =[logger];

//creating the redux store: takes a reducer as well as middleware
const store = createStore(rootreducer, applyMiddleware( ...middlewares ));

export default store;