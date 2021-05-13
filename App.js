import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen_sophia';
import RoomSelectScreen from './screens/RoomSelectScreen_asim';
import RoomScreen from './screens/RoomScreen_asim';
import ObjectSelectScreen from './screens/ObjectSelectScreen_asim';
import RoomScanScreen from './screens/RoomScanScreen';
import RoomScanConfirmScreen from './screens/RoomScanConfirmScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        rooms:[{id:0,name:"wohnzimmer_abc",img:"wohnzimmer_abc.png"},{id:1,name:"arbeitsraum",img:"arbeitsraunm.png"},{id:2,name:"wohnzimmer_ab2",img:"wohnzimmer_ab2.png"}],
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
            alignContent:"center"
          },
          headerTintColor: 'grey',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
        }}
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
        //initialParams={}
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
