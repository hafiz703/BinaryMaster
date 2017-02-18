import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  BackAndroid,
} from 'react-native';
import clrs from '../utils/clrs'
import BinCircle from './BinCircle'
import _ from 'lodash'
import * as Animatable from 'react-native-animatable';
export default class MainGame extends Component {

  constructor(props){

    super(props)

    this.state ={ childList:Array(8).fill(0),
                  randomNumber:Math.floor(Math.random() * 255) + 1,
                  prevNum: null

                }
    this.childOnChange = this.childOnChange.bind(this);
    console.warn(this.state.childList);
    BackAndroid.addEventListener("hardwareBackPress", () => {
        if (props.navigator.getCurrentRoutes().length > 1) {
          props.navigator.pop()
          return true // do not exit app
        } else {
          return false // exit app
        }
    })

  }



  checker(arr){
    const sum = arr.reduce(function(prev, cur) {
      return prev + cur;
    })
    console.log('sum:',sum)
    this.setState({prevNum:this.state.randomNumber},
                  ()=>{
                        if(sum===this.state.randomNumber){
                          do{
                              var newrandom=Math.floor(Math.random() * 255) + 1;
                            }while(newrandom==this.state.prevNum);
                            // console.warn(newrandom);
                            this.setState({
                                randomNumber:newrandom,
                                childList:Array(8).fill(0)
                            }
                            );

                          }

                 });

  }



  childOnChange(oId,num ){
    // console.warn("oid,num:",oId,num)
    this.state.childList[oId] = num;
    const childListCheck = this.state.childList.slice();
    for(var i=0;i<8;i++){
      childListCheck[i] *= Math.pow(2,(7-i));
    }


    this.checker(childListCheck);



  }

  render(){
    const xrange = _.range(8)
    const circles = xrange.map((obj,i)=><BinCircle key = {i.toString()} id = {i.toString()} childOnChange = {this.childOnChange} number = {this.state.childList[i]}  />)

    return(
      <Image source={require("../utils/bg.png")} style={styles.backgroundImage} >
         <StatusBar hidden = {true} />
          <View>
            <Animatable.Text animation="bounceInDown" style = {styles.randomNumber} duration ={2000}>
              {this.state.randomNumber}
            </Animatable.Text>
          </View>
          <View style = {styles.circleContainer} >
             {circles}
          </View>
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
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: clrs.lighternavygrey,
  },

  circleContainer:{
      flex:1,
      flexDirection: 'row',
      alignItems: 'flex-end',

  },

  randomNumber:{
    // flex:1,
    alignSelf: 'center',
    color:clrs.white,
    paddingTop:110,
    fontSize:75

  }











});
