import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, Alert, TouchableOpacity, Image, ImageBackground } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import { Text, Input, Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            homedata: [], // this is a list, but it could be a string as well
        }
    }

    render() {        
        return(
                <View style={styles.bottom}>

                    <ImageBackground source={require("../assets/bg.jpg")} style={styles.backgroundImage}>
                        <StatusBar style="auto" />
                        <Text style={styles.title}>INTERIOR designer</Text>
                        <Button type="solid" buttonStyle={styles.Buttons} raised="true" title="Select room" icon={
                            <Icon
                                name="cube"
                                size={40}
                                color="white"
                                style={{margin:8}}
                            />}

                            onPress={() => this.props.navigation.navigate('RoomSelect')}
                        />
                        <Button type="solid" buttonStyle={styles.Buttons} raised="true" title="Scan a new room" icon={
                            <Icon
                                name="video-camera"
                                size={35}
                                color="white"
                                style={{margin:8}}
                            />}
                            onPress={() => this.props.navigation.navigate('RoomScan')}
                        />
                        <Button type="solid" buttonStyle={styles.Buttons} raised="true" title="Select object" icon={
                            <Icon
                                name="diamond"
                                size={35}
                                color="white"
                                style={{margin:8}}
                            />}
                            onPress={() => this.props.navigation.navigate('ObjectSelect')}
                        />
                    </ImageBackground>

                </View>
        )
    }
}

export default HomeScreen;
