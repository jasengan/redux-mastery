import CakeActionTypes from './cake.type';

//action creator: buyCake... to trigger the buy cake action
export const buyCake = cakeCount => ({
    type: CakeActionTypes.BUY_CAKE,
    payload: cakeCount
});