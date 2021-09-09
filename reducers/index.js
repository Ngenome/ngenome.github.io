import {createStore } from 'redux';

import {LoggedReducer} from './logged'
import {TokenReducer} from './token'

import {PageReducer} from './current'
import {combineReducers} from 'redux';
export const allReducers = combineReducers({
  MyToken:TokenReducer,
  isLogged:LoggedReducer,
  currentPage:PageReducer
})
export default allReducers;