import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/HomeScreen';
import HomeDetailScreen from '../screens/home/HomeDetailScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import { BotIcon, ChatBotIcon, HomeIcon, ProfileIcon } from '../assets/svg/SvgImg';
import { colors } from '../constant';
import { useResponsive } from '../utils/dimensions';
import JavaScript from '../screens/home/JavaScript';
import AnswerScreen from '../screens/home/AnswerScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import AboutUsScreen from '../screens/profile/AboutUsScreen';
import SavedScreen from '../screens/home/SavedScreen';
import ChatScreen from '../screens/home/ChatScreen';
import PrivacyPolicyScreen from '../screens/profile/PrivacyPolicyScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/* Home Stack */
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="JavaScript" component={JavaScript} />
      <Stack.Screen name="AnswerScreen" component={AnswerScreen} />
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
      <Stack.Screen name="HomeDetails" component={HomeDetailScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

/* Profile Stack */
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
      <Stack.Screen name="AnswerScreen" component={AnswerScreen} />
       <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
      
    </Stack.Navigator>
  );
};

/* Chat Stack */
const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

/* Bottom Tabs */
const BottomTabNavigator = () => {
  const { s, vs, ms, fs, width } = useResponsive()
  return (
    // <Tab.Navigator  initialRouteName='Home' screenOptions={{ headerShown: false }}>
    //   <Tab.Screen name="Home" component={HomeStack} />
    //   <Tab.Screen name="Profile" component={ProfileStack} />
    // </Tab.Navigator>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.theme,
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return (
              <HomeIcon
                width={ms(24)}
                height={ms(24)}
                fill={focused ? colors.theme : '#A0A0A0'}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <ProfileIcon
                width={ms(24)}
                height={ms(24)}
                fill={focused ? colors.theme : '#A0A0A0'}
              />
            );
            
          }
          else if (route.name === 'Chat') {
            return (
              <BotIcon
                width={ms(24)}
                height={ms(24)}
                fill={focused ? colors.theme : '#A0A0A0'}
              />
            );
            
          }
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          // borderTopColor: '#ddd',
          // height: vs(50),
          padding: ms(20),
          paddingBottom: vs(4),
          borderTopRightRadius: ms(10),
          borderTopLeftRadius: ms(10),
        },


      })}

    >
      <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
