import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RoomSelectScreen from './screens/RoomSelectScreen';
import RoomScreen from './screens/RoomScreen';
import ObjectSelectScreen from './screens/ObjectSelectScreen';
import RoomScanScreen from './screens/RoomScanScreen';
import RoomScanConfirmScreen from './screens/RoomScanConfirmScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        appdata: [], // this is a list, but it could be a string as well
    }
  } 

  render(){

    return(

    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        //initialParams={}
      />

      <Stack.Screen
        name="RoomSelect"
        component={RoomSelectScreen}
        //initialParams={}
      />

      <Stack.Screen
        name="Room"
        component={RoomScreen}
        //initialParams={}
      />

      <Stack.Screen
        name="ObjectSelect"
        component={ObjectSelectScreen}
        //initialParams={}
      />

      <Stack.Screen
        name="RoomScan"
        component={RoomScanScreen}
        //initialParams={}
      />

      <Stack.Screen
        name="RoomScanConfirm"
        component={RoomScanConfirmScreen}
        //initialParams={}
      />

    </Stack.Navigator>
  </NavigationContainer>

    );
  }
}

export default App;
