import React from 'react';
import {Component} from 'react';
import { FlatList, TouchableOpacity, View, Image} from 'react-native';
import { Text, Input } from 'react-native-elements';
import styles from '../stylesheet';

export default class RoomSelectScreen extends Component{


    constructor(props) {
        super(props);

        this.state = {
            //room_id:props.route.params.room_id,
            rooms:props.route.params.rooms,
            filteredRooms:props.route.params.rooms,
    };
};

    contains = (room, query) => {
        if (
            room.includes(query) 
        ) {
            return true
        }
        return false
    }

    searchFilterFunction = text => {    
        const newData = this.state.rooms.filter(item => {      
          const itemData = `${item.name.toUpperCase()}   
          ${item.name.toUpperCase()} ${item.name.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        
        this.setState({ filteredRooms: newData });  
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
                placeholder='Search room'
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
                    data={this.state.filteredRooms}
                    renderItem={({ item }) => (
                          
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Room', {room_id:item.id,room_img:item.img,room_name:item.name})}>

                            <View
                                style={{
                                flexDirection: 'column',
                                padding: 12,
                                alignItems: 'center',
                                backgroundColor: 'white',
                                }}
                            >

                            <Text
                                category='s1'
                                style={{
                                    color: '#222222',
                                    margin: 6,
                                    fontSize: 20,
                                }}>{`${item.name}`}
                            </Text>

                                <Image
                                    style={{ width: 300, height: 200, borderRadius:8 }}
                                    source={ item.img }

                                />
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString() }

                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}