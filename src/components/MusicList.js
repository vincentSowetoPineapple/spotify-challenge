import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image} from 'react-native';
import Elipsis from './Elipsis';

const TrackList = [
    {  
        id: '1',
        title: 'I\'m Fine - IMABU Remix',
        viewCount: '823,428'
    },
    {
        id: '2',
        title: 'I\'m Fine ',
        viewCount: '823,428'
    }
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

const MusicList = () => {
  
    const [list, setlist] = useState([  
        {  
        id: '1',
        title: 'I\'m Fine - IMABU Remix',
        viewCount: '823,428',
        location: '../img/albumArt.jpeg'
    },
    {
        id: '2',
        title: 'I\'m Fine ',
        viewCount: '823,428',
        location: '../img/albumArt2.jpg'
    }])

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.albumTitle}>Okudumile</Text>
            </View>
            <View style={{}}>
                <FlatList style={{}}
                    data={list}
                    renderItem={({item}) =>(
                        <View style={[styles.panel, styles.pos]} key={item.key}>
                            <View style={styles.trackNumber}>
                                <Text style={{paddingTop:6,color:'white'}}>{item.id}</Text>
                            </View>
                            <View style={styles.albumCover}>
                                <Image style={styles.image} source={require('../img/albumArt.jpeg')}/>
                            </View>
                            <View style={{flex:8}}>
                                <Text style={[styles.trackDets,{fontSize:18,fontFamily: 'Circular Std',}]}>{item.title}</Text>
                                <Text style={styles.trackDets}>{item.viewCount}</Text>
                            </View>
                            <View style={styles.elipsis}>
                                <Elipsis/>
                            </View>
                        </View>)
                    } keyExtractor ={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    albumTitle:{
        paddingTop:10,
        color:"white",
        fontSize: 25,
        fontWeight:'bold',
        fontFamily: 'Circular Std',
    },
    item:{
        backgroundColor: 'black', 
        padding :20
    }, 
    title: {fontSize: 16},
    musicInfo:{

    },
    panel:{
        paddingTop:20,
    },
    pos:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        paddingTop:30,
    },image:{
        width:40,
        height:40,
        
    },
    trackNumber:{
        flex: 1,
   //     borderWidth:1,
       // borderColor:'red',
        color:'white',
    },
    albumCover:{
        flex:2,
        style:2, 
        alignItems:"center",

     //   borderWidth:1,
     //   borderColor:'blue',
    }, 
    trackDets:{
        color: 'white',
        fontFamily: 'Circular Std',

   //     borderWidth:1,
 //       borderColor:'green',
    },
    elipsis:{
        right:10,
  //      borderWidth:1,
   //     borderColor:'yellow',

    },
});


export default MusicList;