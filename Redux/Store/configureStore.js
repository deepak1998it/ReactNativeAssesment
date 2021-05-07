import { createStore, combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer';
const rootReducer = combineReducers(
    { count: dataReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;