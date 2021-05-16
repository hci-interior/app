import React from 'react';
import { Button } from 'react-native-elements';
import {Colors} from '../colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderHomeButton extends React.Component {
  
  
    render(){
    return (
            <Button
            onPress = {this.props.onPress}
            color="#fff"
            buttonStyle={{backgroundColor: Colors.colorA, padding: 16}}
            icon={
            <Icon
                name="home"
                size={24}
                color="white"
                style={{margin:0}}
                />}
            />
    )
  }
}