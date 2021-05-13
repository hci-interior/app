import React from 'react';
import {Component} from 'react';
import { ImageBackground, View, Button, StyleSheet, Image} from 'react-native';
import { Text } from 'react-native-elements';

export default class SelectRoomScreen extends Component{
    render(){
        return(
            <View  View style={{flex:1, }}>
                <View  style={{width: '100%', height: '50%',  justifyContent: "center",alignItems: "center"}}>
                    <Image source={{uri: "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} style={{ resizeMode: 'cover', width: '100%', height: '100%',  opacity: 0.7}}/>
                        <View style={{ position: 'absolute'}}>
                            <Button title={"Select Room"}
                                onPress={()=> this.props.navigation.navigate("MyRoom", {u: "https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})}
                            />
                            <Text>{"\n"}</Text>
                        </View>
                </View>

                <View  style={{width: '100%', height: '50%',  justifyContent: "center",alignItems: "center"}}>
                    <Image source={{uri: "https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} style={{ resizeMode: 'cover', width: '100%', height: '100%',  opacity: 0.7}}/>
                        <View style={{ position: 'absolute'}}>
                            <Button title={"Select Room"}
                                onPress={()=> this.props.navigation.navigate("MyRoom", {u: "https://images.pexels.com/photos/271649/pexels-photo-271649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})}
                            />
                            <Text>{"\n"}</Text>
                        </View>
                </View>

                <View  style={{width: '100%', height: '50%',  justifyContent: "center",alignItems: "center"}}>
                    <Image source={{uri: "https://images.pexels.com/photos/803908/pexels-photo-803908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} style={{ resizeMode: 'cover', width: '100%', height: '100%',  opacity: 0.7}}/>
                        <View style={{ position: 'absolute'}}>
                            <Button title={"Select Room"}
                                onPress={()=> this.props.navigation.navigate("MyRoom", {u: "https://images.pexels.com/photos/803908/pexels-photo-803908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})}
                            />
                            <Text>{"\n"}</Text>
                        </View>
                </View>
            </View>
        );
    }
}