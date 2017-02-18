import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import clrs from '../utils/clrs'
import {  View }  from 'react-native-animatable';
export default class BinBox extends Component {
  constructor(props){
    super(props)
    //this.state = {number:0}
  }

  render(){

    return(
      <View animation = "bounceInUp" duration = {this.props.id*450} >
        <Text style = {styles.id}>{7-this.props.id}</Text>
        <TouchableHighlight onPress={() => {
          
                                                            this.props.childOnChange(this.props.id,number=this.props.number==1?0:1);
                                            }
                                    }  style = {styles.touchableCircle} >
          <Text style = {styles.text}>{this.props.number}</Text>
        </TouchableHighlight>

      </View>
    )
  }


}

const styles = StyleSheet.create({

  touchableCircle:{
    borderWidth:2.5,
    borderColor:clrs.orangeyellow,
    borderRadius: 50,
    width: 80,
    height: 85,

  },
  text:{
    paddingTop:15,
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
