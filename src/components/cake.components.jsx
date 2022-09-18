import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cakes/cake.action';

const Cake = ({noOfCakes, buyCake}) => (
    <div>
        <h2>Number of cakes: { noOfCakes }</h2>
        <button onClick={buyCake}>Buy Cake</button>
    </div>

);

//mapstateToProps
const mapStateToProps = state => {
    return {
        noOfCakes: state.numOfCakes
    }

};

//mapDispatcchToProps
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);