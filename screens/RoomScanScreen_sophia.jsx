import React from "react";
import {
    View,
    TouchableOpacity,
} from "react-native";
import { Text, Input } from 'react-native-elements';
import { Camera } from "expo-camera";
import styles from "../stylesheet";
import * as ScreenOrientation from 'expo-screen-orientation';

class RoomScanScreen extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        roomscandata: [],
        orientation:ScreenOrientation.OrientationLock.LANDSCAPE,
    }
}

componentDidMount(){
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(()=>{
        this.props.navigation.navigate('RoomScanConfirm')
    }, 5000);
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
            />
            <View >
                <Text style={{justifyContent: 'center',alignSelf: 'center',fontSize: 14, color:'white', }}> Capture your Room </Text>
                <TouchableOpacity onPress={ this.takePicture.bind(this)} style={styles.capture}>
                    <Text style={{ fontSize: 14, color: 'white', }}> SNAP </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

takePicture = async () => {
    if (this.camera) {
        this.setState({
            roomscandata: await this.camera.takePictureAsync(options),
        });
    }
}
}
export default RoomScanScreen;
