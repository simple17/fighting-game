import React from 'react';
import { View, Image } from 'react-native';
import Health from './Health';

export default ({ health, healthStart, avatar, style }) => (
  <View style={style}>
    <Image source={avatar} />
    <Health health={health} healthStart={healthStart} />
  </View>
);
