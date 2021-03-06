import React, { useState, useRef, useEffect } from "react";
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { Text, Input } from 'react-native-elements';
import { Camera } from "expo-camera";
import styles from "../stylesheet";
import SplashScreen from  "react-native-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import styles from "../stylesheet";
//import HomeScreen from "./HomeScreen";
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundCancelButton from "../components/RoundCancelButton";

class RoomScanScreen extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        roomscandata: [],
    }
}

componentDidMount(){
   // Orientation.lockToLandscape();
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
        this.props.navigation.navigate('RoomScanConfirm')
    }, 20000);
}

componentWillUnmount(){
    clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
}

render() {
    return(
        <View style={styles.containerScan}>
            <Camera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={Camera.Constants.Type.back}
            >
            <View style={{flex:1,flexDirection:'row',alignItems:'center', justifyContent:'center', backgroundColor:'transparent'}}>
                 <Icon
                    name="angle-double-left"
                    size={60}
                    color="white"
                    style={{
                        flex:1,
                        paddingLeft:30,
                        alignContent:'flex-start',
                    }}/>
                <Icon
                    name="angle-double-right"
                    size={60}
                    color="white"
                    style={{
                        flex:0,
                        paddingRight:30,
                        alignContent:'flex-end',
                    }}
                   />

            </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.cancel}>
                    <Text style={{ fontSize: 20, color: 'white', }}> Cancel Scan </Text>
                    <Icon
                        name="close"
                        size={40}
                        color="white"
                        style={{margin:8}}
                    />
                </TouchableOpacity>

                </Camera>
        </View>
    );
}
/*
takePicture = async () => {
    if (this.camera) {
        this.setState({
            roomscandata: await this.camera.takePictureAsync(options),
        });
    }
}*/
}
export default RoomScanScreen;
