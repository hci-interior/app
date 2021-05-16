import React from 'react';
import { Button } from 'react-native-elements';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen_soph_dmk';
import RoomSelectScreen from './screens/RoomSelectScreen_asim_dmk';
import RoomScreen from './screens/RoomScreen_asim';
import ObjectSelectScreen from './screens/ObjectSelectScreen_asim_dmk';
import RoomScanScreen from './screens/RoomScanScreen_sophia';
import RoomScanConfirmScreen from './screens/RoomScanConfirmScreen_soph_dmk';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from './colors.js';
import HeaderMenuButton from './components/HeaderMenuButton'
import HeaderHomeButton from './components/HeaderHomeButton'

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        rooms:[
          {id:0,name:"Wohnzimmer von Asim",img:{uri: "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}},
          {id:1,name:"Arbeitsraum Sophia",img:{uri: "https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}},
          {id:2,name:"Wohnzimmer Dominik",img:{uri: "https://images.pexels.com/photos/803908/pexels-photo-803908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}},
          {id:3,name:"Wohnzimmer Dominik",img:require('./assets/rooms/room1.jpg')},
          {id:4,name:"Wohnzimmer Dominik",img:require('./assets/rooms/room2.jpg')},
          {id:5,name:"Wohnzimmer Dominik",img:require('./assets/rooms/room3.jpg')},
          {id:6,name:"Wohnzimmer Dominik",img:require('./assets/rooms/room4.jpg')},
          {id:7,name:"Wohnzimmer Dominik",img:require('./assets/rooms/room5.png')},
        ],
        objects:[
          {id:0,name:'bed',img:require('./assets/objects/bed1.png')},
          {id:1,name:'bed',img:require('./assets/objects/bed2.png')},
          //{id:2,name:'bed',img:require('./assets/objects/bed3.png')},
          {id:3,name:'bed',img:require('./assets/objects/bed4.png')},
  
          {id:4,name:'chair',img:require('./assets/objects/chair.png')},
          //{id:5,name:'chair',img:require('./assets/objects/chair2.png')},
          //{id:6,name:'chair',img:require('./assets/objects/chair3.png')},

          {id:7,name:'closet',img:require('./assets/objects/closet.png')},
          //{id:8,name:'closet',img:require('./assets/objects/closet2.png')},
          {id:9,name:'closet',img:require('./assets/objects/closet3.png')},
          
          //{id:10,name:'couch',img:require('./assets/objects/couch.png')},
          //{id:11,name:'couch',img:require('./assets/objects/couch2.png')},

          {id:12,name:'dresser',img:require('./assets/objects/dresser1.png')},
          {id:13,name:'dresser',img:require('./assets/objects/dresser2.png')},
          {id:14,name:'dresser',img:require('./assets/objects/dresser3.png')},
          {id:15,name:'dresser',img:require('./assets/objects/dresser.png')},
          
          {id:16,name:'table',img:require('./assets/objects/table.png')},
          //{id:17,name:'table',img:require('./assets/objects/table2.png')},
          //{id:18,name:'table',img:require('./assets/objects/table3.png')},

          //{id:19,name:'tv',img:require('./assets/objects/tv.png')},
          //{id:20,name:'tv',img:require('./assets/objects/tv2.png')},
          ],
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
        options={({  }) => ({
          headerTitleAlign:'center',
          title: "",
          headerShown:true,
          headerLeft: () => (<HeaderMenuButton/>),
        })}
        //initialParams={}
      />

      <Stack.Screen
        name="RoomSelect"
        component={RoomSelectScreen}
        options={({ navigation }) => ({
          title: 'Selecting a room',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: Colors.colorA,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerRight: () => (<HeaderHomeButton
            onPress={() => navigation.navigate('Home')}       
          />),
        })}
        initialParams={{rooms:this.state.rooms}}
        //initialParams={}
      />

      <Stack.Screen
        name="Room"
        component={RoomScreen}
        options={({ navigation }) => ({
          title: '',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: Colors.colorA,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerShown: true,
          headerRight: () => (<HeaderHomeButton
            onPress={() => navigation.navigate('Home')}
         
          />),
        })}
        //initialParams={}
      />

      <Stack.Screen
        name="ObjectSelect"
        component={ObjectSelectScreen}
        initialParams={{objects:this.state.objects}}

        options={({ navigation }) => ({
          title: 'Selecting an object',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: Colors.colorA,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerShown: true,
          headerRight: () => (
          <HeaderHomeButton
            onPress={() => navigation.navigate('Home')}
          />
          ),

        })}

      />

      <Stack.Screen
        name="RoomScan"
        component={RoomScanScreen}
        //options={{headerShown:false}}
        options={({ navigation }) => ({
          title: 'Scanning',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: Colors.colorA,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerShown: true,
          headerRight: () => (<HeaderHomeButton
            onPress={() => navigation.navigate('Home')}
          />),
        })}
        //initialParams={}
      />

      <Stack.Screen
        name="RoomScanConfirm"
        component={RoomScanConfirmScreen}
        options={({ navigation }) => ({
          title: 'Scanning results',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: Colors.colorA,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerShown: true,
          headerRight: () => (<HeaderHomeButton
            onPress={() => navigation.navigate('Home')}
            />),
        })}
        //initialParams={}
      />

    </Stack.Navigator>
  </NavigationContainer>

    );
  }
}

export default App;
