import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class SearchScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>search screen</Text>
            </View>
        );
    }
} 

const styles = Stylesheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#5653D4"
    },
    text:{
        color : "#FFFF",
        fontSize : 30,
    }
});