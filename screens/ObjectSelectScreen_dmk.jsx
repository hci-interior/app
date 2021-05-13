import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, TouchableOpacity, Image } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import { Text, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class ObjectSelectScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            objectselectdata: [], // this is a list, but it could be a string as well
        }
    }

    render() {        
        return(
            <View>
                <StatusBar style="auto" />
                <Text h4 style={{textAlign:'center', margin:8}}>Here you select an object</Text>
                <Text style={{textAlign:"center",margin:8}}>(Here a list of objects to choose from will be shown. After selecting an object you ll be redirected to the RoomScreen and the object will be placed right in front of you.</Text>

                <Button type="solid" buttonStyle={styles.Buttons} raised="true" title="Add this object to your room" icon={
                        <Icon
                            name="diamond"
                            size={25}
                            color="white"
                            style={{margin:8}}
                        />}

                        onPress={() => this.props.navigation.navigate('Room')}
                    />

            </View>
        )
    }
}

export default ObjectSelectScreen;
