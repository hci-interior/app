import React from 'react';
import {Component} from 'react';
import { ImageBackground, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
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
                

                    <View  style={{width: '100%', height: '20%',alignItems: "center"}}>
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
                </ImageBackground>
            </View>
        );
    }
}