import React from 'react'

import {StyleSheet, Button, View, SafeAreaView,Text,Alert} from 'react-native'

const FollowButton = (props) => {

    
    return(
        <View style={styles.button}>
            <Text style={styles.text}>OBALANDELAYO</Text>
                
        </View>
    );
}


const styles = StyleSheet.create({
    text:{
        color: 'white',
        fontSize: 14,
        fontFamily: 'Circular Std',
    },
    button:{
        width: 140,
        height:25,
        color:'white',
        borderColor:'white',
        borderRadius: 5,
        borderWidth: .7,
        borderColor: 'white',
        alignItems:'center',
        padding: 3,
    }
});
export default FollowButton;