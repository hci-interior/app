import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from '../stylesheet';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import RoundCancelButton from '../components/RoundCancelButton'
import RoundConfirmButton from '../components/RoundConfirmButton'
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

class RoomScanConfirmScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            room_sketches: [require("../assets/room_sketches/r_sketch_01.png"),require("../assets/room_sketches/r_sketch_02.png"),require("../assets/room_sketches/r_sketch_03.png")], // this is a list, but it could be a string as well
            confirm_visible: false,
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    render() {     
        
        const sketchIndex = this.getRandomInt(3);
        
        return(
            <View>
                <StatusBar style="auto" />
                <Text h4 style={{textAlign:'center', margin:8}}>Scanning result</Text>
                <Text h3 style={{textAlign:'center', margin:8}}>Is this your room?</Text>
                
                <Image
                    style={{ width: 340, height: 340, alignSelf:"center"}}
                    source={this.state.room_sketches[sketchIndex]}
                />

                <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
                    <RoundCancelButton
                        onPress={() => {
                            this.props.navigation.navigate('Home')
                        }}
                    
                    />                
                    <RoundConfirmButton                    
                        onPress={() => {
                            {this.setState({ confirm_visible: true });
                            this.props.navigation.navigate('Home')
                            }
                        }}
                    />
                    <Dialog
                        visible={this.state.confirm_visible}
                        footer={
                            <DialogFooter>
                              <DialogButton
                                text="OK"
                                onPress={() => {this.setState({ confirm_visible: false })}}
                                />
                            </DialogFooter>
                          }
                        >
                        <DialogContent>
                            <Text h4 style={{textAlign:'center', margin:12}} >New room saved</Text>
                        </DialogContent>

                    </Dialog>
                </View>
            </View>
        )
    }
}

export default RoomScanConfirmScreen;
