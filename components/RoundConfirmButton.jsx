import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from '../stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RoundConfirmButton extends React.Component {
  render(){
    return (
        <TouchableOpacity
        style={styles.roundConfirmButton}
        onPress = {this.props.onPress}
        >
            <Icon
                name="check"
                size={45}
                color="white"
                style={{margin:8}}
            />
        </TouchableOpacity>
    )
  }
}
