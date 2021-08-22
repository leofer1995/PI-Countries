import {createStore, applyMiddleware, compose} from 'redux';
import {logger} from "redux-logger"
import rootReducer from '../reducer/index'
import thunk from 'redux-thunk';


const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk,logger))
);

export default store