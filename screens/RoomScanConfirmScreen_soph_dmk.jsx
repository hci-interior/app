import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Alert, Image } from 'react-native';
import { Text } from 'react-native-elements';
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
            <View
            style={{flex:1, width: "100%", height:"100%",flexDirection:'column', justifyContent:"space-evenly" }}
            resizeMode="contain"
            >
                <StatusBar style="auto" />
                <Text h3 style={{textAlign:'center', margin:16}}>Is this your room?</Text>
                
                <Image
                    style={{ flex:1, height: "55%", alignSelf: "center"}}
                    resizeMode="contain"
                    source={this.state.room_sketches[sketchIndex]}
                />

                <View style={{flexDirection:'row', maxHeight:"40%", justifyContent:"space-evenly", marginBottom: "5%"}}>
                    <RoundCancelButton
                        resizeMode="contain"
                        onPress={() => {
                            this.props.navigation.navigate('Home')
                        }}
                    
                    />                
                    <RoundConfirmButton
                        resizeMode="contain"                 
                        onPress={() => {
                            Alert.alert(
                                "Saved!",
                                "Saved to My Rooms!",
                              );
                            this.props.navigation.navigate('Home')
                            }
                        }
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
