import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
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
    </Stack.Navigator>
  </NavigationContainer>

    );
  }
}

export default App;
