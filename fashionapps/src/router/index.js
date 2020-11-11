import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Account, Cart, Home, Splash, Wishlist } from '../pages';
import { BottomNavigator } from '../components';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Wishlist' component={Wishlist} />
            <Tab.Screen name='Cart' component={Cart} />
            <Tab.Screen name='Account' component={Account} />
        </Tab.Navigator>
    )
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
