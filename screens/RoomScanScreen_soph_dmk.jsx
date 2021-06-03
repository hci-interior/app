import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styles from '../stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RoomScanScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  setTimeout(()=>{
      props.navigation.navigate('RoomScanConfirm')
  }, 20000);
   
  return (
    <View style={styles.containerScan}>
      <Camera style={styles.preview} type={type}>
        {/* <View style={styles.buttonContainer}> */}

        <View style={{flex:1,flexDirection:'row',alignItems:'center', justifyContent:'center', backgroundColor:'transparent'}}>
                 <Icon
                    name="angle-double-left"
                    size={60}
                    color="white"
                    style={{
                        flex:1,
                        paddingLeft:30,
                        alignContent:'flex-start',
                    }}/>
                <Icon
                    name="angle-double-right"
                    size={60}
                    color="white"
                    style={{
                        flex:0,
                        paddingRight:30,
                        alignContent:'flex-end',
                    }}
                   />

            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.cancel}>
                <Text style={{ fontSize: 20, color: 'white', }}> Cancel Scan </Text>
                <Icon
                    name="close"
                    size={40}
                    color="white"
                    style={{margin:8}}
                />
            </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity> */}
        {/* </View> */}
      </Camera>
    </View>
  );
}
