import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from '../stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RoundButton extends React.Component {
  render(){
    return (
        <TouchableOpacity
        style={styles.roundCancelButton}
        onPress = {this.props.onPress}
        >
            <Icon
                name="close"
                size={45}
                color="white"
                style={{margin:8}}
            />
        </TouchableOpacity>
    )
  }
}
