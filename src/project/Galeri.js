
      import React from 'react';
      import { Button, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
      import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json


      const iconHome1 = require('../img/galeri/raker1.jpg');
      const iconHome2 = require('../img/galeri/raker2.jpg');
      const iconHome3 = require('../img/galeri/raker3.jpg');
      const iconHome4 = require('../img/galeri/raker4.jpg');
      const iconHome5 = require('../img/galeri/raker5.jpg');

      class HomeScreen extends React.Component {
      static navigationOptions = {
          header: null,
        };

        render() {
          return (
            <View style={styles.containerMain}>
            <ScrollView>
            <Image source={iconHome1} style={{ height: 200, width: 350, margin: 5, }} />
            <Image source={iconHome2} style={{ height: 200, width: 350, margin: 5, }} />
            <Image source={iconHome3} style={{ height: 200, width: 350, margin: 5, }} />
            <Image source={iconHome4} style={{ height: 200, width: 350, margin: 5, }} />
            <Image source={iconHome5} style={{ height: 200, width: 350, margin: 5, }} />

            </ScrollView>
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
          backgroundColor: 'white',
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
