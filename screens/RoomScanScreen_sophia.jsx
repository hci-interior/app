import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import {View, TouchableOpacity, Image, Button, ImageBackground,} from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import { Text, Input } from 'react-native-elements';
import RNCamera from 'react-native-camera';

class RoomScanScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomscandata: [],
        }
    }

    render() {
        return(
            <View style={styles.containerScan}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    // type={RNCamera.Constants.Type.back}

                />

                <View >
                    <Text style={{justifyContent: 'center',alignSelf: 'center',fontSize: 14, color:'white', }}> Capture your Room </Text>
                    <TouchableOpacity onPress={ this.onPress()} style={styles.capture}>
                        <Text style={{ fontSize: 14, color: 'white', }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onPress = async () => {
        this.takePicture.bind(this);
        this.props.navigation.navigate('RoomScanConfirmScreen');
    }

    // takePicture = async () => {
    //     if (this.camera) {
    //         this.setState({
    //             roomscandata: await this.camera.takePictureAsync(options),
    //         });
    //     }
    // }
}

export default RoomScanScreen;