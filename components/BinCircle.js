import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import clrs from '../utils/clrs'

export default class BinBox extends Component {
  constructor(props){
    super(props)
    this.state = {number:0}

  }

  render(){
    return(
      <View>
      <Text style = {styles.id}>{7-this.props.id}</Text>
        <TouchableHighlight onPress={() => {this.setState({number:this.state.number==1?0:1});this.props.childOnChange(this.props.id,number=this.state.number==1?0:1)}} underlayColor = {clrs.darkgreen} style = {styles.touchableCircle}>
          <Text style = {styles.text}>{this.state.number}</Text>
        </TouchableHighlight>
      </View>
    )
  }


}

const styles = StyleSheet.create({

  touchableCircle:{
    borderWidth:1.2,
    borderColor:clrs.orangeyellow,
    borderRadius: 50,
    width: 80,
    height: 85,

  },
  text:{
    paddingTop:20,
    flex:1,
    alignSelf:'center',
    justifyContent:'center',
    color:clrs.white,
    fontSize: 35
  },

  id:{
    color:clrs.white,
    alignSelf:'center',
  }

});
