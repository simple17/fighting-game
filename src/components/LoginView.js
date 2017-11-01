import React from 'react';
import { View } from 'react-native';
import LoginBox from './LoginBox';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <LoginBox />
      </View>
    );
  }
}

export default LoginView;
