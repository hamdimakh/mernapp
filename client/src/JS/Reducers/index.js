// importation
import {combineReducers} from 'redux';
import contactReducer from './contact';
import userReducer from './user';

// create rootReducer
const rootReducer = combineReducers({contactReducer, userReducer})



// export
export default rootReducer;


































