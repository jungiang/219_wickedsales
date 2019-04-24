import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user_reducer';
import productReducer from './products_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    products: productReducer
});

export default rootReducer;