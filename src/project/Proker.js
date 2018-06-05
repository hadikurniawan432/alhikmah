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

      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}> Proker PMM Al-Hikmah </Text>
      </View>
<ScrollView>
      <View style={styles.box3}>
      <Text> 1. Musyawarah Anggota</Text>
      </View>
      <View style={styles.box3}>
      <Text> 2. Rapat Kerja</Text>
      </View>
      <View style={styles.box3}>
      <Text> 3. Al-Hikmah Undiksha Competition</Text>
      </View>
      <View style={styles.box3}>
      <Text> 4. Al-Hikmah In Action</Text>
      </View>
      <View style={styles.box3}>
      <Text> 5. Al-Hikmah Turnamen Futsal</Text>
      </View>
      <View style={styles.box3}>
      <Text> 6. Silaturrahim Alumni</Text>
      </View>
      <View style={styles.box3}>
      <Text> 7. Seminar Entrepreneur</Text>
      </View>
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
    flexDirection: 'row'
  },
  box4: {
    flex: 2,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.2,
    backgroundColor: 'white',
    margin: 5,
  }
});
