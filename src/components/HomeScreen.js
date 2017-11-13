import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { resetFight } from '../actions/actionCreators';

export default connect(
  (state) => {
    return {
      achievements: state.achievements,
    };
  },
  (dispatch) => {
    return {
      dispatch,
    };
  }
)(({ navigation, achievements, dispatch }) => (
  <View style={{ alignItems: 'center', padding: 20 }}>
    <View>
      <Image source={require('../../media/scorp.jpg')}/>
      <View>
        <Text>Скорпион</Text>
        <Text>Бои: {achievements.games} Побед: {achievements.wins} Поражений: {achievements.losts}</Text>
      </View>
    </View>
    <View>
      <Button
        title="Начать"
        onPress={() => {
          dispatch(resetFight());
          navigation.navigate('Game');
        }}
      />
    </View>
  </View>
));