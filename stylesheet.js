import { StyleSheet } from 'react-native';
import { styleSheets } from 'min-document';
import {Colors} from './colors.js';


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
    padding: 30,
    margin: 1,
    //borderTopWidth:0.0,
    //borderColor:"gray",
    backgroundColor: "white",
    opacity: 0.6
  },

  buttonText_sophia: {
    color:'black',
    fontSize:20,
  },


  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 2
  },


  roundButton: {

    backgroundColor: Colors.colorA,
    margin: 50,
    height:50,
    width: 50,
    //justifyContent: 'center',
    //alignContent: 'center',
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
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    borderWidth: 1,
    borderColor:'white',
  },



});

export default styles;