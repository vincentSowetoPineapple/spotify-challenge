import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';
import Evillcons from 'react-native-vector-icons/EvilIcons';

//Screens 
import HomeScreen from '../HomeScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Ikhaya = "Ikhaya";
const Sesha = "Sesha";
const UmtapoWakho = "UmtapoWakho";

const Tab = createBottomTabNavigator();

function NavContainer(){
    return(
        <Tab.Navigator 

            initialRouteName='Ikhaya'
            screenOptions={{
                headerShown:false,
                tabBarIconStyle:{
                    color:'white',
                    size:20,
                },
                tabBarStyle:{
                    height: 100,
                },
                tabBarActiveTintcolor:'white',
                tabBarInactiveBackgroundColor:'#282828',
                tabBarActiveBackgroundColor:'#282828',
         //       tabBar
               // tabBarBa
                tabBarBadgeStyle:{
                    backgroundColor:'grey'
                },

                
            }}>
                <Tab.Screen
                    name="Ikhaya"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Ikhaya',
                        tabBarIcon:({color,size}) =>(
                            <MaterialCommunityIcons name="home-outline" color={'#b2b2b2'}size={40} />
                        ),
                    }}
                />
                <Tab.Screen
                name="Sesha"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Sesha',
                    tabBarIcon:({color,size}) =>(
                        <Evillcons name="search" color={'#b2b2b2'}size={40} />
                    ),
                    
                }}
            />
               
                    <Tab.Screen 
                        name="UmtapoWakho"
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'UmtapoWakho', 
                            tabBarIcon:({color, size}) => (
                                <Ionicons name="library-outline" color={'#b2b2b2'} size={40}/>
                            ),
                        }}

                    />
            </Tab.Navigator>
    );
}

export default NavContainer