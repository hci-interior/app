import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class RoomScanConfirmScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomscanconfirm: [], // this is a list, but it could be a string as well
        }
    }

    render() {
        return(
            <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
                <StatusBar style="auto" />
                <Text h4 style={{textAlign:'center', margin:8}}>Is this your Room?</Text>
                <Icon
                    name="square"
                    size={200}
                    color="black"
                    style={{flex:1, marginTop:30}}
                />
                <Text h4 style={{textAlign:'center', margin:8}}>20 x 20 </Text>
                <View style={{flex: 1, flexDirection: 'row',alignItems:'flex-start', justifyContent:'center',}}>
                    <Icon
                    name="check"
                    size={60}
                    color="black"
                    style={{flex:1, justifyContent:'center'}}
                />
                <Icon
                    name="close"
                    size={60}
                    color="black"
                    style={{flex:1,justifyContent:'center' }}
                />
                </View>
            </View>
        )
    }
}

export default RoomScanConfirmScreen;