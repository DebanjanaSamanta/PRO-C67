import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen  from '../screens/Transaction';
import Searchscreen from '../screens/search';

const Tab=createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Transaction' component={TransactionScreen}/>
                    <Tab.Screen name='Search' component={Searchscreen}/>
                </Tab.Navigator>

            </NavigationContainer>
        )
    }
    

    
}
