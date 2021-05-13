import React from 'react';
import {Component} from 'react';
import { ImageBackground, View, Button, StyleSheet, Image} from 'react-native';
import { Text } from 'react-native-elements';

export default class MyRoom extends Component{
    constructor(props){
        super(props);
        this.u = this.props.route.params.u;
        this.bottom = this.props.route.params.b;
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
                         <Button title={"+"}
                            onPress={()=> this.props.navigation.navigate("SelectFurniture")}
                        />
                        <Text>{"\n"}</Text>
                    </View>

                    <View  style={{width: '33%', height: '33%',alignItems: "center"}}>
                        {console.log("b = " + this.bottom)}
                         <Image source={this.bottom} style={{ resizeMode: 'cover', width: '100%', height: '100%'}}/>               
                         <Button title={"+"}
                            onPress={()=> this.props.navigation.navigate("SelectFurniture")}
                        />
                        <Text>{"\n"}</Text>
                    </View>

                    <View  style={{width: '33%', height: '33%',alignItems: "flex-end"}}>
                        {console.log("b = " + this.bottom)}
                         <Image source={this.bottom} style={{ resizeMode: 'cover', width: '100%', height: '100%'}}/>               
                         <Button title={"+"}
                            onPress={()=> this.props.navigation.navigate("SelectFurniture")}
                        />
                        <Text>{"\n"}</Text>
                    </View>
                    
                </View>
                </ImageBackground>
            </View>
        );
    }
}