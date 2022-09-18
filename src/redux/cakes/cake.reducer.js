import CakeActionTypes from "./cake.types";

const INITIAL_STATE = {
    numOfCakes: 20
};

const cakeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CakeActionTypes.BUY_CAKE:  
        return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default:
            return state;
    }
};

export default cakeReducer;