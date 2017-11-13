import { combineReducers } from 'redux';
import fight from './fight';
import game from './game';
import achievements from './achievements';

export default combineReducers({
  auth: () => [],
  fight,
  game,
  achievements,
});
