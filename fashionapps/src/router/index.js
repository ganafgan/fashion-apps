import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigator } from '../components';
import { Cart, Home, ImageDetail, ProductDetail, SignIn, SignUp, Splash, UserProfile, Wishlist } from '../pages';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const MainApp = () => {
    return (
        <Tab.Navigator 
            tabBar={props => <BottomNavigator {...props} 
        />}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Wishlist' component={Wishlist} />
            <Tab.Screen name='Cart' component={Cart} />
            <Tab.Screen name='Account' component={SignIn} />
        </Tab.Navigator>
    )
}
const Router = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Profile'
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            
        >   
            <Stack.Screen name='UserProfile' component={UserProfile} options={{headerShown: false}} />
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} options={{headerShown: false}} />
            <Stack.Screen name='ImageDetail' component={ImageDetail} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
