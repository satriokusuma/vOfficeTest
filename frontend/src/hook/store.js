import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { roomListReducer, roomtDetailsReducer } from './reducers/roomReducer';
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers(
  {
    roomList: roomListReducer,
    roomDetails: roomtDetailsReducer,
    userLogin: userLoginReducer
  }
);

const userFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = {
  userLogin: { user: userFromStorage }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store;