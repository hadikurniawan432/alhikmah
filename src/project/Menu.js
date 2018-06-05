import React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import About from '../project/About';
import News from '../project/News';
import Pengurus from '../project/Pengurus';
import Proker from '../project/Proker';
import Galeri from '../project/Galeri';
import Kontak from '../project/Kontak';

const iconHome = require('../img/image/home-bg.jpeg');
const iconAbout = require('../img/image/about.png');
const iconNews = require('../img/image/news.png');
const iconPengurus = require('../img/image/pengurus.png');
const iconProker = require('../img/image/proker.png');
const iconGaleri = require('../img/image/galeri.png');
const iconKontak = require('../img/image/kontak.png');



class HomeScreen extends React.Component {
static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.containerMain}>



       <Image source={iconHome} style={{ height: 200, width: 350, margin: 5, }} />

      <View style={styles.box3}>
      <TouchableOpacity style={{ flex: 1, margin: 15 }} onPress={() => this.props.navigation.push('About')} >
        <Image source={iconAbout} style={{ height: 80, width: 80, }} />
      </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, margin: 15 }} onPress={() => this.props.navigation.push('News')} >
        <Image source={iconNews} style={{ height: 70, width: 70, }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, margin: 15 }} onPress={() => this.props.navigation.push('Pengurus')} >
        <Image source={iconPengurus} style={{ height: 70, width: 70, }} />
      </TouchableOpacity>
      </View>
      <View style={styles.box4}>
      <TouchableOpacity style={{ flex: 1, margin: 15 }} onPress={() => this.props.navigation.push('Proker')} >
        <Image source={iconProker} style={{ height: 70, width: 70, }} />
      </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, margin: 15 }} onPress={() => this.props.navigation.push('Galeri')} >
        <Image source={iconGaleri} style={{ height: 70, width: 70, }} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, margin: 15 }} onPress={() => this.props.navigation.push('Kontak')} >
        <Image source={iconKontak} style={{ height: 70, width: 70, }} />
      </TouchableOpacity>
      </View>
      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}> Copyright@PMM-Alhikmah </Text>
      </View>

</View>
    );
  }
}



class About1 extends React.Component {
static navigationOptions = {
    header: null,
    headerLeft: null,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
          <About />
      </View>
    );
  }
}

class News1 extends React.Component {
static navigationOptions = {
    header: null,
    headerLeft: null,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
          <News />
      </View>
    );
  }
}

class Pengurus1 extends React.Component {
static navigationOptions = {
    header: null,
    headerLeft: null,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Pengurus />
      </View>
    );
  }
}

class Proker1 extends React.Component {
static navigationOptions = {
    header: null,
    headerLeft: null,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Proker />
      </View>
    );
  }
}

class Galeri1 extends React.Component {
static navigationOptions = {
    header: null,
    headerLeft: null,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Galeri />
      </View>
    );
  }
}

class Kontak1 extends React.Component {
static navigationOptions = {
    header: null,
    headerLeft: null,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Kontak />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: About1,
    },
    News: {
      screen: News1,
    },
    Pengurus: {
      screen: Pengurus1,
    },
    Proker: {
      screen: Proker1,
    },
    Galeri: {
      screen: Galeri1,
    },
    Kontak: {
      screen: Kontak1,
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
