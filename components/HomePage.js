import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Image,
} from 'react-native';
import clrs from '../utils/clrs'
import _ from 'lodash'
import * as Animatable from 'react-native-animatable';



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

      <Image source={require("../utils/bg.png")} style={styles.backgroundImage} >
        <StatusBar hidden = {true} />

        <Animatable.Text style = {styles.header} animation="slideInDown" iterationCount={1} direction="alternate">BinaryMaster</Animatable.Text>
        <TouchableOpacity style = {styles.button}  onPress={this.SPButtonPress}>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.buttonText}>Single Player</Animatable.Text>
        </TouchableOpacity>

        <Animatable.View ref="view">
        <TouchableOpacity style = {styles.button} onPress={() => this.refs.view.bounce(800).then((endState) => {})}>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.buttonText}>MultiPlayer</Animatable.Text>
        </TouchableOpacity>
        </Animatable.View>
      </Image>
    )
  }




}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode:'stretch',
  },
  container: {
    // paddingTop: 16,
    // flex: 1,
    justifyContent: 'center',

    // alignItems: 'center',
    // backgroundColor: clrs.navygrey,
  },

  header:{
    fontSize: 60,
    color:clrs.orangeyellow,
    paddingLeft:10,
    paddingTop:20,
    paddingBottom:130,
    alignSelf: 'center',
    fontFamily: 'Audiowide-Regular',
    textShadowColor:clrs.black,
    textShadowRadius :1,
    textShadowOffset : {width: 1, height: 1 },

  },

  button:{
    // backgroundColor: clrs.indianred,
    width:200,
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems:'center',
    margin:5,
    borderWidth:3,
    borderColor:clrs.orangeyellow,
  },

  buttonText:{
    fontSize:20,
    fontFamily: 'Audiowide-Regular',
    alignSelf: 'center',
    alignItems:'center',
    paddingTop:8,
    color:clrs.white,

  }

});
