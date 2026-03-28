// src/navigation/GuestNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import BottomTabNavigator from './BottomTabNavigator';




const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabNavigator}
            />


        </Stack.Navigator>
    );
}
export default AuthNavigator;