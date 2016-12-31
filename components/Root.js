import React, { Component } from 'react';
import {
  Navigator,
  StatusBar
} from 'react-native';
var Orientation = require('react-native-orientation');
import MainGame from './MainGame'

export default class BM extends Component {
  componentDidMount() {
    Orientation.lockToLandscape(); //this will lock the view to Landscape
  }

  render() {
    return (
    // <Main />
    <Navigator
      initialRoute ={{
        id:'InGame_SinglePlayer'
      }}
      renderScene={
        this.navigatorRenderScene
      }
     />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    if (route.id === 'InGame_SinglePlayer') {
      return (<MainGame navigator={ navigator } />);
    }


  }
}
