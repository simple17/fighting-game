import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default ({ winner, resetFight }) => {
  const containerStyles = winner === 'user' ? StyleSheet.flatten([
    styles.container,
    styles.containerWin
  ]) : StyleSheet.flatten([
    styles.container,
    styles.containerLose
  ]);

  const textStyles = winner === 'user' ? styles.stateWin : styles.stateLose;

  return (
    <View style={containerStyles}>
      <Text style={textStyles}>{winner === 'user' ? 'Победа!' : 'Сорян, ты проиграл... =('}</Text>
      <Button title="Ещё раз!" color="red" onPress={() => {
        resetFight();
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerWin: {
    backgroundColor: 'green',
  },
  containerLose: {
    backgroundColor: 'red',
  },
  stateWin: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  stateLose: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  button: {
    color: 'red',
    backgroundColor: 'red',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

