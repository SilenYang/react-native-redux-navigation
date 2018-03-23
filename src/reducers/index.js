import { combineReducers } from 'redux';
import nav from './navReducers';

//you can add  millions of routes here!
const rootReducer = combineReducers({
    nav
});
export default rootReducer;
