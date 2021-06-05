import React from 'react';
import {Component} from 'react';
import { ImageBackground, View, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheet';


export default class ObjectScreen extends Component{
    constructor(props){
        super(props);
        this.object_img = this.props.route.params.object_img;
        this.object_name = this.props.route.params.object_name;
        this.ary = [];
        this.state = {
        };
    }
    render(){

        return(
            <View  View style={{flex:1, flexDirection:"column", justifyContent:"flex-start"}} >
                <ImageBackground resizeMode="contain" source={this.object_img} style={{width: '90%', height: '100%', justifyContent:'space-between', alignSelf:"center"}}>
                    <View>
                    <Text style={{marginTop:20,fontSize:16}}>Name:       {this.object_name}</Text>
                    <Text style={{fontSize:14}}>Created on:  2021-06-05 12:31 AM</Text>
                    <Text style={{fontSize:14}}>Last Edit:      2021-06-05 12:44 AM</Text>
                    </View>
                    <View  style={{width: '100%', height: '20%',alignItems: "center", justifyContent:"space-evenly", flexDirection:"row"}}>
                        
                        <TouchableOpacity style={styles.roomScanButton}
                            onPress={()=> {
                               
                                Alert.alert(
                                  "Deleted!",
                                  "Your Object has been deleted",
                                  [
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                  ]
                                );
                            }}
                            >
                            <Icon
                                name="trash-o"
                                size={30}
                                color="white"
                                style={{margin:0}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.roomScanButton}
                            onPress={()=> {
                                
                                Alert.alert(
                                  "Edited!",
                                  "Your Object has been edited",
                                  [
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                  ]
                                );
                            }}
                            >
                            <Icon
                                name="edit"
                                size={30}
                                color="white"
                                style={{margin:0}}
                            />
                        </TouchableOpacity>

                        
                        <TouchableOpacity style={styles.roomScanButton}
                            onPress={()=> {
                                
                                Alert.alert(
                                  "Saved!",
                                  "Your Object has been saved",
                                  [
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                  ]
                                );
                            }}
                            >
                            <Icon
                                name="save"
                                size={30}
                                color="white"
                                style={{margin:0}}
                            />
                        </TouchableOpacity>


                        
                    </View>
                </ImageBackground>
            </View>
        );
    }
}