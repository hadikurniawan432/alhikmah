import React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json



class HomeScreen extends React.Component {
    static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.containerMain}>

       <Text>ini Kontak</Text>

</View>
    );
  }
}



const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
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
    backgroundColor: 'silver',
    flex: 1,
    flexDirection: 'column',

  },
  box3: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: 'tomato',
    margin: 10,
  }
});
