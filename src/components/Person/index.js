import React from 'react';
import { View, Image } from 'react-native';
import Health from './Health';

export default ({ health, healthStart, style }) => (
  <View style={style}>
    <Image />
    <Health health={health} healthStart={healthStart}/>
  </View>
);
