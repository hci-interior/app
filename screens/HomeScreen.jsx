import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, TouchableOpacity, Image } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import { Text, Input } from 'react-native-elements';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            homedata: [],
        }
    }

    render() {        
        return(
            <View>
                <StatusBar style="auto" />
                <Text h4 style={{textAlign:'center', margin:8}}>This is the home screen</Text>
            </View>
        )
    }
}

export default HomeScreen;
