import React from 'react'

import {StyleSheet, Button, View, SafeAreaView,Text,Alert} from 'react-native'



const Elipsis = (props) => {
    return(
    
        <Text style={styles.text}>
            ...
        </Text>
    );
}


const styles = StyleSheet.create({
    text:{
        flexDirection:'column',
        alignItems:'center',
        color:'white',
        paddingLeft: 18,
        fontSize: 19,
        right:10,
        color:'#a6a6a6',
        fontFamily: 'Circular Std',
       // borderWidth:1,
       // borderColor:'purple',
    }
});

export default Elipsis;