import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import RoundCancelButton from '../components/RoundCancelButton'
import RoundConfirmButton from '../components/RoundConfirmButton'

class RoomScanConfirmScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomscanconfirm: [], // this is a list, but it could be a string as well
        }
    }

    render() {        
        return(
            <View>
                <StatusBar style="auto" />
                <Text h4 style={{textAlign:'center', margin:8}}>Is this your room?</Text>
                <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
                <RoundCancelButton/>                
                <RoundConfirmButton/>
                </View>
                

            </View>
        )
    }
}

export default RoomScanConfirmScreen;
