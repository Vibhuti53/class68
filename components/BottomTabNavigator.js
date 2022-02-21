import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from '../screens/Transaction';
import SearchScreens from '../screens/Search';
import { NavigationContext } from 'react-navigation';

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name = 'Transaction' component ={TransactionScreen} />
                    <Tab.Screen name = 'Search' component ={SearchScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}