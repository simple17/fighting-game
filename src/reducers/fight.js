import {
  SELECT_ATTACK_OPTION,
  SELECT_DEFFENSE_OPTION,
  INSERT_FIGHT_MESSAGE,
  CLEAR_FIGHT_MESSAGES,
  RESET_FIGHT,
  SET_OPPONENT_HEALTH,
  SET_USER_HEALTH,
} from '../actions/types';

const defaultState = {
  selectedDeffenseOption: 'head',
  selectedAttackOption: 'head',
  logMessages: [],
  userHealth: 100,
  opponentHealth: 100,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_ATTACK_OPTION:
      return Object.assign({}, state, {
        selectedAttackOption: action.option,
      });
    case SELECT_DEFFENSE_OPTION:
      return Object.assign({}, state, {
        selectedDeffenseOption: action.option,
      });
    case INSERT_FIGHT_MESSAGE:
      return Object.assign({}, state, {
        logMessages: [...state.logMessages, action.message],
      });
    case CLEAR_FIGHT_MESSAGES:
      return Object.assign({}, state, {
        logMessages: [],
      });
    case RESET_FIGHT:
      return defaultState;
    case SET_USER_HEALTH:
      return Object.assign({}, state, {
        userHealth: action.health,
      });
    case SET_OPPONENT_HEALTH:
      return Object.assign({}, state, {
        opponentHealth: action.health,
      });
    default:
      return state;
  }

};
