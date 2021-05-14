import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen_sophia';
import RoomSelectScreen from './screens/RoomSelectScreen_asim_dmk';
import RoomScreen from './screens/RoomScreen_asim';
import ObjectSelectScreen from './screens/ObjectSelectScreen_asim_dmk';
import RoomScanScreen from './screens/RoomScanScreen_sophia';
import RoomScanConfirmScreen from './screens/RoomScanConfirmScreen_dmk';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        rooms:[
          {id:0,name:"Wohnzimmer von Asim",img:{uri: "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}},
          {id:1,name:"Arbeitsraum Sophia",img:{uri: "https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}},
          {id:2,name:"Wohnzimmer Dominik",img:{uri: "https://images.pexels.com/photos/803908/pexels-photo-803908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
        ],
        objects:[
          {id:0,name:'chair',img:require('./assets/chair.png')},
          {id:1,name:"closet",img:require('./assets/closet.png')},
          {id:2,name:'dresser',img:require('./assets/dresser.png')}],
        some_other_appdata: [], // this is a list, but it could be a string as well
    }
  } 

  render(){

    return(

    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home',headerShown:false }}
        //initialParams={}
      />

      <Stack.Screen
        name="RoomSelect"
        component={RoomSelectScreen}
        options={{ title: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: 'grey',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
        }}
        initialParams={{rooms:this.state.rooms}}
        //initialParams={}
      />

      <Stack.Screen
        name="Room"
        component={RoomScreen}
        options={{ title: '' }}
        //options={{headerShown:false}}
        //initialParams={}
      />

      <Stack.Screen
        name="ObjectSelect"
        component={ObjectSelectScreen}
        options={{ title: '' }}
        initialParams={{objects:this.state.objects}}
      />

      <Stack.Screen
        name="RoomScan"
        component={RoomScanScreen}
        //options={{headerShown:false}}
        options={{ title: '' }}
        //initialParams={}
      />

      <Stack.Screen
        name="RoomScanConfirm"
        component={RoomScanConfirmScreen}
        options={{ title: '' }}
        //initialParams={}
      />

    </Stack.Navigator>
  </NavigationContainer>

    );
  }
}

export default App;
