import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default () => (
  <View>
    <View>
      <Image />
      <View>
        <Text>Имя</Text>
        <Text>Бои: 2 Побед: 1 Ничья: 1</Text>
      </View>
    </View>
    <View>
      <Button title="Начать" onPress={() => {}} />
      <Button title="Выход" onPress={() => {}} />
    </View>
  </View>
);