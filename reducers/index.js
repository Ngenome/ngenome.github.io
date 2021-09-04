import {createStore } from 'redux';

import {LoggedReducer} from './logged'
import {TokenReducer} from './token'
import {combineReducers} from 'redux';
const allReducers = combineReducers({
  token:TokenReducer,
  isLogged:LoggedReducer,
})
export default allReducers;