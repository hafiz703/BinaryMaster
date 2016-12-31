import React, { Component } from 'react';
import {
  Navigator,
  StatusBar
} from 'react-native';
var Orientation = require('react-native-orientation');
import MainGame from './MainGame'
import HomePage from './HomePage'

export default class BM extends Component {
  componentDidMount() {
    Orientation.lockToLandscape(); //this will lock the view to Landscape
  }

  render() {
    return (
    // <Main />
    <Navigator
      initialRoute ={{
        id:'Home'
      }}
      renderScene={
        this.navigatorRenderScene
      }
     />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'InGame_SinglePlayer':
        return (<MainGame navigator={ navigator } />);
      case 'Home':
          return (<HomePage navigator={ navigator } />);

    }



  }
}
