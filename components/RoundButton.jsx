import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from '../stylesheet';

export default class RoundButton extends React.Component {
  render(){
    return (
        <TouchableOpacity
        style={styles.roundButton2}
        onPress = {this.props.onPress}
        >
          {this.props.children}
        </TouchableOpacity>
    )
  }
}
