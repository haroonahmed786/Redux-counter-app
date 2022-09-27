import { INCREMENT,DECREMENT } from "../actions/types";
const initialState = 0;
const changeTheNumber = ( state = initialState,actions) => {
    switch(actions.type){
        case INCREMENT : return state + 1;

        case DECREMENT : return state - 1;
        default: return state;
    }
}
export default changeTheNumber;