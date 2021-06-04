import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styles from '../stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';


class RoomScanScreen extends React.Component {
//export default function RoomScanScreen(props) {

  constructor(props) {
    super(props);

    this.state = {
        hasPermission: null,
        type:Camera.Constants.Type.back,
    }
  }
  
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  // setTimeout(()=>{
  //     props.navigation.navigate('RoomScanConfirm')
  // }, 20000);
   
  //return (

  componentDidMount(){
       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
           this.props.navigation.navigate('RoomScanConfirm')
       }, 15000);
    
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          this.setState({hasPermission: status});
        })();
        // }, []);

        if (this.state.hasPermission === null) {
          return <View />;
        }
        if (this.state.hasPermission === false) {
          return <Text>No access to camera</Text>;
        }

   }
   
   componentWillUnmount(){
       clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
   }

  render() {

    return(
    <View style={styles.containerScan}>
      <Camera style={styles.preview} type={this.state.type}>
        <Text style={{ fontSize: 18, fontWeight: "bold",color: 'white', marginTop:"5%"}}>
                  Please turn around 360°
        </Text>
        <View style={{flex:1,flexDirection:'row',alignItems:'center', justifyContent:"center", backgroundColor:'transparent'}}>
                 <Icon
                    name="angle-double-left"
                    size={60}
                    color="white"
                    style={{
                        flex:1,
                        paddingLeft:30,
                        justifyContent:"flex-start",
                    }}
                  />
                <Icon
                    name="angle-double-right"
                    size={60}
                    color="white"
                    style={{
                        flex:0,
                        paddingRight:30,
                        justifyContent:"flex-end",
                    }}
                 />
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.cancel}>
                <Text style={{ fontSize: 20, color: 'white', }}> Cancel Scan </Text>
                <Icon
                    name="close"
                    size={40}
                    color="white"
                    style={{margin:8}}
                />
            </TouchableOpacity>
      </Camera>
    </View>
  );
}
}

export default RoomScanScreen;

