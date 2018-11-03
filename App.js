//import library
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { authorize } from 'react-native-app-auth';
import Profile from './src/screens/profile';

// auth0 config
const config = {
  issuer : 'https://connected-service.eu.auth0.com',
  clientId : 'beOEFEKBKXZqwBwUHz2Ii1c4T4nLVavD',
  redirectUrl : 'io.identityserver.demo:/oauthredirect',
  scopes : ['openid', 'profile', 'email', 'offline_access']
};


// authorize = async () => {
//   try {
//     const authState = await authorize(config);
//   } catch (error) {
//     Alert.alert('Failed to log in', error.message);
//   }
// };

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      isLogged : false,
      accessToken : 'N/A'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to  Honda Connect!</Text>
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}

        {this.state.isLogged ? (
          <View>
            <Text style={styles.instructions}>Access Token : {this.state.accessToken}</Text>
            {/* <Text style={styles.instructions}>Token Expiration : {this.state.accessTokenExpirationDate}</Text>
            <Text style={styles.instructions}>Id Token : {this.state.idToken}</Text>
            <Text style={styles.instructions}>Token Type : {this.state.tokenType}</Text> */}
            <Profile />
          </View>

          ) : (
          // <Text style={styles.welcome}>Not Loggged</Text>
          <TouchableOpacity
            onPress={this.login}
            style={styles.button}
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          >
            <Text state={styles.welcome}>Login</Text>
          </TouchableOpacity>
          )
        }


      </View>
    );
  }

  login = async () => {
    console.log('Clicked');

    const authState = await authorize(config)
    .catch((err) => {
      console.log(err);
      throw err;
    });
    console.log(authState);

    if(authState.accessToken) {
      this.setState({isLogged : true, 
        accessToken : authState.accessToken,
        accessTokenExpirationDate : authState.accessTokenExpirationDate,
        idToken : authState.idToken,
        tokenType : authState.tokenType
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
