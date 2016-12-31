import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import clrs from '../utils/clrs'
import _ from 'lodash'
import AwesomeButton from 'react-native-awesome-button'

export default class HomePage extends Component {

  constructor(props){
    super(props)

    this.SPButtonPress = this.SPButtonPress.bind(this)
  }

  SPButtonPress() {
    this.props.navigator.push({
      id:'InGame_SinglePlayer'
    })
  }


  render(){
    return(
      <View style = {styles.container}>
        <StatusBar hidden = {true} />
        <Text style = {styles.header}>BinaryMaster</Text>
        <TouchableOpacity style = {styles.button}  onPress={this.SPButtonPress}>
          <Text style = {styles.buttonText}>
            Single Player
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} >
          <Text style = {styles.buttonText}>
            MultiPlayer
          </Text>
        </TouchableOpacity>
      </View>
    )
  }




}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 16,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: clrs.navygrey,
  },

  header:{
    fontSize: 50,
    color:clrs.orangeyellow,
    paddingLeft:10,
    paddingBottom:150,
    alignSelf: 'center',
    fontFamily: 'Audiowide-Regular',
    textShadowColor:clrs.black,
    textShadowRadius :1,
    textShadowOffset : {width: 1, height: 1 },

  },

  button:{
    backgroundColor: clrs.indianred,
    width:200,
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems:'center',
    margin:5,
    borderWidth:2,
    borderColor:clrs.orangeyellow,
  },

  buttonText:{
    fontSize:20,
    fontFamily: 'Audiowide-Regular',
    alignSelf: 'center',
    alignItems:'center',
    paddingTop:10,
    color:clrs.navygrey,

  }

});
