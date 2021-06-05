import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import {View, Image, TouchableOpacity, ImageBackground,} from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../colors.js';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            homedata: [], // this is a list, but it could be a string as well
        }
    }

    render() {
        return (

            <View style={styles.homeScreenContainer}>
                <ImageBackground
                    source={require('../assets/bg_sophia.jpg')}
                    style={styles.backgroundImage}>
                    <StatusBar style="auto"/>

                    <Image
                        style={{flex: 1, width: "75%"}}
                        resizeMode="contain"
                        source={require("../assets/logo_soph.png")}
                    />

                    <View style={styles.homescreen_buttons}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomScan')} style={styles.button_sophia}>
                            <Icon
                                name="video-camera"
                                size={30}
                                color={Colors.colorA}
                                style={{margin:2}}
                            />
                            <Text style={styles.buttonText_sophia}>Scan New Room</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomSelect')} style={styles.button_sophia}>
                           <Icon
                                name="cube"
                                size={30}
                                color={Colors.colorA}
                                style={{margin:2}}
                            />
                            <Text style={styles.buttonText_sophia}>My Rooms</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ObjectLibrary')} style={styles.button_sophia}>
                            <Icon
                                    name="diamond"
                                    size={25}
                                    color={Colors.colorA}
                                    style={{margin:2}}
                                />
                            <Text style={styles.buttonText_sophia}>My Objects</Text>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );

    }
}


export default HomeScreen;

