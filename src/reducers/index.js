import { combineReducers } from 'redux';
import fight from './fight';

export default combineReducers({
  auth: () => [],
  fight,
});
