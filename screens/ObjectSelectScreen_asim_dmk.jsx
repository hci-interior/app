import React from 'react';
import {Component} from 'react';
import { ImageBackground, View, Button, StyleSheet, Image} from 'react-native';
import { Text } from 'react-native-elements';
import styles from '../stylesheet';

export default class ObjectSelectScreen extends Component{
    render(){
        return(
            <View  View style={{flex:1, }}>
                <View  style={{width: '100%', height: '100%',  justifyContent: "center",alignItems: "center"}}>
                    <Image source={require('./../assets/chair.png')} style={{ resizeMode: 'cover', width: '70%', height: '50%'}}/>
                        <View>
                            <Button title={"Select this Furniture"}
                                onPress={()=> this.props.navigation.navigate('Room', {
                                    params: { b: require('./../assets/chair.png')},
                                  })}
                            />
                            <Text>{"\n\n\n\n\n\n\n\n"}</Text>

                        </View>
                </View>

                <View  style={{width: '100%', height: '100%',  justifyContent: "center",alignItems: "center"}}>
                    <Image source={require('./../assets/dresser.png')} style={{ resizeMode: 'cover', width: '50%', height: '50%'}}/>
                        <View>
                            <Button title={"Select this Furniture"}
                                onPress={()=> this.props.navigation.navigate('Room', {
                                    params: { b: require('./../assets/dresser.png')},
                                  })}
                            />
                            <Text>{"\n\n\n\n\n\n\n\n"}</Text>
                        </View>
                </View>

                <View  style={{width: '100%', height: '100%',  justifyContent: "center",alignItems: "center"}}>
                    <Image source={require('./../assets/closet.png')} style={{ resizeMode: 'cover', width: '50%', height: '50%'}}/>
                        <View>
                            <Button title={"Select this Furniture"}
                                onPress={()=> this.props.navigation.navigate('Room', {
                                    params: { b: require('./../assets/closet.png')},
                                  })}
                            />
                            <Text>{"\n\n\n\n\n\n\n\n"}</Text>
                        </View>
                </View>

            </View>
        );
    }
}