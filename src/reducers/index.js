import { combineReducers } from 'redux';
import nav from './navReducers';
import user from './user';

//you can add  millions of routes here!
const rootReducer = combineReducers({
    nav,
    user
});
export default rootReducer;
