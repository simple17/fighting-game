import React from 'react';
import { FlatList, Text, View } from 'react-native';

export default ({ messages }) => (
  <FlatList
    style={{ padding: 15 }}
    data={messages.map((m, i) => {
      return {
        message: m,
        key: i+1,
      };
     }).reverse()}
    renderItem={({ item }) => (
      <View key={item.key} style={{ paddingBottom: 10 }}>
        <Text>{item.key}: {item.message}</Text>
      </View>
    )}
  />
);
