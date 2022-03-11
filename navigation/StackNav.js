import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CanteenUsagesScreen from '../components/canteenUsages/view/CanteenUsagesScreen';
import LoginScreen from '../components/login/view/LoginScreen';
import DrawerNav from './DrawerNav';
import MenuListScreen from '../components/menuList/view/MenuListScreen';
import MenuUsageReport from '../components/menuUsagesReport/view/MenuUsageReport';

const Stack = createStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="CanteenUsagesScreen"
                component={CanteenUsagesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MenuListScreen"
                component={MenuListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MenuUsageReport"
                component={MenuUsageReport}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="DrawerNav"
                component={DrawerNav}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default StackNav;