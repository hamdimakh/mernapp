// import createStore 
import {createStore, applyMiddleware, compose} from 'redux';




// import rootReducers
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_ENTENSION_COMPOSE__ || compose;

// store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
// expoprt 
export default store;















