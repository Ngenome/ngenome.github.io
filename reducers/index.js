import {createStore } from 'redux';

import {LoggedReducer} from './logged'
import {TokenReducer} from './token'
import {combineReducers} from 'redux';
export const allReducers = combineReducers({
  MyToken:TokenReducer,
  isLogged:LoggedReducer,
})
export default allReducers;