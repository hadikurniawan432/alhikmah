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


      <View style={styles.box3}>
      <Text>PMM Al-Hikmah adalah salah satu organisasi kemahasiswaan yang bergerak di bidang keagamaan
      yang terdapat di salah satu universitas negeri di bali, yaitu Universitas Pendidikan Ganesha </Text>

      </View>

      <View style={styles.box3}>
      <Text>Visi PMM Al-Hikmah</Text>
      </View>

      <View style={styles.box3}>
      <Text>Menciptakan PMM Al-Hikmah sebagai Organisasi Keislaman yang Berprinsip Kolektif Kolegial</Text>

      </View>
      <View style={styles.box3}>
        <Text>Misi PMM Al-Hikmah</Text>
      </View>
      <View style={styles.box3}>
      <Text>1. Membangun PMM Al-Hikmah untuk Menghasilkan Kepemimpinan yang Humanis serta Mengayomi</Text>

      </View>
      <View style={styles.box3}>
      <Text>2. Menggerakkan PMM Al-Hikmah sebagai Organisasi yang Efektif, dan Menjaga Stabilitas Ukhuwah Islamiyah antara
      Mahasiswa Muslim Undiksha</Text>
      </View>
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
    flex: 1,
    backgroundColor: 'tomato',
    margin: 5,
  }
});
