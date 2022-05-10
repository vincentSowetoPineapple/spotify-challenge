import React from 'react'

import {StyleSheet, Button, View, SafeAreaView,Text,Alert} from 'react-native'



const TitleStat = (props) => {
    return(
    
        <Text style={styles.text}>
            Abalaleli benyanga anbangu - 166,307
        </Text>
    );
}


const styles = StyleSheet.create({
    text:{
        color:'#b6b6b6',
        fontFamily: 'Circular Std',
    }
});

export default TitleStat;