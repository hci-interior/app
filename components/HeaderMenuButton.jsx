import React from 'react';
import { Button } from 'react-native-elements';
import styles from '../stylesheet';
import {Colors} from '../colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderMenuButton extends React.Component {
  
    render(){

    return (
            <Button
              onPress = {this.props.onPress}
              color="#fff"
              buttonStyle={{backgroundColor: Colors.colorA, padding: 16}}
              icon={
                <Icon
                    name="bars"
                    size={18}
                    color="white"
                    style={{margin:0, padding:0}}
                />}
            />
    )
  }
}