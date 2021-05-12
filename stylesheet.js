import { StyleSheet } from 'react-native';
import { styleSheets } from 'min-document';
import {Colors} from './colors.js';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88889f',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 0
  },


  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
    width: '100%',
    height: '100%'
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },

  Buttons: {
    
    // Define your HEX color code here.
    backgroundColor: Colors.colorA,
    margin: 4,
  
    
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
    
  }

});

export default styles;