const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {//Action
    return {
        type: BUY_CAKE,
        info: 'buy cake action'
    }
}
let intialState = {// state (should be a object)
    numberOfCakes: 10
}

const cakeReducer = (state = intialState, action) => {
    //console.log("reducer called"+JSON.stringify(this));
    if (action.type === 'BUY_CAKE') {// Better use switch instead if condition in case of multiple actions
        return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
    } else {
        return state;
    }


}
const rootreducer = combineReducers({ cake: cakeReducer });// use incase of multiple reducers.

const store = createStore(rootreducer);

console.log("intial state=>" + JSON.stringify(store.getState()));

const unsubscribe = store.subscribe(() => {
    console.log("updated state =>" + JSON.stringify(store.getState()));
});
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();