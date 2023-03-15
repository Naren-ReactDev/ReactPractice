import { BUY_CAKE } from "./cakeActionTypes";
const intialState = {
    numberOfCakes: 10
}
const CakeReducer = (state=intialState, action) => {
    console.log(JSON.stringify(action))
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state;
    }   
}
export default CakeReducer