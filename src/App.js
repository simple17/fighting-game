import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import thunk from 'redux-thunk';
import reducers from './reducers/';
// import LoginView from './components/LoginView';
// import HomeView from './components/HomeView';
import FightView from './components/FightView';

const appStore = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default class App extends Component {
  componentWillMount() {
    //do stuff
  }
  render() {
    return (
      <Provider store={appStore}>
        <FightView style={styles.container} />
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
