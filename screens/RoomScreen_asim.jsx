import React from 'react';
import {Component} from 'react';
import { ImageBackground, View, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';
import { Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheet';


export default class Room extends Component{
    constructor(props){
        super(props);
        this.room_img = this.props.route.params.room_img;
        this.bottom = this.props.route.params.object_img;
        this.ary = [];
        this.state = {
        };
    }
    render(){
        console.log("b = " + this.props.route.params.object_img);
        if(this.props.route.params.object_img != undefined)
            this.ary.push({id: this.ary.length, img: this.props.route.params.object_img});
        console.log("ary = " + this.ary);

        return(
            <View  View style={{flex:1, }} >
                <ImageBackground source={this.room_img} style={{width: '100%', height: '100%', justifyContent:'flex-end'}}>
                
                <View style={{width: '100%', height: '100%', justifyContent:'center', position:'absolute'}}>
                 {this.ary.map((el) => 
                    <View key={el.id}> 
                        <Image source={el.img} style={{ resizeMode: 'contain', width: '95%', height: '95%', margin:100}}/>
                    </View>
                 )}
               
                
                {/*<Image source={this.props.route.params.object_img} style={{ resizeMode: 'contain', width: '95%', height: '95%'}}/>*/}          
                
                </View>
                
                    <View  style={{width: '100%', height: '20%',alignItems: "center", justifyContent:"space-evenly", flexDirection:"row"}}>
                        
                        <TouchableOpacity style={styles.roomScanButton}
                            onPress={()=> {
                                this.ary=[];
                                console.log("ARRAY AFTER DELETE = " + this.ary);
                                this.props.route.params.object_img = undefined;
                                this.setState({});
                                this.props.navigation.navigate('Room');
                            }}
                            >
                            <Icon
                                name="trash-o"
                                size={40}
                                color="white"
                                style={{margin:0}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.roomScanButton}
                            onPress={()=> this.props.navigation.navigate("ObjectSelect")}
                            >
                            <Icon
                                name="plus"
                                size={40}
                                color="white"
                                style={{margin:0}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.roomScanButton}
                            onPress={()=> {
                                console.log("SAVED");
                                
                                Alert.alert(
                                  "Saved!",
                                  "Your Room has been saved",
                                  [
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                  ]
                                );
                            }}
                            >
                            <Icon
                                name="save"
                                size={40}
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