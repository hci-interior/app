import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import {View, TouchableOpacity, ImageBackground,} from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundButton from '../components/RoundButton'

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
                    source={require('../assets/bg_sophia_2.jpg')}
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
                    <View style={styles.bottom}>
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
                    </View>
                </ImageBackground>
            </View>
        );

    }
}


export default HomeScreen;

