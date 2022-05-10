import React from 'react';
import {View, ImageBackground,Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const BannerImage = () => {
    return(
            <ImageBackground style={styles.img} source={require('/Users/vincentsoweto/Documents/SpotifyApp/SpotifyChallenge2/src/img/highklassified.jpg')} >
                <View 
                style={
                    {
                       // paddingLeft: 10,
                     //   paddingTop:5,
                        backgroundColor:'grey',
                       width:20,
                       height:20,
                       borderRadius:20,
                    left:15,
                    top:10,

                }}>
                <AntDesign 
                style={{
                    width:20,
                    height:20,
                    borderWidth:1,
                    borderRadius:20/2,
                    //backgroundColor:'grey',
                    borderColor:'grey'
                }} 
                name="left" 
                size={15} 
                color="white"/>
            </View>
                <View style={styles.textPos}>
                    <Text style={styles.text}>High Klassified</Text>    
                </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    img:{
        flex:1,
        width:'100%',
        height:'100%',
    },
    textPos:{
        flex:1,
        flexDirection:'column-reverse',
     //   borderWidth: 1,
    //    borderColor:'green',
    },
    text:{
        color: "white",
        position:'relative',
        bottom:0,
        fontFamily:'Circular Std',
      //  borderWidth: 1,
      //  borderColor:'red',
        fontSize: 53,
        fontWeight:'bold',
        flexDirection:'column',
        alignItems:'flex-end',
        alignSelf:'center',
    },
});


export default BannerImage;