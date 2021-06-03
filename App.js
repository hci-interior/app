import React from 'react';
import { Text } from 'react-native-elements';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen_soph_dmk';
import RoomSelectScreen from './screens/RoomSelectScreen_asim_dmk';
import RoomScreen from './screens/RoomScreen_asim';
import ObjectSelectScreen from './screens/ObjectSelectScreen_asim_dmk';
import RoomScanScreen from './screens/RoomScanScreen_sophia';
import RoomScanConfirmScreen from './screens/RoomScanConfirmScreen_soph_dmk';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from './colors.js';
import HeaderMenuButton from './components/HeaderMenuButton';
import HeaderHomeButton from './components/HeaderHomeButton';
import OurSettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        rooms:[
          {id:0,name:"Wohnzimmer von Asim",img:{uri: "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}},
          {id:1,name:"Arbeitsraum Sophia",img:{uri: "https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}},
          {id:2,name:"Wohnzimmer Dominik",img:{uri: "https://images.pexels.com/photos/803908/pexels-photo-803908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}},
          {id:3,name:"Kunde Schönbrunner Straße",img:require('./assets/rooms/room1.jpg')},
          {id:4,name:"Kunde Margarentenstraße",img:require('./assets/rooms/room2.jpg')},
          {id:5,name:"Kunde Praterstraße",img:require('./assets/rooms/room3.jpg')},
          {id:6,name:"Kunde Thaliastraße",img:require('./assets/rooms/room4.jpg')},
          {id:7,name:"Kunde Rennweg",img:require('./assets/rooms/room5.png')},
        ],
        objects:[
          {id:0,name:'Bett von willhaben',img:require('./assets/objects/bed1.png')},
          {id:1,name:'Doppelbett 2',img:require('./assets/objects/bed2.png')},
          {id:2,name:'Bett (verkauft)',img:require('./assets/objects/bed3.png')},
          {id:3,name:'Bett grau',img:require('./assets/objects/bed4.png')}, 
          {id:4,name:'Sessel 1',img:require('./assets/objects/chair.png')},
          {id:5,name:'Sessel gelb',img:require('./assets/objects/chair2.png')},
          {id:6,name:'Sessel, bequem',img:require('./assets/objects/chair3.png')},
          {id:7,name:'Schrank 1',img:require('./assets/objects/closet.png')},
          {id:8,name:'Schrank 2',img:require('./assets/objects/closet2.png')},
          {id:9,name:'Schrank 3',img:require('./assets/objects/closet3.png')},       
          {id:10,name:'Sofa mit Lehne',img:require('./assets/objects/couch.png')},
          {id:11,name:'Sofa alternativ',img:require('./assets/objects/couch2.png')},
          {id:12,name:'Anrichte 1',img:require('./assets/objects/dresser1.png')},
          {id:13,name:'Kommode',img:require('./assets/objects/dresser2.png')},
          {id:14,name:'Kommode B',img:require('./assets/objects/dresser3.png')},
          {id:15,name:'Nachttisch',img:require('./assets/objects/dresser.png')},
          {id:16,name:'Tisch 110x140',img:require('./assets/objects/table.png')},
          {id:17,name:'Tisch 100x100',img:require('./assets/objects/table2.png')},
          {id:18,name:'Tisch 200 lang',img:require('./assets/objects/table3.png')},
          {id:19,name:'Fernseher MM',img:require('./assets/objects/tv.png')},
          {id:20,name:'TV-Set 1',img:require('./assets/objects/tv2.png')},
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
        options={({ navigation }) => ({
          headerTitleAlign:'center',
          title: "INTERIOR DESIGNER",
          headerShown:true,
          headerStyle: {
            backgroundColor: Colors.colorA,
          },
          headerTintColor: 'white',
          headerLeft: () => (<HeaderMenuButton
            onPress={() => navigation.navigate('Settings')}       
          />),
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
        name="Settings"
        component={OurSettingsScreen}
        options={({ navigation }) => ({
          title: 'Settings',
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
          title: 'Scanning ...',
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
          headerLeft: () => (<Text></Text>),
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
          headerLeft: () => (<Text></Text>),
        })}
        //initialParams={}
      />

    </Stack.Navigator>
  </NavigationContainer>

    );
  }
}

export default App;
