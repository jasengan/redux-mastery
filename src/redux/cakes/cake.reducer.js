import { buyCake } from "./cake.action";
import CakeActionTypes from "./cake.type";

//setting the state
const INITIAL_STATE = {
    NoOfCakes: 20
};

//cake reducer: 
const cakeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CakeActionTypes.BUY_CAKE:
            return{
                ...state,
                NoOfCakes: buyCake(state.NoOfCakes, action.payload)
            }
        default:
            return state;
    }
};

export default cakeReducer;