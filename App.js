import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Home from './src/project/Menu';

const Logo = require('./src/img/alhikmah.png');

class Header extends React.Component {
  render() {
    return (
      <View style={styles.box1}>
            <Text style={styles.text} > PMM AL-HIKMAH UNDIKSHA </Text>
        </View>
    );
  }

}



class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Header/>,
    headerLeft: null,
  };
  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Image source={Logo} style={{ height: 250, width: 350, }} />
        <View style={{ flexDirection: 'row' }}>


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style = {{ fontSize: 20 }}>WELCOME TO</Text>
        <Text style = {{ fontSize: 25 }}>PMM AL-HIKMAH UNDIKSHA</Text>

        <Button
          title="Masuk"
          color="blue"
          onPress={() => this.props.navigation.navigate('Daftar')}
        />
        </View>
      </View>
      </View>
    );
  }
}



class DaftarScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Header/>,
    headerLeft: null,
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Home />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Daftar: {
      screen: DaftarScreen,
    },

  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {

  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  box2: {
    flex: 2,
    backgroundColor: 'yellow',
    margin: 20
  },
  box3: {
    flex: 2,
    backgroundColor: 'blue',
    margin: 20
  },


  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 17,
    fontSize: 20
  }
});
