import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import {View, TouchableOpacity, Image, Button, ImageBackground,} from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import { Text, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            homedata: [], // this is a list, but it could be a string as well
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/bg_sophia.jpg')}
                style={styles.backgroundImage_sophia}>

                <StatusBar style="auto"/>
                <Text style={{
                    textAlign: 'center',
                    margin: 25,
                    fontSize: 35,
                    fontWeight: 'bold',
                }}>
                    INTERIOR DESIGNER
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomScan')}>
                    <View style={styles.button_sophia}>
                        <Text style={styles.buttonText_sophia}>Neuen Raum Scannen</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomSelect')}>
                    <View style={styles.button_sophia}>
                        <Text style={styles.buttonText_sophia}>Meine Räume</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ObjectSelect')}>
                    <View style={styles.button_sophia}>
                        <Text style={styles.buttonText_sophia}>Objekte</Text>
                    </View>
                </TouchableOpacity>


            </ImageBackground>
            //</View>
        );

    }
}


export default HomeScreen;

