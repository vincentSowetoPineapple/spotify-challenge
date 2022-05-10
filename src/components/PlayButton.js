import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, View} from 'react-native';

// Icon.loadFont();

const PlayButton = ()  => {
    return(
        <View style={{ paddingRight:5, paddingTop:5}}>
            <View style={styles.buttonBackground}>
                <Icon style={styles.button} name="caretright" size={30} color="#FFFFFF">
                </Icon>
                
            </View>
            <View style={styles.shuffleBackground}>
                <Entypo style={styles.shuffle} name="shuffle" size={14} color="#499361"/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonBackground:{
        //paddingRight:10,
        height:50,
        width:50,
        borderRadius: 50/2,
        backgroundColor:"#1db956",
        alignItems:"center",
        justifyContent:"center",
        //border
    },
    button:{
      //  color: "white",
      //  position:'absolute',
       // paddingLeft:5,
    //    borderWidth:1,
  //      borderColor:'blue'
    },
  
    shuffle:{
        //flexDirection:'row-reverse',
       // position:'absolute',
    //    height:20,
    //    width:20,
    //    borderRadius:20,
    //     backgroundColor:'white',
      //  borderWidth:1,
       // borderColor:'red',
  //      left:30,
    //    bottom:20,
    top:2,
    left:2
    },
    shuffleBackground:{
        borderWidth:1,
        borderColor:'white',
        width:20,
        height:20,
        borderRadius:20,
         //      left:30,
    //    bottom:20,
        backgroundColor:'white',
        left:33,
        bottom:20,
    }
});
export default PlayButton;