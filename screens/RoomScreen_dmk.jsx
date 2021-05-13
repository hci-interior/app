import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, TouchableOpacity, Image } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import { Text, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class RoomScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomdata: [], // this is a list, but it could be a string as well
        }
    }

    render() {        
        return(
            <View>
                <StatusBar style="auto" />
                <Text h4 style={{textAlign:'center', margin:8}}>Here you are in your room. Move around and add objects by clicking the Plus-Button!</Text>
                <Button type="solid" buttonStyle={styles.Buttons} raised="true" title="" icon={
                            <Icon
                                name="plus"
                                size={25}
                                color="white"
                                style={{margin:8}}
                            />}

                            onPress={() => this.props.navigation.navigate('ObjectSelect')}
                        />
            </View>
        )
    }
}

export default RoomScreen;
