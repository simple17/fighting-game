import React from 'react';
import { View } from 'react-native';

export default ({ health, healthStart }) => {
  const percent = health < 0 ? 0 : health;

  return (
    <View
      style={{
        backgroundColor: '#ccc',
        width: '100%',
        height: 25,
        flexDirection: healthStart === 'left' ? 'row' : 'row-reverse',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#030303',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          width: `${percent}%`,
          height: '100%',
        }}
      />
    </View>
  );
};
