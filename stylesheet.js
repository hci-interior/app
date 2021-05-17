import { StyleSheet, Platform } from 'react-native';
import {Colors} from './colors.js';

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 0
  },

  homeScreenContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 0
  },

  title: {

      position: 'absolute',
      
      margin:0,
      color: "#ffffff",
      top:"35%",
      left:"19%",
      textAlign: "left",
      width:"100%",
      fontSize:28,
      fontFamily: "Helvetica",
      
      textShadowColor: '#555',
      textShadowOffset: { width: .6, height: .6 },
      textShadowRadius: 9,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
    width: '100%',
    height: '100%'
  },

  backgroundImage_sophia: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: '100%',
    height: '100%',
  },

  button_sophia: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 1,
    borderTopWidth:0.5,
    borderColor:Colors.white,
    backgroundColor: "white",
    opacity: 0.7
  },

  buttonText_sophia: {
    color:Colors.black,
    fontSize:20,
  },


  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 2
  },


  roomScanButton: {

    backgroundColor: Colors.colorA,
    marginBottom: 20,
    height:80,
    width: 80,
    opacity:0.55,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
  },

  roundButton2: {
    marginTop: 20,
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    opacity: 0.9,
    backgroundColor: '#ccc',
  },

  roundCancelButton: {
    marginTop: 20,
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    opacity: 0.9,
    backgroundColor: Colors.colorB,
  },

  roundConfirmButton: {
    marginTop: 20,
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    opacity: 0.9,
    backgroundColor: Colors.colorC,
  },

  Buttons: {
    
    backgroundColor: Colors.colorA,
    margin: 2,
    height:85,
  
    
  },
  bgColorB: {
    
    // Define your HEX color code here.
    backgroundColor: Colors.colorB
    
  },
  
  bgColorC:{
    
    // Define your HEX color code here.
    backgroundColor : Colors.colorC
    
  },

  bgColorD:{
    
    // Define your HEX color code here.
    backgroundColor : Colors.colorD
    
  },

  containerScan: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cancel: {
    flex: 0,
    backgroundColor: 'transparent',
    padding:  5,
   paddingHorizontal: 50,
    alignItems: 'center',
    alignSelf: 'center',
    margin: 15,
  },

  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingsAccountContainer: {
    marginTop: 40,
    marginBottom: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    flexDirection: 'row',

  },
  settingsAccountTitle: {
    fontFamily,
    color: 'black',
    fontSize: 24,
  },
  settingsAccountSubtitle: {
    fontFamily,
    color: '#999',
    fontSize: 14,
  },

});

const statusBarHeight = Platform.OS === 'ios' ? 35 : 0

export default styles;
