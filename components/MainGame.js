import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image
} from 'react-native';
import clrs from '../utils/clrs'
import BinCircle from './BinCircle'
import _ from 'lodash'

export default class MainGame extends Component {

  constructor(props){

    super(props)
    // this.state = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0}
    this.state ={ childList:Array(8).fill(0),
                  randomNumber:Math.floor(Math.random() * 255) + 1,
                  prevNum: null,
                }
    this.childOnChange = this.childOnChange.bind(this);

  }

  checker(arr){
    const sum = arr.reduce(function(prev, cur) {
      return prev + cur;
    })
    // console.warn('sum:',sum)
    this.setState({prevNum:this.state.randomNumber},
                  ()=>{if(sum===this.state.randomNumber){
                        do{
                            var newrandom=Math.floor(Math.random() * 255) + 1;
                          }while(newrandom==this.state.prevNum);
                          // console.warn(newrandom);
                          this.setState({randomNumber:newrandom});
                        }

                 })

  }

  childOnChange(oId,num ){
    // console.warn("oid,num:",oId,num)
    const childListNew = this.state.childList.slice();
    childListNew[oId] = Math.pow(2,(7-oId))*num;
    this.setState({childList: childListNew},()=>this.checker(this.state.childList));


  }

  render(){
    const xrange = _.range(8)
    const circles = xrange.map((obj,i)=><BinCircle key = {i.toString()} id = {i.toString()} childOnChange = {this.childOnChange}/>)

    return(
      <Image source={require("../utils/bg.png")} style={styles.backgroundImage} >
         <StatusBar hidden = {true} />
          <View>
            <Text style = {styles.randomNumber}>
              {this.state.randomNumber}
            </Text>
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
