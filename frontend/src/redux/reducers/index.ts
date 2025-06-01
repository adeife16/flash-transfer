import { CombinedState, combineReducers, Reducer } from 'redux';
import PaymentReducer from './payment';

export type IStoreState ={
    payment:PaymentState
}
const rootReducer:Reducer<CombinedState<{
    payment: PaymentState;
}>, PaymentAction> = combineReducers({
    payment:PaymentReducer
})

export default rootReducer;