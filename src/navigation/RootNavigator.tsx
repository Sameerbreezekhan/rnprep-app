
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigatore';
import { useAppContext } from '../context/AppContext';


const RootNavigator = () => {
    const { userName } = useAppContext();
    const isAuthenticated = userName;

    console.log("iddddddd", isAuthenticated)
    return isAuthenticated ? <BottomTabNavigator /> : <AuthNavigator />;

}

export default RootNavigator;