import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import { navMiddleware } from './redux';

// 定义中间件数组，默认包括thunk middleware
const middlewares = [navMiddleware, thunk];

// 只有开发环境才使用logger middleware
if (__DEV__) {
    middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
