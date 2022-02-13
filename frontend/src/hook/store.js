import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { roomListReducer, roomtDetailsReducer } from './reducers/roomReducer';
import { userLoginReducer, userDetailsReducer } from './reducers/userReducers';
import { recervationListReducer } from './reducers/recervationReducer';

const reducer = combineReducers(
  {
    roomList: roomListReducer,
    roomDetails: roomtDetailsReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    recervationList: recervationListReducer
  }
);

const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  userLogin: { userInfo: userFromStorage }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store;