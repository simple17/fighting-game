import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RadioForm from 'react-native-simple-radio-button';
import FightLog from './FightLog';
import Person from './Person';

import {
  attackOptions,
  deffenseOptions,
} from '../fightOptions';

import {
  selectAttackOption,
  selectDeffenseOption,
  resetFight,
  fight,
} from '../actions/actionCreators';

class FightView extends React.Component {
  constructor(props) {
    super(props);

    this.setSelectedAttackOption = this.setSelectedAttackOption.bind(this);
    this.setSelectedDeffenseOption = this.setSelectedDeffenseOption.bind(this);
    this.onFightClick = this.onFightClick.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(resetFight());
  }

  onFightClick() {
    const { dispatch } = this.props;
    dispatch(fight());
  }

  setSelectedAttackOption(selectedAttackOption) {
    const { dispatch } = this.props;
    dispatch(selectAttackOption(selectedAttackOption));
  }

  setSelectedDeffenseOption(selectedDeffenseOption) {
    const { dispatch } = this.props;
    dispatch(selectDeffenseOption(selectedDeffenseOption));
  }


  render() {
    const {
      logMessages,
      userHealth,
      opponentHealth,
    } = this.props.fight;
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 25,
        }}
      >
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}
        >
          <Person
            style={styles.person}
            healthStart="left"
            health={userHealth}
          />
          <Person
            style={styles.person}
            healthStart="right"
            health={opponentHealth}
          />
          <Image />
        </View>
        <View style={styles.options}>
          <View style={styles.leftOptions}>
            <Text style={styles.optionsLabel}>Защита</Text>
            <RadioForm
              radio_props={deffenseOptions}
              initial={0}
              buttonSize={15}
              onPress={this.setSelectedDeffenseOption}
              style={styles.radioButtons}
            />
          </View>
          <View style={styles.rightOptions}>
            <Text style={styles.optionsLabel}>Атака</Text>
            <RadioForm
              radio_props={attackOptions}
              initial={0}
              buttonSize={15}
              onPress={this.setSelectedAttackOption}
              style={styles.radioButtons}
            />
          </View>

        </View>
        <Button title="Бой" onPress={this.onFightClick} />
        <FightLog messages={logMessages} />
      </View>
    );
  }
}

export default connect(
  (state) => {
    return {
      fight: state.fight,
    };
  },
  (dispatch) => {
    return {
      dispatch,
    };
  },
)(FightView);

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftOptions: {
    //
  },
  rightOptions: {
    //
  },
  radioButtons: {
    alignItems: 'flex-start',
  },
  optionsLabel: {
    alignSelf: 'center',
  },
  person: {
    width: '48%',
  },
});
