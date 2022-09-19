import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/cake.action';

//making use of the useSelector Hook. useSelector works like mapStateToProps

/*useSelector: It's a selector function that accepts the state as the parameter, and
returns a value or an object*/

const HooksCake = () => {
    //getting the state value from use selector and storing it
    const noOfCakes = useSelector(state => state.noOfCakes);
    //creating the dispatch with usedispatch hook
    const dispatch = useDispatch();
  return (
    <div>
        <h2> Number of Cakes: {noOfCakes} </h2>
        <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
};

export default HooksCake