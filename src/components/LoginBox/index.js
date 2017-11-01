import React from 'react';
import { TextInput, View, Text } from 'react-native';

export default () => (
  <View>
    <Text>Hi</Text>
    <TextInput placeholder="email@google.com" />
    <TextInput placeholder="password" secureTextEntry />

  </View>
);
