import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { resetFight } from '../actions/actionCreators';

import FightView from './FightView';
import ResultView from './ResultView';

const GameScreen = ({ game, dispatch }) => (
  <View style={{ flex: 1 }}>
    {game.status === 'ended' ? (
      <ResultView
        winner={game.winner}
        resetFight={() => {
          dispatch(resetFight());
        }} />
    ) : (
      <FightView />
    )}
  </View>
);

export default connect(
  (state) => {
    return {
      game: state.game,
    };
  },
  dispatch => ({
    dispatch,
  }),
)(GameScreen);
