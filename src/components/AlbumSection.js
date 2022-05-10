import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';

const AlbumSection = () => {
   

    return (
        <View style={styles.container}>
                <Text style={styles.title}>Izingoma Ezithandiwe</Text>
                <Text style={styles.text}>5 izingoma . High Klassified</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        right:48,
    },
    text:{
        color:"white",
        fontFamily: 'Circular Std',
    },
    title:{
        fontSize:18,
        color:'white',
        paddingBottom:3,
        fontFamily: 'Circular Std',
    }

});


export default AlbumSection;