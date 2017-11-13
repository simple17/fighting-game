import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
} from 'react-native';
import thunk from 'redux-thunk';
import reducers from './reducers/';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';

const appStore = createStore(
  reducers,
  applyMiddleware(thunk),
);

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Смертельная битва',
    },
  },
  Game: {
    screen: GameScreen,
    navigationOptions: {
      headerTitle: 'Бой',
    },
  },
});

export default class App extends Component {
  componentWillMount() {
    //do stuff
  }
  render() {
    return (
      <Provider store={appStore}>
        <Navigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
