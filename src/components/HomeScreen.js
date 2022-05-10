import * as react from 'react';
import React from 'react';
import FollowButton from './FollowButton';
import BannerImage from './BannerImage';
import PlayButton from './PlayButton';
import MusicList from './MusicList';
import Elipsis from './Elipsis';
import TitleStat from './TittleStat';
import AlbumSection from './AlbumSection';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Image
  } from 'react-native';
  
  
//import NavContainer from './Navigation/NavContainer';

const HomeScreen = () =>{


    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.image}>
        
            <BannerImage />
        </View>
        <LinearGradient 
          colors={[ '#272727', '#141414','transparent']}
          style={styles.afterBanner}
         >
        <View style={styles.afterBanner}>
            <View style={styles.aboveElipsis} >
               
                <View style={styles.titleStat}>
                    <TitleStat/>
                </View>
                < View style={styles.ellipFollow}>
                    <FollowButton/>
                    <Elipsis/>
                </View>
            </View>
            <View style={styles.button}>
                <PlayButton />
            </View>
      </View>
      
      </LinearGradient>

       <View style={styles.albumDets}>
            <View style={styles.albumDetsImg}>
                <Image style={styles.photo} source={require('../img/highklassified.jpg')}/>
                <View style={styles.heartIcon}>
                  <AntDesign style={styles.heartIconPos} name="heart" size={12} color="white"  />
                </View>  
            </View>
            <View style={styles.albumDetsInfo}>
                <AlbumSection />
            </View>
            <View style={styles.rightArrow}>
                <AntDesign style={styles.rightIcon} name="right" size={20} color="#a6a6a6"/>
            </View>
       </View>


       <View style={styles.musicSection}>
            <MusicList/>
        </View>
          
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#121212',
      fontFamily: 'Circular Std',
    },
    image:{
      flex: 4,
    },
    afterBanner:{
      flex:.7,
      flexDirection: "row", 
      justifyContent: "space-between",
      alignItems:"center",
      paddingLeft: 5,
      paddingTop:15,
      paddingBottom:10,
      //borderColor:'red',
      //borderWidth:1,
      
    },albumDets:{
      top:15,
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
  },
    musicSection:{
      flex: 3,
      top: 15,
      paddingLeft: 10,
    },
    button:{
      flex:1,
      flexDirection:'row-reverse',
      left:100,
     // borderWidth:1,
      //borderColor:'white',
    },
    ellipFollow:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'flex-start',
      paddingLeft:0,
      paddingTop: 10,
     // borderWidth:1,
      //borderColor:'blue',
    },
    aboveElipsis:{
      flexDirection: "column",
    //  borderWidth:1,
    //  borderColor:'green'
    },
    titleStat:{
  //    borderWidth:1,
  //    borderColor:'yellow',
    },
    photo:{
        width:50,
        height:50,
        borderRadius: 50/2,
    },
    albumDetsImg:{
      //borderWidth:1,
      //  borderColor:'red',
      paddingLeft: 10,
    },
    albumDetsInfo:{
      flex:1,
      //borderWidth:1,
      // borderColor:'green',
      flexDirection:'column-reverse',
      alignItems:'center',
    },
    rightArrow:{
      flexDirection:"column", 
      alignItems:"center",
      right: 10,
    //  borderWidth:1,
      // borderColor:'yellow',
      
    },
    rightIcon:{
      top:10,
    },
    heartIcon:{
      borderWidth:2,
      borderColor:'black',
      width:25,
        height:25,
        borderRadius: 25,
        backgroundColor:'#1db956',
        left: 30,
        bottom: 18
    },
    heartIconPos:{
      left:5,
      top:5,
    }
  });
  

export default HomeScreen;