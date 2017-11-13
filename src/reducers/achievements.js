import {
  USER_LOOSE,
  OPPONENT_LOOSE,
} from '../actions/types';

const defaultState = {
  games: 0,
  wins: 0,
  losts: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOOSE:
      return Object.assign({}, state, {
        games: state.games + 1,
        losts: state.losts + 1,
      });
    case OPPONENT_LOOSE:
      return Object.assign({}, state, {
        games: state.games + 1,
        wins: state.wins + 1,
      });
    default:
      return state;
  }
};
