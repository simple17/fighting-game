import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default (props) => {
  const containerStyles = true ? StyleSheet.flatten([
    styles.container,
    styles.containerWin
  ]) : StyleSheet.flatten([
    styles.container,
    styles.containerLose
  ]);

  const textStyles = true ? styles.stateWin : styles.stateLose;

  return (
    <View style={containerStyles}>
      <Text style={textStyles}>Победа!</Text>
      <Button title="OK" color="red" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  containerWin: {

  },
  containerLose: {

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

