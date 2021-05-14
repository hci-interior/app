import React from 'react';
import {Component} from 'react';
import { FlatList, TouchableOpacity, ImageBackground, View, Button, StyleSheet, Image} from 'react-native';
import { Text, Input } from 'react-native-elements';
import styles from '../stylesheet';

export default class ObjectSelectScreen extends Component{


    constructor(props) {
        super(props);

        this.state = {
            //room_id:props.route.params.room_id,
            objects:props.route.params.objects,
            filteredObjects:props.route.params.objects,
    };
};

    contains = (object, query) => {
        if (
            object.includes(query) 
        ) {
            return true
        }
        return false
    }

    searchFilterFunction = text => {    
        const newData = this.state.objects.filter(item => {      
          const itemData = `${item.name.toUpperCase()}   
          ${item.name.toUpperCase()} ${item.name.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        
        this.setState({ filteredObjects: newData });  
      };
      
    renderHeader = () => (
        <View
            style={{
            backgroundColor: '#fff',
            padding: 8,
            margin: 8,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={text => this.searchFilterFunction(text)}
                status='info'
                placeholder='Search object'
                style={{
                    borderRadius: 18,
                    borderColor: '#333',
                    backgroundColor: '#fff'
                }}
                textStyle={{ color: '#000' }}
                clearButtonMode='always'
            />
        </View>
    )

    render(){

        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.filteredObjects}
                    renderItem={({ item }) => (
                          
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Room', {object_id:item.id,object_img:item.img,object_name:item.name})}>

                            <View
                                style={{
                                flexDirection: 'row',
                                padding: 12,
                                alignItems: 'center',
                                backgroundColor: 'white',
                                }}
                            >
                                <Image
                                    style={{ width: 100, height: 100, borderRadius:8 }}
                                    source={ item.img }

                                />
                                <Text
                                category='s1'
                                style={{
                                    color: '#222222',
                                    marginLeft: 14,
                                    fontSize: 20,
                                }}>{`${item.name}`}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}