import { combineReducers } from 'redux';
import counter,{actions as counterActions} from "./counter.js";

export const rootReducer = combineReducers({
    counter: counter
});

export const actions = {
    counterActions
}
