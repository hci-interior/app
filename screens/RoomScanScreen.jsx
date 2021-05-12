import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, TouchableOpacity, Image } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import { Text, Input } from 'react-native-elements';

class RoomScanScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomscandata: [], // this is a list, but it could be a string as well
        }
    }

    render() {        
        return(
            <View>
                <StatusBar style="auto" />
                <Text h4 style={{textAlign:'center', margin:8}}>We are scanning now your room</Text>
            </View>
        )
    }
}

export default RoomScanScreen;
