import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';
const store:Store<any,AnyAction> & {
    dispatch: DispatchType
} = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk,createLogger()),
        DevTools.instrument()   
    )
)
export default store;
