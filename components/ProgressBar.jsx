import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import { colors } from 'react-native-elements';
import {Colors} from '../colors.js';

export default class ProgressBar extends Component {
    state={
        progressStatusValue: 0,
    }
    animation = new Animated.Value(0);  //initialisation of Animated component to with initial value as the zero for start of the progress bar.
    componentDidMount(){
        this.onAnimation();  //calling onAnimation function with changing the value of the initial progress status value.
    }
    onAnimation = () =>{
        this.animation.addListener(({value})=> {
        this.setState({progressStatusValue: parseInt(value,10)});
    });
    
        Animated.timing(this.animation,{
            toValue: 100,  //value at which it need to reach for end of the progress bar
            duration: 13000,  //duration till the progress bar will continue
            }).start();
    }
    render() {
        return (
            <View style={progressStyles.containerStyle}>
                <Animated.View
                    style={[
                    progressStyles.innerStyle,{width: this.state.progressStatusValue +"%"},
                    ]}
                />
                <Animated.Text style={progressStyles.label}>
                    {this.state.progressStatusValue }% scanned
                </Animated.Text>
            </View>
        );
        }
}

    //basic styles for creation of progress bar
const progressStyles = StyleSheet.create({
    containerStyle: {
        width: "80%",
        height: "1.5em",
        paddingLeft:"1%",
        paddingRight:"1%",
        borderRadius: "1.5em",
        marginTop: "1%",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor:"#b4ca9b",
        opacity: 0.6,
    },
    innerStyle:{
        width: "80%",
        height: "1.2em",
        borderRadius: "0.8em",
        backgroundColor: "#75964f",
    },
    label:{
        fontSize:12,
        color: colors.colorA,
        position: "absolute",
        zIndex: 1,
        alignSelf: "center",
        backgroundColor:"transparent",
    }
});