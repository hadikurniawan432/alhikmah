import React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Footer from '../project/Footer';

class HomeScreen extends React.Component {
    static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.containerMain}>

       <Text>Ketua umum : Zaid Murtadho</Text>
      <Text>Wakil Ketua Umum : Didin Samsul Maari</Text>
      <Text>Sekretaris I : Ikrima Maulida</Text>
      <Text>Sekretaris II : Kristyani</Text>
      <Text>Bendahara I : Efri Agihidayantari</Text>
      <Text>Bendahara II : Bughayatul Mustasyidah</Text>
      <Text>Bidang 1 Kajian dan Syiar: Chairul Naim</Text>
      <Text>Bidang 2 Keakhwatan : Karismania Maulidina</Text>
      <Text>Bidang 3 Sumber Daya Mahasiswa : Dia Ayu Murtiningrum</Text>
      <Text>Bidang 4 Minat dan Bakat : Agung Ardiansyah</Text>
      <Text>Bidang 5 Pengabdian Pada Masyarakat : Nikmatul Arofah</Text>
      <Text>Bidang 6 Hubungan Masyarakat : Fikri Abdul Ghani</Text>
      <Text>Bidang 7 Komunikasi dan Informasi : Thessa Sahara Umami</Text>

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
