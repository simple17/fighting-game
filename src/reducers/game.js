import {
  USER_LOOSE,
  OPPONENT_LOOSE,
  RESET_FIGHT,
} from '../actions/types';

const defaultState = {
  status: 'active',
  winner: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOOSE:
      return Object.assign({}, state, {
        status: 'ended',
        winner: 'opponent',
      });
    case OPPONENT_LOOSE:
      return Object.assign({}, state, {
        status: 'ended',
        winner: 'user',
      });
    case RESET_FIGHT:
      return defaultState;
    default:
      return state;
  }
};
