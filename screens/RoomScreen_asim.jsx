import React from 'react';
import {Component} from 'react';
import { ImageBackground, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheet';

export default class Room extends Component{
    constructor(props){
        super(props);
        this.u = this.props.route.params.u;
        this.bottom = this.props.route.params.object_img;
        this.state = {
        };
    }
    render(){
        return(
            <View  View style={{flex:1, }} >
                <ImageBackground source={{uri: this.u}} style={{width: '100%', height: '100%', justifyContent:'flex-end'}}>
                
                <View style={{flexDirection:'row'}}>


                    <View  style={{width: '33%', height: '33%',alignItems: "flex-start"}}>
                        {console.log("b = " + this.bottom)}
                         <Image source={this.bottom} style={{ resizeMode: 'cover', width: '100%', height: '100%'}}/>               
                         <TouchableOpacity style={styles.roundButton}
                            onPress={()=> this.props.navigation.navigate("ObjectSelect")}
                        >
                            <Icon
                                name="plus"
                                size={40}
                                color="white"
                                style={{margin:8}}
                            />
                        </TouchableOpacity>
                 
                    </View>

                    <View  style={{width: '33%', height: '33%',alignItems: "center"}}>
                        {console.log("b = " + this.bottom)}
                         <Image source={this.bottom} style={{ resizeMode: 'cover', width: '100%', height: '100%'}}/>               
                         <TouchableOpacity style={styles.roundButton}
                            onPress={()=> this.props.navigation.navigate("ObjectSelect")}
                            >
                            <Icon
                                name="plus"
                                size={40}
                                color="white"
                                style={{margin:8}}
                            />
                        </TouchableOpacity>
                    </View>

                    <View  style={{width: '33%', height: '33%',alignItems: "flex-end"}}>
                        {console.log("b = " + this.bottom)}
                         <Image source={this.bottom} style={{ resizeMode: 'cover', width: '100%', height: '100%'}}/>               
                         <TouchableOpacity style={styles.roundButton}
                            onPress={()=> this.props.navigation.navigate("ObjectSelect")}
                            >
                            <Icon
                                name="plus"
                                size={40}
                                color="white"
                                style={{margin:8}}
                            />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                </ImageBackground>
            </View>
        );
    }
}