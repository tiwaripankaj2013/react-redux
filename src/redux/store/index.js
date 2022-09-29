import { createStore,combineReducers } from 'redux';
import { counterReducer } from '../reducer/counterReducer';
import { inputReducer } from '../reducer/inputReducer';
import { userReducer } from '../reducer/userReducer';
// combine reducer use when multiple reducers its's take arguments as object
export const store  = createStore(combineReducers({
    counterReducer,
    listNumbers:inputReducer,
    listUser:userReducer,
}));